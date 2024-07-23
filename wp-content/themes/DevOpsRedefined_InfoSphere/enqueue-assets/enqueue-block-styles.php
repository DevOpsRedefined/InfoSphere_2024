<?php

/******
 *
 * this is basically for adding
 * the style in editor in for this
 * new full site block edititng
 *
 ******/

function add_styles_block_core_navigation_link()
{
    $src_css = '/assets/block-customization/css/for-admin-editor/admin-editor-custom-navigation-link.css';

    add_theme_support('editor-styles');
    add_editor_style($src_css);
}

add_action('after_setup_theme', 'add_styles_block_core_navigation_link');
