<?php

/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Lesson One
 * @since 1.0.0
 */

/**
 * Enqueue the style.css file.
 * 
 * @since 1.0.0
 */
function lesson_one_style()
{
    wp_enqueue_style(
        'lesson-one-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'lesson_one_style');

/*
*
* upload Svg
*
*/

function cc_mime_types($mimes)
{

    $mimes['svg'] = 'image/svg+xml';
    // $mimes['svg'] = 'image/svg';

    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function fix_svg()
{
    echo '<style type="text/css">
          .attachment-266x266, .thumbnail img {
                width: 100% !important;
                height: auto !important;
          }
          </style>';
}
add_action('admin_head', 'fix_svg');



/*
*
* for extra settings in core/navigation-link IE:- Added color and spacing
*
*/

function enable_supports_for_navigation_link($metadata)
{

    // Only apply the filter to Heading blocks.
    if (!isset($metadata['name']) || 'core/navigation-link' !== $metadata['name']) {
        return $metadata;
    }

    // Check if 'supports' key exists.
    if (isset($metadata['supports']) && !isset($metadata['supports']['color'])) {
        $metadata['supports']['color']['background'] = true;
        $metadata['supports']['color']['text']  = true;
    }

    if (isset($metadata['supports'])) {

        $metadata['supports']['spacing']['padding'] = true;
        $metadata['supports']['spacing']['margin']  = true;
    }

    return $metadata;
}
add_filter('block_type_metadata', 'enable_supports_for_navigation_link');



/******* 
 * 
 * below code will check for core/navigation-link and if it has customRange attribute 
 * and then its gonna read its value in $custom_range and will add 
 * the class custom-range- and will concate custom_range's value in $block_content 
 * 
 * *******/
function extend_core_navigation_link_attr($block_content, $block)
{
    if ($block['blockName'] === 'core/navigation-link' && isset($block['attrs']['borderRadius'])) {
        $border_radius = esc_attr($block['attrs']['borderRadius']);
        $block_content = str_replace('wp-block-navigation-link', 'wp-block-navigation-link border-radius-' . $border_radius, $block_content);
        // $block_content = str_replace('>', 'style="border-radius:' . $custom_range . 'px;" >', $block_content);

    }
    return $block_content;
}

add_filter('render_block', 'extend_core_navigation_link_attr', 10, 2);

/******* 
 * 
 * below code will check for core/navigation and if it has customRange attribute 
 * and then its gonna read its value in $custom_range and will add 
 * the class custom-range- and will concate custom_range's value in $block_content 
 * 
 * *******/
function extend_core_navigation_attr($block_content, $block)
{

    if ($block['blockName'] === 'core/navigation' && isset($block['attrs']['customBlockGap'])) {
        $custom_block_gap = esc_attr($block['attrs']['customBlockGap']);
        $block_content = str_replace('wp-block-navigation__container', 'wp-block-navigation__container custom-block-gap-' . $custom_block_gap, $block_content);
        // $block_content = str_replace('>', 'style="border-radius:' . $custom_range . 'px;" >', $block_content);

    }
    return $block_content;
}


add_filter('render_block', 'extend_core_navigation_attr', 10, 2);

function register_navigation_link_extended_attributes()
{
    // Ensure the block type is registered before adding attributes
    if (!function_exists('register_block_type')) {
        return;
    }

    // Add custom attribute to the navigation link block
    add_filter('blocks.registerBlockType', function ($settings, $name) {
        if ($name === 'core/navigation-link') {
            $settings['attributes']['borderRadius'] = array(
                'type' => 'number',
                'default' => 0,
            );
        }
        return $settings;
    }, 10, 2);
}
add_action('init', 'register_navigation_link_extended_attributes');




/****
 * 
 * enqueue styles here for blocks in FE
 * 
 ****/
require_once get_template_directory() . '/enqueue-assets/enqueue-blockFE-styles.php';

/****
 * 
 * enqueue styles here for editor block
 * 
 ****/
require_once get_template_directory() . '/enqueue-assets/enqueue-block-styles.php';

/****
 * 
 * enqueue scripts for editor block
 * 
 ****/
require_once get_template_directory() . '/enqueue-assets/enqueue-block-scripts.php';

/****
 * 
 * enqueue scripts for FE
 * 
 ****/
require_once get_template_directory() . '/enqueue-assets/enqueue-blockFE-scripts.php';



// move thisa to admin stlyes import
function my_add_editor_styles_to_full_site_editing()
{
    $src_css = '/assets/block-customization/css/for-admin-editor/admin-editor-custom-slider.css';

    add_theme_support('editor-styles');
    add_editor_style($src_css);
}

add_action('after_setup_theme', 'my_add_editor_styles_to_full_site_editing');
