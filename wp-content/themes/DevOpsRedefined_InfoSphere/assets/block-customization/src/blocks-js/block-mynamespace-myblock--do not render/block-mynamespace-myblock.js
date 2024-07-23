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

// import { ComponentProps } from 'react';

// const { attributes, setAttributes, isSelected } = props;

// console.log("dasdasd");
// const { __ } = wp.i18n;
// const { registerBlockType } = wp.blocks;
// const { Fragment } = wp.element;
// const { PanelBody, ToggleControl, RangeControl } = wp.components;
// const { InspectorControls, InspectorAdvancedControls } = wp.blockEditor;
// const { attributes, setAttributes, isSelected } = props;

// function addRadiusSliderToNavigationLink(settings, name) {
//   if (typeof settings.attributes !== "undefined") {
//     if (name == "core/navigation-link") {
//       settings.attributes = Object.assign(settings.attributes, {
//         hideOnMobile: {
//           type: (
//             <RangeControl
//               label={__("Example of RangeControl", "awhitepixel")}
//               value={props.attributes.numberAttribute}
//               onChange={(val) => props.setAttributes({ numberAttribute: val })}
//               min={1}
//               max={8}
//               beforeIcon="format-image"
//               allowReset={true}
//               resetFallbackValue={6}
//               withInputField={false}
//             />
//           ),
//         },
//       });
//     }
//   }
//   return settings;
// }

// wp.hooks.addFilter(
//   "blocks.registerBlockType",
//   "awp/cover-custom-attribute",
//   addRadiusSliderToNavigationLink
// );

function addaddRadiusSliderAttrToNavLink(settings, name) {
  if (typeof settings.attributes !== "undefined") {
    if (
      name == "core/group" ||
      name == "core/navigation-link" ||
      name == "core/navigation" ||
      name == "core/navigation-submenu" ||
      name == "core/page-list"
    ) {
      settings.attributes = Object.assign(settings.attributes, {
        numberAttribute: {
          type: "number",
        },
      });

      // console.log("settings.attributes", settings.attributes);
    }
  }
  return settings;
}

addFilter(
  "blocks.registerBlockType",
  "awp/add-responsive-container-to-group",
  addaddRadiusSliderAttrToNavLink
);

const addRadiusSliderToNavigationLink = createHigherOrderComponent(
  (BlockEdit) => {
    return (props) => {
      const { attributes } = props;
      const { numberAttribute } = attributes;

      return (
        // <>
        <Fragment>
          <BlockEdit {...props} />
          {props.isSelected &&
            (props.name == "core/group" ||
              props.name == "core/navigation-link" ||
              props.name == "core/navigation" ||
              props.name == "core/navigation-submenu" ||
              props.name == "core/page-list" ||
              props.name == "core/buttons" ||
              props.name == "core/button") && (
              <InspectorControls>
                <PanelBody
                  title={__("Border setting", "awp")}
                  initialOpen={false}
                >
                  <RangeControl
                    label={__("Set Border Radius", "awhitepixel")}
                    value={props.attributes.numberAttribute}
                    // value={numberAttribute}
                    onChange={(val) => {
                      props.setAttributes({
                        numberAttribute: val,
                      });
                      // ,
                      //   console.log(
                      //     "props.attributes.numberAttribute",
                      //     props.attributes.numberAttribute
                      //   );
                      // console.log("numberAttribute", numberAttribute);
                    }}
                    min={0}
                    max={8}
                    beforeIcon="format-image"
                    allowReset={true}
                    resetFallbackValue={7}
                    withInputField={false}
                  />
                </PanelBody>
              </InspectorControls>
            )}
        </Fragment>
        // </>
      );
    };
  },
  "addRadiusSliderToNavigationLink"
);

addFilter(
  "editor.BlockEdit",
  "awp/group-advanced-control",
  addRadiusSliderToNavigationLink
);

// const withCustomClassName = createHigherOrderComponent((BlockListBlock) => {
//   return (props) => {
//     if (props.name !== "core/navigation-link") {
//       return <BlockListBlock {...props} />;
//     }S

//     const { numberAttribute } = props.attributes;
//     const customClassName = `border-radius-${numberAttribute}`;

//     return (
//       <BlockListBlock
//         {...props}
//         className={
//           props.attributes.className
//             ? `${props.attributes.className} ${customClassName}`
//             : customClassName
//         }
//       />
//     );
//   };
// }, "withCustomClassName");

// addFilter(
//   "editor.BlockListBlock",
//   "awp/with-custom-class-name",
//   withCustomClassName
// );

/*
 *
 * this works when we have to add class in adming based on the attr
 *
 */
// const addCustomClassToSaveElement = (element, blockType, attributes) => {
//   if (
//     blockType.name !== "core/group" ||
//     blockType.name !== "core/navigation-link" ||
//     blockType.name !== "core/navigation" ||
//     blockType.name !== "core/navigation-submenu" ||
//     blockType.name !== "core/page-list" ||
//     blockType.name !== "core/buttons" ||
//     blockType.name !== "core/button"
//   ) {
//     return element;
//   }

