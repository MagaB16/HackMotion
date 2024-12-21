<?php
function enqueue_hackmotion_assets() {
    wp_enqueue_script(
        'hackmotion-react-js',
        get_template_directory_uri() . '/assets/index.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_style(
        'hackmotion-react-css',
        get_template_directory_uri() . '/assets/index.css',
        array(),
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_hackmotion_assets');

// @ini_set('upload_max_size', '256M');
// @ini_set('post_max_size', '256M');
// @ini_set('client_max_body_size', '256M');