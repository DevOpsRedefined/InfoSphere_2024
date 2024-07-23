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

console.log("in new fgile");
// const { addFilter } = wp.hooks;
// const { createHigherOrderComponent } = wp.compose;
// const { InspectorControls } = wp.blockEditor;
// const { PanelBody, RangeControl } = wp.components;
// const { Fragment } = wp.element;

const addCustomRangeAttribute = (settings, name) => {
  if (name !== "core/navigation-link") {
    return settings;
  }

  settings.attributes = Object.assign(settings.attributes, {
    borderRadius: {
      type: "number",
      default: 0,
    },
  });

  return settings;
};

addFilter(
  "blocks.registerBlockType",
  "my-plugin/navigation-link/customRange",
  addCustomRangeAttribute
);

const withInspectorControl = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    if (props.name !== "core/navigation-link") {
      return <BlockEdit {...props} />;
    }

    const { attributes, setAttributes } = props;
    const { borderRadius } = attributes;

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody title="Border Settings" initialOpen={true}>
            <RangeControl
              label="Border Radius"
              value={borderRadius}
              onChange={(value) => setAttributes({ borderRadius: value })}
              min={0}
              max={20}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, "withInspectorControl");

addFilter(
  "editor.BlockEdit",
  "my-plugin/navigation-link/with-inspector-control",
  withInspectorControl
);

const applyExtraClassInEditor = (BlockListBlock) => (props) => {
  if (props.name !== "core/navigation-link") {
    return <BlockListBlock {...props} />;
  }

  const { borderRadius } = props.attributes;

  return (
    <BlockListBlock {...props} className={`border-radius-${borderRadius}`} />
  );
};

addFilter(
  "editor.BlockListBlock",
  "my-plugin/navigation-link/apply-extra-class-in-editor",
  applyExtraClassInEditor
);
