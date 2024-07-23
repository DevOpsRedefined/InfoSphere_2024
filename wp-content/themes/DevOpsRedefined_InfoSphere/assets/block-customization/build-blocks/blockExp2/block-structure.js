/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************************!*\
  !*** ./src/blocks-js/block-structure/block-structure.js ***!
  \**********************************************************/
/* import { useEffect } from "@wordpress/element";
import { useSelect, withDispatch } from "@wordpress/data";
import { select } from "@wordpress/data";

console.log("here in blocks struct");
// const logBlockStructure = (blocks, indent = 0) => {
//   blocks.forEach((block) => {
//     console.log(" ".repeat(indent) + block.name);
//     if (block.innerBlocks && block.innerBlocks.length > 0) {
//       logBlockStructure(block.innerBlocks, indent + 2);
//     }
//   });
// };

// const BlockStructureLogger = () => {
//   const blocks = useSelect((select) => {
//     return select("core/block-editor").getBlocks();
//   }, []);

//   useEffect(() => {
//     if (blocks.length > 0) {
//       console.log("Block Structure:");
//       logBlockStructure(blocks);
//     } else {
//       console.log("No blocks found");
//     }
//   }, [blocks]);

//   return null;
// };

// // Hook into the editor
// wp.hooks.addFilter(
//   "editor.BlockEdit",
//   "my-plugin/block-structure-logger",
//   (BlockEdit) => (props) => (
//     <>
//       <BlockStructureLogger />
//       <BlockEdit {...props} />
//     </>
//   )
// );

const logBlockStructure = (blocks, indent = 0) => {
  blocks.forEach((block) => {
    console.log("Log entire block object");
    console.log(" ".repeat(indent) + block.name, block); // Log entire block object

    console.log("Attributes:", block.attributes); // Log attributes

    if (
      block.name == "core/custom-link" ||
      block.name == "core/navigation-submenu"
    ) {
      console.log("nav block info", block);
    }

    if (block.innerBlocks && block.innerBlocks.length > 0) {
      console.log("here in second if", block.innerBlocks); // Debugging line
      console.log("here in second if name", block.name); // Debugging line

      logBlockStructure(block.innerBlocks, indent + 2);
    } else {
      console.log("No inner blocks found for", block.name); // Debugging line
    }
  });
};

const BlockStructureLogger = () => {
  const blocks = useSelect((select) => {
    const allBlocks = select("core/block-editor").getBlocks();
    console.log("All Blocks:", allBlocks); // Debugging line

    if (allBlocks[0].innerBlocks.length > 0) {
      console.log("im here in inner vlock");
    }
    if (allBlocks.clientId) {
      console.log("im here in inner vlock");
    }
    return allBlocks;
  }, []);

  useEffect(() => {
    const logWithDelay = () => {
      if (blocks.length > 0) {
        console.log("Block Structure:");
        logBlockStructure(blocks);
      } else {
        console.log("No blocks found");
      }
    };

    setTimeout(logWithDelay, 10000); // Adjust the delay as necessary
  }, [blocks]);

  return null;
};

// Hook into the editor
wp.hooks.addFilter(
  "editor.BlockEdit",
  "my-plugin/block-structure-logger",
  (BlockEdit) => (props) => (
    <>
      <BlockEdit {...props} />
      <BlockStructureLogger />
    </>
  )
);

const dispacthfunc = withDispatch((dispatch, ownProps, registry) => {
  return {
    updateEditable(isEditing) {
      const { clientId, setAttributes } = ownProps;
      const { getBlockOrder, getBlock } = registry.select("core/block-editor");

      //get all innerBlockIds
      const innerBlockIds = getBlockOrder(clientId);
      innerBlockIds.forEach((innerBlockId) => {
        console.log("in dispatch");

        console.log(getBlock(innerBlockId));
      });
    },
  };
});

wp.hooks.addFilter("editor.BlockEdit", "dispacthfunc_test", dispacthfunc);
 */
/******/ })()
;
//# sourceMappingURL=block-structure.js.map