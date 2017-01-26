<?php
/**
 * @package wordpress-gulp
 */
?>
<html class="page<?php the_ID(); ?>">
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>
			<?php the_field('conteudo_html'); ?>
		<?php endwhile; 
	endif; ?>
</html>