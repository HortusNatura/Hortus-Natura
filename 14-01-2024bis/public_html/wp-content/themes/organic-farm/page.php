<?php
/**
 * The template for displaying all pages
 * 
 * @subpackage Organic Farm
 * @since 1.0
 */

get_header(); ?>

<main id="content" class="site-main" role="main">
	<?php while ( have_posts() ) : the_post(); ?>
		<div id="post-<?php the_ID(); ?>" class="outer-div">
			<?php if(has_post_thumbnail()){ ?>
	             <div class="single-post-image">
					<?php the_post_thumbnail(); ?>
				</div>
            <?php }
            else { ?>
            	<div class="header-image"></div>
            <?php } ?>
			<div class="inner-div">
	    		<?php //breadcrumb
				if ( !is_page_template( 'page-template/custom-home-page.php' ) ) { 
					if( get_option('organic_farm_single_enable_breadcrumb',false) != 'off'){ ?>
						<div class="bread_crumb align-self-center text-center">
							<?php organic_farm_breadcrumb();  ?>
						</div>
					<?php }
				}?>
				
			    <?php if (is_front_page()) { ?>
                    <h1 style="color:white; text-transform: none !important;" class="text-center mt-4">Retrouvez des produits plus que <strong>bio</strong> avec Hortus Natura</h1>
    	    		<span style="text-align:center">"Une ferme éthique, Pour le bien de tous."</span>
                <?php } else { ?>
                    <h1 style="color:white; text-transform: none !important;" class="text-center mt-4"><?php the_title(); ?></h1>
                <?php } ?>

	    	</div>
		</div>
	<?php endwhile; ?>
	<div class="content-area my-5">
		<div class="container">
			<?php while ( have_posts() ) : the_post(); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="entry-content">
						<?php the_content(); ?>
						<?php
							wp_link_pages( array(
								'before' => '<div class="page-links">' . __( 'Pages:', 'organic-farm' ),
								'after'  => '</div>',
							) );
						?>
					</div>
				</article>
			<?php endwhile; // End of the loop. ?>
		<div class="clearfix"></div> 
		</div>	
	</div>
</main>

<?php get_footer();
