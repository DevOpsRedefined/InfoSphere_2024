<?php

/*
*
* for gutenberg blocks
*
*/
function enqueue_block_custom_block_scripts()
{


    /******
     *
     * for core/navigation-link script
     *
     ******/

    $script_build_path = 'C:\xampp\htdocs\InfoSphere_2024\wp-content\themes\DevOpsRedefined_InfoSphere\assets\block-customization\build-blocks';
    $in_footer = false;
    $depts = array('wp-blocks', 'wp-element', 'wp-components', 'wp-compose', 'wp-editor'); // dependencies, if any


    $navigation_path = $script_build_path . '\blocks-js\core-navigation-link\core-navigation-link.js';
    $navigation_handle = 'core-navigation-link-handle';
    $navigation_src = get_template_directory_uri() . '/assets/block-customization/build-blocks/blocks-js/core-navigation-link/core-navigation-link.js';
    $navigation_ver = filemtime($navigation_path);


    wp_enqueue_script($navigation_handle, $navigation_src, $depts, $navigation_ver, $in_footer);


    /******
     *
     * for block structure script
     *
     ******/

    $structure_path = $script_build_path . '\blockExp2\block-structure.js';
    $structure_handle = 'editor-block-structure-handle';
    $structure_src = get_template_directory_uri() . '/assets/block-customization/build-blocks/blockExp2/block-structure.js';
    $structure_ver = filemtime($structure_path);

    wp_enqueue_script($structure_handle, $structure_src, $depts, $structure_ver, $in_footer);



    /******
     *
     * for slider js block
     *
     ******/


    $slider_path = $script_build_path . '\blocks-js\custom-slider\custom-slider.js';
    $slider_handle = 'custom-slider-handle';
    $slider_src = get_template_directory_uri() . '/assets/block-customization/build-blocks/blocks-js/custom-slider/custom-slider.js';
    $slider_ver = filemtime($slider_path);

    wp_enqueue_script($slider_handle, $slider_src, $depts, $slider_ver, $in_footer);
};
add_action('enqueue_block_editor_assets', 'enqueue_block_custom_block_scripts');
