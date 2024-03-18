<?php
/**
 * Displays footer site info
 *
 * @subpackage Agriculture Farming
 * @since 1.0
 * @version 1.4
 */

?>

<div class="site-info py-4 text-center">
	<?php
        echo esc_html( get_theme_mod( 'organic_farm_footer_text' ) );
        printf(
            /* translators: %s: Agriculture farming WordPress Theme. */
            '<a target="_blank" href="' . esc_attr__( 'https://www.ovationthemes.com/wordpress/free-agriculture-wordpress-theme/', 'agriculture-farming' ) . '"> %s</a>',
            esc_html__( 'Agriculture farming WordPress Theme', 'agriculture-farming' )
        );
    ?>
</div>