//   const { numberAttribute } = attributes;

//   console.log("HERE IN addCustomClassToSaveElement", numberAttribute);

//   const customClassName = `border-radius-${numberAttribute}`;

//   return React.cloneElement(element, {
//     className: `${element.props.className} ${customClassName}`,
//   });
// };

// addFilter(
//   "blocks.getSaveElement",
//   "awp/add-custom-class-to-save-element",
//   addCustomClassToSaveElement
// );

/*
 *
 * this above works when we have to add class in adming based on the attr
 *
 *
 */

// function applyRadiusSliderToNavigationLink(extraProps, blockType, attributes) {
//   // console.log(
//   //   "ComponentProps.attributes.numberAttribute",
//   //   ComponentProps.attributes.numberAttribute
//   // );
//   debugger;
//   console.log("attributes csacasc", attributes);
//   const { numberAttribute } = attributes;
//   console.log(
//     "numberAttribute IN applyRadiusSliderToNavigationLink",
//     numberAttribute
//   );
//   // console.log(
//   //   "ComponentProps.attributes.numberAttribute",
//   //   ComponentProps.attributes.numberAttribute
//   // );

//   if (typeof attributes !== "undefined") {
//     extraProps.className =
//       extraProps.className + " responsive-container" + "numberAttribute";
//   }

//   return extraProps;
// }

// addFilter(
//   "blocks.getSaveContent.extraProps",
//   "awp/group-apply-responsive-class",
//   applyRadiusSliderToNavigationLink
// );

// function applyRadiusSliderToNavigationLink(extraProps, blockType, attributes) {
//   // debugger;
//   // Ensure this only applies to the core/navigation-link block
//   console.log("in here outside");

//   console.log("in blockType ", blockType.name);
//   console.log("in blockType ", blockType);
//   if (
//     blockType.name !== "core/navigation" &&
//     blockType.name !== "core/navigation-link" &&
//     blockType.name !== "core/row" &&
//     blockType.name !== "core/column" &&
//     blockType.name !== "core/group"
//   ) {
//     return extraProps;
//   }

//   if (blockType.name === "core/group") {
//     console.log("in here group");
//   }

//   if (blockType.name === "core/paragraph") {
//     console.log("in here paragraph");
//   }

//   if (blockType.name === "core/navigation-link") {
//     console.log("in here");
//   }

//   if (blockType.name === "core/navigation") {
//     console.log("in here core/navigation");
//   }

//   if (blockType.name === "core/navigation") {
//     console.log("in here core/navigation");
//   }
//   // Extract the numberAttribute
//   const { numberAttribute } = attributes;
//   console.log("numberAttribute", numberAttribute);

//   // Ensure numberAttribute is defined
//   if (
//     typeof numberAttribute !== "undefined" &&
//     blockType.name === "core/navigation-link"
//   ) {
//     // Add the custom class based on numberAttribute
//     extraProps.className = `${extraProps.className} responsive-container-${numberAttribute}`;
//   }

//   return extraProps;
// }

// // Add the filter to apply the function during the block save process
// addFilter(
//   "blocks.getSaveContent.extraProps",
//   "awp/group-apply-responsive-class",
//   applyRadiusSliderToNavigationLink
// );

// // Utility function to traverse nested blocks and apply the class to navigation links
// function applyClassToNestedBlocks(blocks, className) {
//   return blocks.map((block) => {
//     if (block.name === "core/navigation-link") {
//       return {
//         ...block,
//         attributes: {
//           ...block.attributes,
//           className: `${block.attributes.className || ""} ${className}`,
//         },
//       };
//     }

//     if (block.innerBlocks && block.innerBlocks.length > 0) {
//       return {
//         ...block,
//         innerBlocks: applyClassToNestedBlocks(block.innerBlocks, className),
//       };
//     }

//     return block;
//   });
// }
// // Hook to modify the save content of the navigation block
// const withCustomClassForNestedLinks = createHigherOrderComponent(
//   (BlockSave) => {
//     return (props) => {
//       const { attributes, className } = props;

//       // Only apply to navigation blocks
//       if (props.block.name !== "core/navigation") {
//         return <BlockSave {...props} />;
//       }

//       // Add the custom class to all nested navigation links
//       const newInnerBlocks = applyClassToNestedBlocks(
//         props.block.innerBlocks,
//         `responsive-container-${attributes.numberAttribute}`
//       );

//       return (
//         <BlockSave
//           {...props}
//           block={{ ...props.block, innerBlocks: newInnerBlocks }}
//         />
//       );
//     };
//   },
//   "withCustomClassForNestedLinks"
// );

// addFilter(
//   "blocks.getSaveContent.extraProps",
//   "awp/with-custom-class-for-nested-links",
//   withCustomClassForNestedLinks
// );

/*
 *
 *
 *
 */

