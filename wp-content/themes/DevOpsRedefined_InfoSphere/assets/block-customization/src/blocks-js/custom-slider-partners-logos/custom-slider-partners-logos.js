import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import {
  InspectorControls,
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/blockEditor";
import { Fragment, useState } from "@wordpress/element";

registerBlockType("custom/logos-slick-slider", {
  title: __("Logos Slider"),
  icon: "slides",
  category: "common",
  attributes: {
    slides: {
      type: "array",
      default: [],
    },
    sliderId: {
      type: "string",
      default: "logos-slick-slider",
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { slides, sliderId } = attributes;
    const [openPanelIndex, setOpenPanelIndex] = useState(null);

    const updateSlide = (index, key, value) => {
      const newSlides = [...slides];
      newSlides[index][key] = value;
      setAttributes({ slides: newSlides });
    };

    const removeSlide = (index) => {
      const newSlides = slides.filter((slide, i) => i !== index);
      setAttributes({ slides: newSlides });
    };

    const addSlide = () => {
      setAttributes({
        slides: [...slides, { title: "", imageUrl: "", imageId: 0 }],
      });
    };

    const togglePanel = (index) => {
      setOpenPanelIndex(openPanelIndex === index ? null : index);
    };

    const onSelectImage = (index, media) => {
      updateSlide(index, "imageUrl", media.url);
      updateSlide(index, "imageId", media.id);
    };

    const blockProps = useBlockProps();

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Slider Settings")} initialOpen={true}>
            <TextControl
              label={__("Slider ID")}
              value={sliderId}
              onChange={(value) => setAttributes({ sliderId: value })}
            />
          </PanelBody>
          {slides &&
            slides.map((slide, index) => (
              <PanelBody
                title={__("Slide ") + (index + 1)}
                initialOpen={openPanelIndex === index}
                onToggle={() => togglePanel(index)}
                key={index}
              >
                <TextControl
                  label={__("Title")}
                  value={slide.title}
                  onChange={(value) => updateSlide(index, "title", value)}
                />
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => onSelectImage(index, media)}
                    allowedTypes={["image"]}
                    value={slide.imageId}
                    render={({ open }) => (
                      <div>
                        <Button onClick={open} isPrimary>
                          {slide.imageUrl
                            ? __("Replace Image")
                            : __("Upload Image")}
                        </Button>
                        {slide.imageUrl && (
                          <img
                            src={slide.imageUrl}
                            alt={__("Slide Image")}
                            style={{ marginTop: "10px", maxWidth: "100%" }}
                          />
                        )}
                      </div>
                    )}
                  />
                </MediaUploadCheck>
                <Button
                  isDestructive
                  onClick={() => removeSlide(index)}
                  style={{ marginTop: "10px" }}
                >
                  {__("Remove Slide")}
                </Button>
              </PanelBody>
            ))}
          <PanelBody title={__("Add Slide")}>
            <Button isPrimary onClick={addSlide}>
              {__("Add Slide")}
            </Button>
          </PanelBody>
        </InspectorControls>

        <div {...blockProps} className="logo-slick-slider-wrapper">
          <div className={sliderId}>
            {slides &&
              slides.map(
                (slide, index) =>
                  slide.imageUrl && (
                    <div className="logo-slick-slider" key={index}>
                      <span
                        key={index}
                        className="logo-image-container"
                        style={{
                          backgroundImage: `url(${slide.imageUrl})`,
                        }}
                      ></span>
                    </div>
                  )
              )}
          </div>
        </div>
      </Fragment>
    );
  },
  save: ({ attributes }) => {
    const { slides, sliderId } = attributes;
    console.log("slides", slides);

    return (
      <div className="logo-slick-slider-wrapper">
        <div className={sliderId}>
          {slides &&
            slides.map((slide, index) => (
              <div className="logo-slick-slider" key={index}>
                {slide.imageUrl && (
                  <span
                    key={index}
                    className="logo-image-container"
                    style={{ backgroundImage: `url(${slide.imageUrl})` }}
                  ></span>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  },
});

// import { __ } from "@wordpress/i18n";
// import { registerBlockType } from "@wordpress/blocks";
// import {
//   PanelBody,
//   TextControl,
//   // TextareaControl,
//   Button,
//   // ToggleControl,
//   // RangeControl,
//   // IconButton,
// } from "@wordpress/components";
// import {
//   InspectorControls,
//   useBlockProps,
//   MediaUpload,
//   MediaUploadCheck,
//   // RichText,
// } from "@wordpress/blockEditor";
// import { Fragment, useState } from "@wordpress/element";
// import { withSelect, withDispatch } from "@wordpress/data";

// // import { createHigherOrderComponent } from "@wordpress/compose";
// registerBlockType("custom/logos-slick-slider", {
//   title: __("Logos Slider"),
//   icon: "slides",
//   category: "common",
//   // attributes: {
//   //   sliderId: {
//   //     type: "string",
//   //     default: "logos-slick-slider",
//   //   },
//   // },

//   attributes: {
//     slides: {
//       type: "array",
//       source: "meta",
//       meta: "_slick_slider_data_5",
//     },
//   },

//   edit: withSelect((select) => {
//     const meta = select("core/editor").getEditedPostAttribute("meta");
//     let slides = [];

//     try {
//       if (meta["_slick_slider_data_5"]) {
//         // slides = JSON.parse(meta["_slick_slider_data_5"]);
//         slides = meta["_slick_slider_data_5"];
//       }
//     } catch (error) {
//       console.error("Error parsing JSON:", error);
//       slides = []; // Default to empty array on error
//     }

//     console.log("Meta:", meta); // Check if '_slick_slider_data_5' is in meta
//     console.log("Slides:", slides); // Check the slides array
//     return {
//       slides,
//     };
//   })(
//     withDispatch((dispatch, ownProps, { select }) => {
//       const meta = select("core/editor").getEditedPostAttribute("meta");

//       return {
//         // setSlides: (slides) => {
//         //   const newMeta = {
//         //     ...meta,
//         //     _slick_slider_data_5: JSON.stringify(slides),
//         //   };
//         //   dispatch("core/editor").editPost({ meta: newMeta });
//         // },

//         setSlides: (slides) => {
//           try {
//             if (!Array.isArray(slides)) {
//               throw new Error("Slides should be an array");
//             }
//             console.log("slides in set data", slides);
//             const slidesJson = JSON.stringify([
//               {
//                 imageUrl:
//                   "http://localhost/InfoSphere_2024/wp-content/uploads/2024/08/Acronis.svg",
//                 imageId: 548,
//               },
//             ]);
//             console.log("after stringfy ", slidesJson);

//             const newMeta = {
//               ...meta,
//               _slick_slider_data_5: [
//                 {
//                   imageUrl:
//                     "http://localhost/InfoSphere_2024/wp-content/uploads/2024/08/Acronis.svg",
//                   imageId: 548,
//                 },
//               ],
//             };

//             console.log("newMeta", newMeta);
//             dispatch("core/editor").editPost({ meta: newMeta });
//           } catch (error) {
//             console.error("Error saving slides:", error);
//           }
//         },
//       };
//     })(({ slides, setSlides, attributes, setAttributes }) => {
//       const [openPanelIndex, setOpenPanelIndex] = useState(null);

//       const updateSlide = (index, key, value) => {
//         const newSlides = [...slides];
//         newSlides[index][key] = value;
//         setSlides(newSlides);
//       };

//       const removeSlide = (index) => {
//         const newSlides = slides.filter((_, i) => i !== index);
//         setSlides(newSlides);
//       };

//       const addSlide = () => {
//         setSlides([...slides, { imageUrl: "", imageId: 0 }]);
//       };

//       const togglePanel = (index) => {
//         setOpenPanelIndex(openPanelIndex === index ? null : index);
//       };

//       const onSelectImage = (index, media) => {
//         updateSlide(index, "imageUrl", media.url);
//         updateSlide(index, "imageId", media.id);
//       };

//       const blockProps = useBlockProps();

//       return (
//         <Fragment>
//           <InspectorControls>
//             <PanelBody title={__("Slider Settings")} initialOpen={true}>
//               <TextControl
//                 label={__("Slider ID")}
//                 value={attributes.sliderId}
//                 onChange={(value) => setAttributes({ sliderId: value })}
//               />
//             </PanelBody>
//             {slides.map((slide, index) => (
//               <PanelBody
//                 title={__("Slide ") + (index + 1)}
//                 initialOpen={openPanelIndex === index}
//                 onToggle={() => togglePanel(index)}
//                 key={index}
//               >
//                 <MediaUploadCheck>
//                   <MediaUpload
//                     onSelect={(media) => onSelectImage(index, media)}
//                     allowedTypes={["image"]}
//                     value={slide.imageId}
//                     render={({ open }) => (
//                       <div>
//                         <Button onClick={open} isPrimary>
//                           {slide.imageUrl
//                             ? __("Replace Image")
//                             : __("Upload Image")}
//                         </Button>
//                         {slide.imageUrl && (
//                           <img
//                             src={slide.imageUrl}
//                             alt={__("Slide Image")}
//                             style={{ marginTop: "10px", maxWidth: "100%" }}
//                           />
//                         )}
//                       </div>
//                     )}
//                   />
//                 </MediaUploadCheck>
//                 <Button
//                   isDestructive
//                   onClick={() => removeSlide(index)}
//                   style={{ marginTop: "10px" }}
//                 >
//                   {__("Remove Slide")}
//                 </Button>
//               </PanelBody>
//             ))}
//             <PanelBody title={__("Add Slide")}>
//               <Button isPrimary onClick={addSlide}>
//                 {__("Add Slide")}
//               </Button>
//             </PanelBody>
//           </InspectorControls>
//           <div {...blockProps}>
//             <div className={attributes.sliderId}>
//               {slides.map((slide, index) => (
//                 <div
//                   className="slick-slide"
//                   key={index}
//                   style={{
//                     border: "1px dashed #ddd",
//                     padding: "10px",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   {slide.imageUrl && (
//                     <img
//                       src={slide.imageUrl}
//                       alt={slide.imageId}
//                       style={{ width: "100%", height: "auto" }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Fragment>
//       );
//     })
//   ),
//   // save: () => {
//   //   // The save function is no longer needed since the data is stored in post meta.
//   //   return null;
//   // },

//   save: ({ attributes }) => {
//     console.log("in save");
//     const { slides } = attributes;
//     console.log("in save attributes", attributes);

//     console.log("in save slides", slides);

//     return (
//       <div className="wp-block-custom-logos-slick-slider logos-slick-slider">
//         {slides &&
//           slides.map((slide, index) => (
//             <div key={index} className="logo-slick-slide">
//               {slide.imageUrl && (
//                 <img
//                   src={slide.imageUrl}
//                   alt={`Slide ${index + 1}`}
//                   style={{ width: "100%", height: "auto" }}
//                 />
//               )}
//             </div>
//           ))}
//       </div>
//     );
//   },
// });
