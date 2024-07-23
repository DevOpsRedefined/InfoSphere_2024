import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import {
  PanelBody,
  TextControl,
  Button,
  ToggleControl,
  RangeControl,
} from "@wordpress/components";
import {
  InspectorControls,
  useBlockProps,
  RichText,
} from "@wordpress/blockEditor";
import { Fragment, useState } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";

console.log("im here");
registerBlockType("custom/slick-slider", {
  title: __("Slick Slider"),
  icon: "slides",
  category: "common",
  attributes: {
    slides: {
      type: "array",
      default: [
        {
          title: "Managed Service Provider (MSP)",
          subtitle:
            "We specialize in remotely managing customer’s IT infrastructure and/or end-user systems, typically on a proactive basis and under a subscription model.",
          link: "",
        },
        {
          title: "Cloud Services and Solutions",
          subtitle:
            "We work with the leading cloud solutions provider on the market and deploy the best ones for the businesses we work with to help them work more efficiently.",
          link: "",
        },
        {
          title: "Cyber & IT Network Security",
          subtitle:
            "we’re experienced at interpreting the complexities of industry regulations into processes and procedures that not only meet requirements but can actually improve operations.",
          link: "",
        },
        {
          title: "Proactive Server and Desktop Monitoring",
          subtitle:
            "If you need assistance planning, implementing, and managing your backup, disaster recovery, and business continuity plans, talk to a trusted IT consultant.",
          link: "",
        },
      ],
    },
    sliderId: {
      type: "string",
      default: "slick-slider",
    },

    isOverlaySlider: Boolean, // use this to add absolute class to div
    topPosition: Number, // use this to add top value for an overlay
  },

  edit: ({ attributes, setAttributes }) => {
    // const { content, sliderId } = attributes;

    /* new */

    const { slides, sliderId, isOverlaySlider, topPosition } = attributes;

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
        slides: [...slides, { title: "", subtitle: "", link: "" }],
      });
    };

    const blockProps = useBlockProps({
      // className: "gtg-demo-h1", // not working on higher element ie div
      // "data-id": "special-h1-id", // not working
    });

    const [openPanelIndex, setOpenPanelIndex] = useState(null);
    const [openSliderOverlayState, setOpenSliderOverlayState] = useState(false);

    const togglePanel = (index) => {
      setOpenPanelIndex(openPanelIndex === index ? null : index);
    };

    const renderExtraOverlayOptions = () => {
      console.log("isOverlaySlider", isOverlaySlider);
      if (isOverlaySlider) {
        return (
          <RangeControl
            label="Border Radius"
            value={attributes.topPosition}
            onChange={(value) => setAttributes({ topPosition: value })}
            min={50}
            max={80}
            step={10}
            marks={[
              {
                value: 50,
                label: "50",
              },
              {
                value: 60,
                label: "60",
              },
              {
                value: 70,
                label: "70",
              },
              {
                value: 80,
                label: "80",
              },
            ]}
          />
        );
      } else {
        return null;
      }
    };

    /* new */
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Slider Settings")}>
            <TextControl
              label={__("Slider ID")}
              value={sliderId}
              onChange={(value) => setAttributes({ sliderId: value })}
            />

            <PanelBody
              title={__("Slider overlay settings")}
              opened={
                attributes.isOverlaySlider ? true : openSliderOverlayState
              }
              onToggle={() =>
                setOpenSliderOverlayState(!openSliderOverlayState)
              }
            >
              <ToggleControl
                label={wp.i18n.__("Accent-image main parent", "awp")}
                checked={!!attributes.isOverlaySlider}
                // checked={false}
                onChange={() => {
                  setAttributes({
                    isOverlaySlider: !attributes.isOverlaySlider,
                  }),
                    setOpenSliderOverlayState(true);
                }}
              />
              {renderExtraOverlayOptions()}
            </PanelBody>
          </PanelBody>

          {slides.map((slide, index) => (
            <PanelBody
              title={__("Slide ") + (index + 1)}
              initialOpen={openPanelIndex === index}
              opened={openPanelIndex === index} // opened works for toggle
              onToggle={() => togglePanel(index)}
              key={index}
            >
              <TextControl
                label={__("Title")}
                value={slide.title}
                onChange={(value) => updateSlide(index, "title", value)}
              />
              <TextControl
                label={__("Subtitle")}
                value={slide.subtitle}
                onChange={(value) => updateSlide(index, "subtitle", value)}
              />
              <TextControl
                label={__("Link")}
                value={slide.link}
                onChange={(value) => updateSlide(index, "link", value)}
              />
              <Button isDestructive onClick={() => removeSlide(index)}>
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

        {/****
         *  add some styles for admin
         ****/}

        {/* <div {...blockProps}>
          <div className={sliderId}>
            {slides.map((slide, index) => (
              <div
                className="slick-slide--wont-work"
                key={index}
                style={{
                  border: "1px dashed #ddd",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <h2>{slide.title || __("Title")}</h2>
                <p>{slide.subtitle || __("Subtitle")}</p>
                {slide.link && (
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {__("Read More")}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div> */}

        <div
          {...blockProps}
          className={
            (topPosition ? "top-" + topPosition : "") +
            (isOverlaySlider ? " position-absolute" : "") +
            " slick-slider-wrapper"
          }
        >
          <div className={sliderId + " slick-track"}>
            {slides.map((slide, index) => (
              <div key={index} className="col slick-slide">
                <div className="col-item">
                  <h2 className="has-helvetica-neue-font-family has-medium-font-size m-0">
                    {slide.title || __("Title")}
                  </h2>
                  <p className="has-helvetica-neue-font-family">
                    {slide.subtitle || __("Subtitle")}
                  </p>
                </div>
                {slide.link && (
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {__("Read More")}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="btn-wrap">
            <button className="prev-btn"></button>
            <button className="next-btn"></button>
          </div>
        </div>
      </Fragment>
    );
  },
  save: ({ attributes }) => {
    const { slides, sliderId, isOverlaySlider, topPosition } = attributes;

    return (
      /****
       *  add some styles for fe
       ****/
      // <div className="slick-slider-wrapper">
      //   <div className={sliderId}>
      //     {slides.map((slide, index) => (
      //       <div key={index} className="col">
      //         <div className="col-item">
      //           <h2 className="has-helvetica-neue-font-family has-medium-font-size m-0">
      //             {slide.title}
      //           </h2>
      //           <p className="has-helvetica-neue-font-family">
      //             {slide.subtitle}
      //           </p>
      //           {slide.link && (
      //             <a
      //               href={slide.link}
      //               target="_blank"
      //               rel="noopener noreferrer"
      //             >
      //               {__("Read More")}
      //             </a>
      //           )}
      //         </div>
      //       </div>
      //     ))}
      //   </div>

      //   <div className="btn-wrap">
      //     <button className="prev-btn"></button>
      //     <button className="next-btn"></button>
      //   </div>
      // </div>

      <div
        className={
          (topPosition ? "top-" + topPosition : "") +
          (isOverlaySlider ? " position-absolute" : "") +
          " slick-slider-wrapper"
        }
      >
        <div className={sliderId}>
          {slides.map((slide, index) => (
            <div key={index} className="col">
              <div className="col-item">
                <h2 className="has-helvetica-neue-font-family has-medium-font-size m-0">
                  {slide.title}
                </h2>
                <p className="has-helvetica-neue-font-family">
                  {slide.subtitle}
                </p>
              </div>
              {slide.link && (
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  {__("Read More")}
                </a>
              )}
              {/* </div> */}
            </div>
          ))}
        </div>

        <div className="btn-wrap">
          <button className="prev-btn"></button>
          <button className="next-btn"></button>
        </div>
      </div>
    );
  },
});
// const { createHigherOrderComponent } = wp.compose;
const withCustomClassName = createHigherOrderComponent((BlockListBlock) => {
  return (props) => {
    if (props.attributes.size) {
      return (
        <BlockListBlock
          {...props}
          className={"block-" + props.attributes.size}
        />
      );
    } else {
      return <BlockListBlock {...props} />;
    }
  };
}, "withClientIdClassName");

wp.hooks.addFilter(
  "editor.BlockListBlock",
  "my-plugin/with-client-id-class-name",
  withCustomClassName
);
