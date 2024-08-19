import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import {
  PanelBody,
  TextControl,
  TextareaControl,
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
    isFixedsliderWidth: { type: "boolean", default: true },
  },

  edit: ({ attributes, setAttributes }) => {
    // const { content, sliderId } = attributes;

    /* new */

    const {
      slides,
      sliderId,
      isOverlaySlider,
      topPosition,
      isFixedsliderWidth,
    } = attributes;

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
            label="Top position"
            value={attributes.topPosition}
            onChange={(value) => setAttributes({ topPosition: value })}
            min={250}
            max={750}
            step={100}
            marks={[
              {
                value: 250,
                label: "250",
              },
              {
                value: 350,
                label: "350",
              },
              {
                value: 450,
                label: "450",
              },
              {
                value: 550,
                label: "550",
              },
              {
                value: 650,
                label: "650",
              },
              {
                value: 750,
                label: "750",
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

            <ToggleControl
              label={wp.i18n.__("Fixed Slider Width -- ForAccentImage", "awp")}
              checked={!!isFixedsliderWidth}
              // checked={false}
              onChange={() => {
                setAttributes({
                  isFixedsliderWidth: !isFixedsliderWidth,
                }),
                  setOpenSliderOverlayState(true);
              }}
            />
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
              <TextareaControl
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

        <div
          {...blockProps}
          className={
            (topPosition ? "top-" + topPosition : "") +
            (isOverlaySlider ? " position-absolute" : "") +
            (isFixedsliderWidth
              ? " fixed-width-slick-slider-wrapper"
              : " slick-slider-wrapper")
          }
        >
          <div className={sliderId + " slick-track"}>
            {slides.map((slide, index) => (
              <div key={index} className="col slick-slide">
                <div className="col-item">
                  <h2 className="has-helvetica-neue-font-family has-info-medium-font-size m-0">
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
    const {
      slides,
      sliderId,
      isOverlaySlider,
      topPosition,
      isFixedsliderWidth,
    } = attributes;

    return (
      <div
        className={
          (topPosition ? "top-" + topPosition : "") +
          (isOverlaySlider ? " position-absolute" : "") +
          (isFixedsliderWidth
            ? " fixed-width-slick-slider-wrapper"
            : " slick-slider-wrapper")
        }
      >
        <div className={sliderId}>
          {slides.map((slide, index) => (
            <div key={index} className="col">
              <div className="col-item">
                <h2 className="has-helvetica-neue-font-family has-info-medium-font-size m-0">
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
