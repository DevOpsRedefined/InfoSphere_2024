import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/blockEditor";
import { Fragment } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import classnames from "classnames";
import { useSelect } from "@wordpress/data";

// alert("fvdsvsdv");
function addBorderRadiusAttributeToGroupBlock(settings, name) {
  if (typeof settings.attributes !== "undefined") {
    if (name == "core/group") {
      settings.attributes = Object.assign(settings.attributes, {
        groupBorderRadius: {
          type: "number",
          default: 0,
        },

        /*****
         * this adds class gsap-group-text-animation to all group when turned on
         *
         * to remove it toggle it off
         *
         * TODO: Have multiple toggle which opens nested toggle to differenciate animation for image + block
         *****/
        groupAnimation: {
          type: "boolean",
          default: false,
        },
      });
    }
  }
  return settings;
}

addFilter(
  "blocks.registerBlockType",
  "awp/add-group-border-radius",
  addBorderRadiusAttributeToGroupBlock
);

const groupBorderRadiusControl = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    if (props.name !== "core/group") {
      return <BlockEdit {...props} />;
    }
    const { attributes, setAttributes } = props;
    const { groupBorderRadius, groupAnimation } = attributes;

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody
            title={__("Custom group border radius", "awp")}
            initialOpen={false}
          >
            <RangeControl
              label="Custom border radius"
              value={groupBorderRadius}
              onChange={(value) => setAttributes({ groupBorderRadius: value })}
              min={0}
              max={20}
            />
          </PanelBody>

          <PanelBody
            title={__("Custom group animation", "awp")}
            initialOpen={false}
          >
            <ToggleControl
              label="Group animation -- for text"
              checked={!!groupAnimation}
              onChange={() =>
                setAttributes({ groupAnimation: !groupAnimation })
              }
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, "groupBorderRadiusControl");

addFilter(
  "editor.BlockEdit",
  "awp/group-advanced-control",
  groupBorderRadiusControl
);

function groupApplyClassForBorderRadius(extraProps, blockType, attributes) {
  const { groupBorderRadius, groupAnimation } = attributes;

  if (typeof groupBorderRadius !== "undefined" && groupBorderRadius) {
    extraProps.className =
      extraProps.className + " border-radius-" + groupBorderRadius;
  }

  if (typeof groupAnimation !== "undefined" && groupAnimation) {
    extraProps.className = extraProps.className + " gsap-group-text-animation";
  }

  return extraProps;
}

addFilter(
  "blocks.getSaveContent.extraProps",
  "awp/group-apply-border-radius-class",
  groupApplyClassForBorderRadius
);
