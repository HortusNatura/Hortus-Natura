<?php
/**
 * The header for our theme
 *
 * @subpackage Agriculture Farming
 * @since 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
	
	  <style>

    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    .progress-container {
      width: 50%;
      height: 20px;
      background-color: #ddd;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      width: 0;
      background-color: #8ec63f;
      border-radius: 10px;
      transition: width 0.3s ease;
      position: relative;
    }

    .progress-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #333;
      font-size: 16px;
      font-weight: bold;
    }
    .progress-image {
      position: absolute;
      top: 26%;
      width: 300px;
      height: 110px;

    }
  </style>
</head>

<body <?php body_class(); ?>>

<?php
	if ( function_exists( 'wp_body_open' ) ) {
	    wp_body_open();
	} else {
	    do_action( 'wp_body_open' );
	}
?>
  <!-- Loading Screen -->
    <?php
    // Vérifier si la page actuelle est la page d'accueil
    if (is_front_page()) {
        echo '
            <div class="loading-screen">
                <img src="https://l2gr1.ephec.info/wp-content/uploads/2024/01/logo_grand.png" alt="logo" class="progress-image">
                <div class="progress-container">
                    <div class="progress-bar" id="myProgressBar"></div>
                    <div class="progress-text">Chargement...</div>
                </div>
            </div>
        ';
    }
    ?>
  
	<div id="page" class="site">
		<div id="header">
			<div class="menu-outer">
				<div class="container">
					<div class="menu_header py-2">
						<div class="row">
							<div class="col-lg-3 col-md-5 col-9 box-center">
								<div class="logo mb-lg-0 mb-md-3 mb-3">
							        <?php if ( has_custom_logo() ) : ?>
					            		<?php the_custom_logo(); ?>
						            <?php endif; ?>
					              	<?php $agriculture_farming_blog_info = get_bloginfo( 'name' ); ?>
							                <?php if ( ! empty( $agriculture_farming_blog_info ) ) : ?>
							                  	<?php if ( is_front_page() && is_home() ) : ?>
													<?php if( get_option('organic_farm_logo_title',false) != 'off'){ ?>
							                    	<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
												<?php }?>
							                  	<?php else : ?>
												<?php if( get_option('organic_farm_logo_title',false) != 'off'){ ?>
						                      		<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
													<?php }?>
						                  		<?php endif; ?>
							                <?php endif; ?>

						                <?php
					                  		$agriculture_farming_description = get_bloginfo( 'description', 'display' );
						                  	if ( $agriculture_farming_description || is_customize_preview() ) :
						                ?>
						                <?php if( get_option('organic_farm_logo_text',true) != 'off'){ ?>
						                  	<p class="site-description">
						                    	<?php echo esc_html($agriculture_farming_description); ?>
						                  	</p>
						                <?php }?>
					              	<?php endif; ?>
							    </div>
							</div>
							<div class="col-lg-9 col-md-7 col-3 box-center">
									<div class="toggle-menu gb_menu ">
										<button onclick="organic_farm_gb_Menu_open()" class="gb_toggle"><i class="fas fa-ellipsis-h"></i><p class="mb-0"><?php esc_html_e('Menu','agriculture-farming'); ?></p></button>
									</div>
				   				<?php get_template_part('template-parts/navigation/navigation'); ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	  <script>
    // Simulate page loading
    function simulatePageLoad() {
      let loadingScreen = document.querySelector('.loading-screen');
      let progressBar = document.getElementById("myProgressBar");
      let progressText = document.querySelector(".progress-text");
      let width = 0;
      let interval = setInterval(frame, 10);

      function frame() {
        if (width >= 100) {
          clearInterval(interval);
          progressText.innerText = "Terminé !";
          // Hide the loading screen after 3 seconds (adjust as needed)
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 1500);
        } else {
          width++;
          progressBar.style.width = width + "%";
        }
      }
    }
      /*const toggleButton = document.getElementById('toggleButton');

          toggleButton.addEventListener('click', () => {
            toggleButton.classList.toggle('rotate-90');
          });*/

    // Call the function when your page is loaded or use it as needed
    simulatePageLoad();
  </script>
</body>
