<?php
/**
 * Plugin Name:       Buytiti - Baner Animado
 * Plugin URI:        https://buytiti.com
 * Description:       Este Plugin Añade la estructura de un baner animado
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Jesus Jimenez
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       buytitibaner
 *
 * @package           buytiti
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function buytitibaner_buytitibaner_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'buytitibaner_buytitibaner_block_init' );
