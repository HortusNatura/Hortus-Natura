<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ftnraqfr_DBA2' );

/** Database username */
define( 'DB_USER', 'ftnraqfr_Chiheb' );

/** Database password */
define( 'DB_PASSWORD', 'J;;;ogoo%K;WgaJ81b' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~x<Lg5EiDQ$Qqm7_A-,mx^099tr97:[k8-lXNFgd@}4nW]Q=olwB^.Ft5-+QBja3' );
define( 'SECURE_AUTH_KEY',  'wtcj7iCz7^Rv65|=lkT4wxE,NHE$d7X`1U`Z^<cUpms<|QyOlO7*|99bFqg %_.h' );
define( 'LOGGED_IN_KEY',    '(aH$t&r&hdIYa`.f_YJ^e5Ed}rbRckGuxOev+Mc8Z}c9X9m1dVwzIy%>(jN*xRYX' );
define( 'NONCE_KEY',        'C?{zA`4u[}@5;pO45?Hhiv)7TU:U;iS w((.&06F_in/evR!2P2Ti~aZe?5a/Rai' );
define( 'AUTH_SALT',        'Gln8X]4u]AV1GV0BB|@LX:K8{c[jIA$GB5~_,SA8uE:BzlCtbN48<1OUTO&1pIs>' );
define( 'SECURE_AUTH_SALT', '_t5(7vTJmD=wrdUJv`Wp=B,`3Gx^-TqM:!**gM[8p)/8K>&vQ;8eN9Ql]5?y+R6X' );
define( 'LOGGED_IN_SALT',   '7?l=g~@:^//gE1,H4_r#R n~A@/w#>+:-`Aas4Nl-t{-}h*Z`?la8]^u^=BsN^Ks' );
define( 'NONCE_SALT',       'Nt!uNCkPC`2`;4@,1e||=x2Tm`~eg>^^`e3znuf^A|(uODKQxS* 0%=3kMo4kIvA' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
