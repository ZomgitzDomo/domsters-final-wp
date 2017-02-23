<?php
/*-------------------------------------
| Fonts
-------------------------------------*/
function domsters_add_google_fonts() {
  wp_register_style( 'googleFonts', 'http://fonts.googleapis.com/css?family=Open+Sans:400,300');
  wp_enqueue_style( 'googleFonts');
}
add_action( 'wp_enqueue_scripts', 'domsters_add_google_fonts' );
/*-------------------------------------
| Menus
-------------------------------------*/
add_theme_support( 'menus' );
function domsters_register_menu() {
  register_nav_menu('main-menu', __( 'Main Menu') );
}
add_action('init', 'domsters_register_menu');

/*-------------------------------------
| widgets
-------------------------------------*/
function create_widget($name, $id, $description) {
    register_sidebar(array(
      'name' => __( $name ),
      'id'   => $id,
      'description' => __( $description ),
      'before_widget' => '<div class="widget">',
      'after_widget' => '</div>',
      'before_title' => '<h2>',
      'after_title' => '</h2>'
    ));
}

create_widget( 'Front Page Ad', 'front-ad', 'Displays add on hompage');
/*-------------------------------------
| css
-------------------------------------*/

function theme_styles() {
    wp_enqueue_style( 'main_css', get_template_directory_uri() . '/css/style.css' );
    wp_enqueue_style( 'wp_css', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

/*-------------------------------------
| js
-------------------------------------*/

function theme_js() {
  wp_enqueue_script( 'global_js', get_template_directory_uri() . '/js/global.js', '', '', true );

  if ( is_page( '5' ) ) {

    	  wp_enqueue_script( 'home_js', get_template_directory_uri() . '/js/home.js', '', '', true );
    	  $local_dom_home = array( 'template_url' => get_bloginfo('template_url') );
    	  wp_localize_script( 'home_js', 'localDOMHome', $local_dom_home );
    }

  if ( is_page( '8' ) ) {
      wp_enqueue_script( 'about_js', get_template_directory_uri() . '/js/about.js', '', '', true );
    }

    if ( is_page( '12' ) ) {
      wp_enqueue_script( 'live_js', get_template_directory_uri() . '/js/live.js', '', '', true );
    }
}

add_action( 'wp_enqueue_scripts', 'theme_js' );
