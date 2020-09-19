<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <meta property="og:title" content="Продажа автономных отопителей и предпусковых обогревателей" />
	<meta property="og:url" content="http://www.diavia.ru/" />
	<meta property="og:site_name" content="АВТОКЛИМАТИКА" />
	<meta property="og:description"
		content="Автономные отопители и предпусковые обогреватели" />
	<meta property="og:image" content="/wp-content/uploads/2020/09/logo.png" />
	<meta property="og:image:width" content="100" />
	<meta property="og:image:height" content="100" />
	<?php wp_head(); ?>
</head>

<body>
<!-- modal -->
<div class="modal " id="modal">
    <div class="modal-body">
        <div data-close-button class="close-button">
            <span></span>
        </div>
        <div class="modal__content">
            <span class="modal__content-head">Мы перезвоним Вам сами</span>
            <?= do_shortcode('[contact-form-7 id="5465" title="Обратная связь"]') ?>
        </div>
    </div>
</div>
<div id="overlay"></div>
<!-- header -->
<header id="header">
    <section class="header__top__row container">
        <p class="icon__link phone">
            <a href="tel:<?= carbon_get_theme_option('cont_phone_1') ?>"><?= carbon_get_theme_option('cont_phone_1') ?></a><br>
            <a href="tel:<?= carbon_get_theme_option('cont_phone_2') ?>"><?= carbon_get_theme_option('cont_phone_2') ?></a>
        </p>
        <div class="header__search">
            <span class="header__search-description">Быстрый поиск</span>
			<?php if ( function_exists( 'aws_get_search_form' ) ) {
				aws_get_search_form();
			} ?>
        </div>
    </section>
    <section class="header__center__row container">
        <div class="header__logo">
			<?php if ( ! is_front_page() ): ?>
            <a href="/">
				<?php endif; ?>
                <picture class="logo">
                    <img src="<?= carbon_get_theme_option( 'logo_img' ) ?>" alt="Логотип автоклиматика">
                </picture>
                <figcaption><?= get_bloginfo( 'name' ); ?></figcaption>
				<?php if ( ! is_front_page() ): ?>
            </a>
		<?php endif; ?>
            <div class="header__logo-bottom">
                <picture class="left__img">
                    <img src="<?= carbon_get_theme_option( 'logo_part2_img' ) ?>" alt="логотип партнеров">
                </picture>
                <span>Официальный<br> дилер</span>
                <picture class="right__img">
                    <img src="<?= carbon_get_theme_option( 'logo_part1_img' ) ?>" alt="логотип партнеров">
                </picture>
            </div>
        </div>
        <div class="header__center__row-description">
            <span>Комфорт в вашем автомобиле</span>
        </div>
        <div class="burger"><span></span></div>
    </section>
    <section class="header__bottom__row container">
        <nav class="header__menu">
            <ul class="menu__items">
				<?php
				wp_nav_menu( [
					'theme_location' => 'header',
					'container'      => false,        // Убираем контейнер у меню, можно добавить свой
					'items_wrap'     => '%3$s', // Убираем обёртку <ul>
					'menu_class'     => '',
				] );
				?>
            </ul>
            <div class="first__slider__btn">
                <a href="" data-modal-target="#modal">Записаться на<br> установку</a>
            </div>
        </nav>
        <div id="cart" class="cart">
            <a href="<?php
			global $woocommerce;
			echo $woocommerce->cart->get_cart_url() ?>">
                <button class="cart__btn">
                    <picture>
                        <img src="<?= get_template_directory_uri() ?>/assets/img/icon/cart.png"
                             alt="картинка корзины интернет магазина автоклиматика">
                    </picture>
                    <span class="basket-btn__counter"><?= sprintf( $woocommerce->cart->cart_contents_count ) ?></span>
                </button>
            </a>
        </div>
    </section>
</header>