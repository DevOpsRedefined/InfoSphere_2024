import { __ } from "@wordpress/i18n";
// import { registerBlockType } from "@wordpress/blocks";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";
import {
  InspectorControls,
  // InspectorAdvancedControls,
} from "@wordpress/blockEditor";
// import { props } from "@wordpress/props";
import { Fragment } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
// import { classnames } from "classnames";
import classnames from "classnames";
import { useSelect } from "@wordpress/data";

const addCustomBlockGapAttribute = (settings, name) => {
  if (name !== "core/navigation") {
    return settings;
  }

  settings.attributes = Object.assign(settings.attributes, {
    customBlockGap: {
      type: "number",
      default: 0,
    },
  });

  return settings;
};
addFilter(
  "blocks.registerBlockType",
  "awp/jetpack-slider-attribute",
  addCustomBlockGapAttribute
);

const coreNavigationCustomBlockGap = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    if (props.name !== "core/navigation") {
      return <BlockEdit {...props} />;
    }

    const { attributes, setAttributes } = props;
    const { customBlockGap } = attributes;

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody title={__("Custom Spacing", "awp")} initialOpen={false}>
            <RangeControl
              label="Custom Block Gap"
              value={customBlockGap}
              onChange={(value) => setAttributes({ customBlockGap: value })}
              min={0}
              max={40}
              step={5}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, "coreNavigationCustomBlockGap");

addFilter(
  "editor.BlockEdit",
  "awp/cover-advanced-control",
  coreNavigationCustomBlockGap
);
const applyExtraClassInEditor = (BlockListBlock) => (props) => {
  if (props.name !== "core/navigation") {
    return <BlockListBlock {...props} />;
  }

  const { customBlockGap } = props.attributes;

  return (
    <BlockListBlock
      {...props}
      className={`custom-block-gap-${customBlockGap}`}
    />
  );
};

addFilter(
  "editor.BlockListBlock",
  "my-plugin/navigation-link/apply-extra-class-in-editor",
  applyExtraClassInEditor
);
