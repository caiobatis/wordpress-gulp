<?php
/**
 * @package wordpress-gulp
 */
?>
<!DOCTYPE html>
<!--[if IE 7 | IE 8]>
<html class="ie" lang="en-US">
<![endif]-->
<!--[if (gte IE 9) | !(IE)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<title><?php 
		wp_title( '&mdash;', true, 'right' );
		bloginfo( 'name' ); ?></title>
	<?php 
		$meta = html_entity_decode(get_field('description'));
		echo $meta;
	?>
	</head>
<body class="wordpress-gulp">