// const applyRadiusSliderToNavigationLink = (
//   extraProps,
//   blockType,
//   attributes
//   // blocks,
//   // classnames
// ) => {
//   debugger;
//   console.log("out nest");
//   // console.log("blockType.innerBlocks", blockType.innerBlocks);

//   // console.log("blockType.innerBlocks", blocks);

//   // if (blockType.innerBlocks && blockType.innerBlocks.length > 0) {
//   //   console.log("in nest");
//   //   return {
//   //     ...block,
//   //     innerBlocks: applyClassToNestedBlocks(block.innerBlocks, className),
//   //   };
//   // }

//   // if (blockType.name !== "core/navigation-link") {
//   //   return extraProps;
//   // }

//   console.log("attributes.ref", attributes.ref);
//   console.log("blockType.name", blockType.name);
//   const { numberAttribute } = attributes;
//   console.log("numberAttribute", numberAttribute);

//   // if (typeof numberAttribute !== "undefined") {
//   //   extraProps.className = `${
//   //     extraProps.className || ""
//   //   } responsive-container-${numberAttribute}`;
//   // }

//   extraProps.className = classnames(extraProps.className, {
//     "hide-on-desktop--workss": numberAttribute,
//     // "hide-on-tablet": hideOnTablet,
//     // "hide-on-mobile": hideOnMobile,
//   });

//   return extraProps;
// };

// addFilter(
//   "blocks.getSaveContent.extraProps",
//   "awp/group-apply-responsive-class",
//   applyRadiusSliderToNavigationLink
// );

/*
 *
 *
 */

const applyRadiusSliderToNavigationLink = (
  extraProps,
  blockType,
  attributes
) => {
  // console.log("Block type:", blockType.name);
  // setTimeout(1000); // Adjust the delay as necessary
  console.log("hre in beep beep");
  console.log("blockType.name: ", blockType.name);
  if (
    blockType.name == "core/navigation-link" ||
    //  ||
    // blockType.name == "core/list"
    blockType.name == "core/navigation"
    //  ||
    // blockType.name == "core/navigation-submenu"
    // blockType.name == "core/page-list" ||
    // blockType.name == "core/buttons" ||
    // blockType.name == "core/button"
  ) {
    // console.log("Found navigation-list block");
    // console.log("Found one of navigation-list block: " + blockType.name);
    // Apply your logic to navigation-list block
    console.log("beep beep in nav");
    const { numberAttribute } = attributes;
    console.log("numberAttribute", numberAttribute);
    extraProps.className = classnames(extraProps.className, {
      "hide-on-desktop--workss": numberAttribute,
    });
  }

  return extraProps;
};

// const withChildBlockProps = createHigherOrderComponent((BlockListBlock) => {
//   return (props) => {
//     const { clientId, name } = props;
//     const { innerBlocks } = useSelect(
//       (select) => {
//         const { getBlock } = select("core/block-editor");
//         return getBlock(clientId);
//       },
//       [clientId]
//     );

//     // Apply filter to child blocks
//     if (name === "core/navigation" && innerBlocks.length > 0) {
//       innerBlocks.forEach((block) => {
//         applyRadiusSliderToNavigationLink(block.attributes, block);
//       });
//     }

//     return <BlockListBlock {...props} />;
//   };
// }, "withChildBlockProps");

addFilter(
  "blocks.getSaveContent.extraProps",
  "awp/group-apply-responsive-class",
  applyRadiusSliderToNavigationLink
);

// addFilter(
//   "editor.BlockListBlock",
//   "awp/with-child-block-props",
//   withChildBlockProps
// );

// havent tried this tbh
// function applyClassToNestedBlocks(blocks, className) {
//   return blocks.map((block) => {
//     if (block.name === "core/navigation-link") {
//       return {
//         ...block,
//         attributes: {
//           ...block.attributes,
//           className: `${block.attributes.className || ""} ${className}`,
//         },
//       };
//     }

//     if (block.innerBlocks && block.innerBlocks.length > 0) {
//       return {
//         ...block,
//         innerBlocks: applyClassToNestedBlocks(block.innerBlocks, className),
//       };
//     }

//     return block;
//   });
// }

// // this dont work // something wrontg with createHigherOrderComponent block save
// const withCustomClassForNestedLinks = createHigherOrderComponent(
//   (BlockSave) => {
//     return (props) => {
//       const { block, attributes } = props;

//       if (block.name === "core/navigation") {
//         const className = `responsive-container-${attributes.numberAttribute}`;
//         const newInnerBlocks = applyClassToNestedBlocks(
//           block.innerBlocks,
//           className
//         );

//         return (
//           <BlockSave
//             {...props}
//             block={{ ...block, innerBlocks: newInnerBlocks }}
//           />
//         );
//       }

//       return <BlockSave {...props} />;
//     };
//   },
//   "withCustomClassForNestedLinks"
// );

// addFilter(
//   "blocks.getSaveElement",
//   "awp/with-custom-class-for-nested-links",
//   withCustomClassForNestedLinks
// );
