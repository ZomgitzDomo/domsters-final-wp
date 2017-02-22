<?php
function theme_styles() {
    wp_enqueue_style( 'main_css', get_template_directory_uri() . '/css/style.css' );
    wp_enqueue_style( 'wp_css', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

function theme_js() {
  wp_enqueue_script( 'global_js', get_template_directory_uri() . '/js/global.js', '', '', true );
  wp_enqueue_script( 'home_js', get_template_directory_uri() . '/js/home.js', '', '', true );
  $local_dom_home = array( 'template_url' => get_bloginfo('template_url') );
  wp_localize_script( 'home_js', 'localDOMHome', $local_dom_home );
}

add_action( 'wp_enqueue_scripts', 'theme_js' );
