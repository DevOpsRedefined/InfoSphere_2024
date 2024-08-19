import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/blockEditor";
import { Fragment } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
// import classnames from "classnames";
// import { useSelect } from "@wordpress/data";

// alert("fvdsvsdv");
function addBorderRadiusAttributeToImageBlock(settings, name) {
  if (typeof settings.attributes !== "undefined") {
    if (name == "core/image") {
      settings.attributes = Object.assign(settings.attributes, {
        imageBorderRadius: {
          type: "number",
          default: 0,
        },

        /*****
         * this adds class gsap-default-animation to all imnages by default
         *
         * to remove it toggle it off
         *****/
        imageAnimation: {
          type: "boolean",
          default: true,
        },
      });
    }
  }
  return settings;
}

addFilter(
  "blocks.registerBlockType",
  "awp/add-image-border-radius",
  addBorderRadiusAttributeToImageBlock
);

const imageBorderRadiusControl = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    if (props.name !== "core/image") {
      return <BlockEdit {...props} />;
    }
    const { attributes, setAttributes } = props;
    const { imageBorderRadius, imageAnimation } = attributes;

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody
            title={__("Custom image border radius", "awp")}
            initialOpen={false}
          >
            <RangeControl
              label="Custom border radius"
              value={imageBorderRadius}
              onChange={(value) => setAttributes({ imageBorderRadius: value })}
              min={0}
              max={20}
            />
          </PanelBody>

          <PanelBody
            title={__("Custom image animation", "awp")}
            initialOpen={true}
          >
            <ToggleControl
              label="Default gsap animation"
              checked={!!imageAnimation}
              onChange={() =>
                setAttributes({ imageAnimation: !imageAnimation })
              }
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, "imageBorderRadiusControl");

addFilter(
  "editor.BlockEdit",
  "awp/image-advanced-control",
  imageBorderRadiusControl
);

function imageApplyClassForBorderRadius(extraProps, blockType, attributes) {
  const { imageBorderRadius, imageAnimation } = attributes;

  if (typeof imageBorderRadius !== "undefined" && imageBorderRadius) {
    extraProps.className =
      extraProps.className + " border-radius-" + imageBorderRadius;
  }
  if (typeof imageAnimation !== "undefined" && imageAnimation) {
    extraProps.className = extraProps.className + " gsap-default-animation";
  }

  return extraProps;
}

addFilter(
  "blocks.getSaveContent.extraProps",
  "awp/image-apply-border-radius-class",
  imageApplyClassForBorderRadius
);
