<?php
/*
* Template Name: Блог
* Template post type: post
*/
?>
<?php get_header() ?>
<!-- main -->
<main>
    <!-- blog -->
    <section id="category" class="container blog">
        <div class="heading">
            <h1>
                Отопители.<br> Кондиционеры.<br> Автомобильные люки.
            </h1>
        </div>
        <section class="category__content">
            <aside class="left__sidebar">
                <section class="left__sidebar-decoration">
                    <section class="category__navigation">
                        <?php $cat_master = get_categories([
                            'hide_empty' => false,
                            'parent'     => 90,
                            'taxonomy'   => 'category',
                            'orderby'    => 'id',
                            'order'      => 'ASC',
                        ]);
                        foreach ($cat_master as $key => $item) :
                        ?>
                            <nav class="<?php if ($key == 0) : ?>
                        heating__systems
                        <?php elseif ($key == 1) : ?>
                        сooling__systems
                        <?php else : ?>
                        equipment
                        <?php endif; ?>
                        ">
                                <div class="head">
                                    <a><?= get_cat_name($item->term_id) ?></a>
                                </div>
                                <ul>
                                    <?php $cat_slave = get_categories([
                                        'child_of' => $item->term_id,
                                        'orderby'  => 'id',
                                        'order'    => 'ASC',
                                        'hide_empty' => false,
                                        'taxonomy'   => 'category',
                                    ]);
                                    foreach ($cat_slave as $value) :
                                    ?>
                                        <li><a href="<?= get_category_link($value->term_id) ?>"><?= get_cat_name($value->term_id) ?></a></li>
                                    <?php endforeach; ?>
                                </ul>
                            </nav>
                        <?php endforeach; ?>
                    </section>
                </section>
            </aside>
            <section class="right__content">
                <section class="right__content-top">
                    <span></span>
                    <span>
                        <picture>
                            <img src="<?= carbon_get_theme_option('logo_part1_img') ?>" alt="Логотип webastо">
                        </picture>
                    </span>
                    <span>
                        <picture>
                            <img src="<?= carbon_get_theme_option('logo_part2_img') ?>" alt="Логотип eberspatche">
                        </picture>
                    </span>
                    <span></span>
                </section>
                <!-- breadcumps -->
                <?php woocommerce_breadcrumb([
                    'delimiter'   => '',
                    'wrap_before' => ' <nav id="breadcumbs"><ul class="container">',
                    'wrap_after'  => '</ul></nav>',
                    'before'      => '<li>',
                    'after'       => '</li>',
                    'home'        => _x('Home', 'breadcrumb', 'woocommerce'),
                ]); ?>
                <style>
                    .single__blog-article ul {
                        display: block;
                        list-style-type: disc;
                        margin-block-start: 1em;
                        margin-block-end: 1em;
                        margin-inline-start: 0px;
                        margin-inline-end: 0px;
                        padding-inline-start: 40px;
                    }

                    .single__blog-article li {
                        display: list-item;
                        text-align: -webkit-match-parent;
                        list-style: disc;
                        font-size: 16px;
                    }

                    .single__blog-article pre {
                        float: right;
                        margin-left: 10px;
                    }

                    .single__blog-article img {
                        width: auto;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .single__blog-article table {
                        border-collapse: collapse;
                    }

                    .single__blog-article table td {
                        padding: 5px;
                    }

                    h3 {
                        text-align: center;
                        margin: 0 auto;
                        color: #969696;
                    }
                </style>
                <h2 class="single__blog-head"><?= $post->post_title ?></h2>
                <article class="single__blog-article">
                    <?php the_content(); ?>
                </article>
            </section>
            <section id="guarantee" style="margin-top: 15px;">
                <article class="stock__items">
                    <article class="stock">
                        <span class="stock__pseudo">АКЦИЯ</span>
                        <b class="stock__name"><?= carbon_get_theme_option('akcii_head_1') ?></b>
                        <?= carbon_get_theme_option('akcii_info_1') ?>
                        <?php $arr_akcii_1 = carbon_get_theme_option('akcii_1');
                        foreach ($arr_akcii_1 as $item) :
                        ?>
                            <p>
                                <span><?= $item['akcii_product_1'] ?></span>
                                <span class="stock__price"><?= $item['akcii_price_1'] ?> &#8381;</span>
                            </p>
                        <?php endforeach; ?>
                    </article>
                    <article class="stock">
                        <span class="stock__pseudo">АКЦИЯ</span>
                        <b class="stock__name"><?= carbon_get_theme_option('akcii_head_2') ?></b>
                        <?= carbon_get_theme_option('akcii_info_2') ?>
                        <?php $arr_akcii_2 = carbon_get_theme_option('akcii_2');
                        foreach ($arr_akcii_2 as $item) :
                        ?>
                            <p>
                                <span><?= $item['akcii_product_1'] ?></span>
                                <span class="stock__price"><?= $item['akcii_price_1'] ?> &#8381;</span>
                            </p>
                        <?php endforeach; ?>
                    </article>
                </article>
                <div class="modal__btn stock__btn blog">
                    <a href="" data-modal-target="#modal">Записаться</a>
                </div>
            </section>
        </section>
    </section>
    <script>
        jQuery(function($) {
            $(window).scroll(function() {
                sessionStorage.scrollTop = 480;
            });
            if (sessionStorage.scrollTop != "undefined") {
                $(window).scrollTop(sessionStorage.scrollTop);
            }
        });
    </script>
</main>
<?php get_footer() ?>