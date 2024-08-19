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
    $core_navigation_lin_src_css = '/assets/block-customization/css/for-admin-editor/admin-editor-custom-navigation-link.css';
    $custom_slider_partners_logos_css = '/assets/block-customization/css/for-admin-editor/admin-editor-custom-logo-slider.css';

    add_theme_support('editor-styles');
    add_editor_style($core_navigation_lin_src_css);
    add_editor_style($custom_slider_partners_logos_css);
}

add_action('after_setup_theme', 'add_styles_block_core_navigation_link');
