<?php

// Enqueue frontend and backend styles


function custom_slick_slider_block_assets()
{
    if (is_home() || is_front_page()) {
        // 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',

        wp_enqueue_script(
            'slick-slider',
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
            array('jquery'),
            '1.8.1',
            true
        );

        // wp_enqueue_style(
        //     'slick-slider-css',
        //     'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
        //     array(),
        //     '1.8.1'
        // );

        /******
         *
         * for slider  FE
         *
         ******/
        $FE_scripts_path = 'C:\xampp\htdocs\InfoSphere_2024\wp-content\themes\DevOpsRedefined_InfoSphere\assets\FE-scripts';
        $in_footer = false;
        $depts = array('jquery'); // dependencies, if any


        $FE_slider__path = $FE_scripts_path . '\frontend-slider.js';
        $FE_slider__handle = 'frontend-slider-handle';
        $FE_slider__src = get_template_directory_uri() . '/assets/FE-scripts/frontend-slider.js';
        $FE_slider__ver = filemtime($FE_slider__path);

        // print('somethjing here' . $slider_src);
        wp_enqueue_script($FE_slider__handle, $FE_slider__src, $depts, $FE_slider__ver, $in_footer);
    }
}
add_action('wp_enqueue_scripts', 'custom_slick_slider_block_assets');
