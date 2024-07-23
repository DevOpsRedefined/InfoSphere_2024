<?php

/******
 *
 * for enquing styles in front end
 * TODO: in futurte chnage this to maybe inline using
 *
 * Inline the contents of the style.css file, if possible.
 * wp_style_add_data( 'my-theme', 'path', get_theme_file_path( 'style.css' ) );
 *
 * ref:-https://wordpress.stackexchange.com/questions/410626/how-do-i-make-my-block-editor-styles-match-my-front-end-styles
 *
 *
 * TODO: also make sure we have different files for different blocks based on use
 * for example, if its related to navigation-link then it needs to be enqueued there in global,
 * but if it needs only in specific pages then give condition and load them
 *
 *
 *
 ******/

function my_custom_enqueue_styles()
{
    wp_enqueue_style('my-custom-navigation-link-styles', get_template_directory_uri() . '/assets/block-customization/css/for-front-end/fe-custom-navigation-link.css');

    /***
     *
     * for slider
     * 
     ***/
    wp_enqueue_style('fe-custom-slider-styles', get_template_directory_uri() . '/assets/block-customization/css/for-front-end/fe-custom-slider.css');
}

add_action('wp_enqueue_scripts', 'my_custom_enqueue_styles');
