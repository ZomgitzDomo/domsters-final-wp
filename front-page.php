<?php get_header(); ?>
  <main id="content">
    [Front Page Template]

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

          <?php the_content(); ?>

    <?php endwhile; endif; ?>


  </main>
  <aside class="sidebar">

    <?php if ( dynamic_sidebar( 'front-ad' ) ); ?>

  </aside>
<?php get_footer(); ?>
