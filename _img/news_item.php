<?php
$photos = $CurrentNode->getChildren();
$show = (count($photos) == 10) ?10 : 9;
$photo_ids = array();
tinclude('_head', array('left_blocks' => array('shop', 'submenu', 'interesting')));
?>
<? tinclude('blocks/top_banner'); ?>
<div class="title-l-1"><span><?= getLocale($top2Section) ?></span></div>
<div class="main-cont">
    <span class="label-t news-dat"><?= getNewsDate($CurrentNode) ?></span>
    <h2><?= getLocale($CurrentNode) ?></h2>
    <? if (strlen($CurrentNode->tfields['photo']['thumburl'])) { ?>
        <div class="cont-gallery js-fancy">
            <a href="<?= $CurrentNode->tfields['photo']['url'] ?>" class="cont-img" data-fancybox-group="gallery-1" title="<?= htmlspecialchars($CurrentNode->tfields['photo_alt']) ?>">
                <img src="<?= $CurrentNode->tfields['photo']['thumburl'] ?>" title="<?= htmlspecialchars($CurrentNode->tfields['photo_alt']) ?>" alt="<?= htmlspecialchars($CurrentNode->tfields['photo_alt']) ?>">
                <? if (strlen($CurrentNode->tfields['photo_alt'])) { ?><span><?= $CurrentNode->tfields['photo_alt'] ?></span><? } ?>
            </a>
        </div>
    <? } ?>
    <?= $CurrentNode->tfields['full_text'] ?>
    <a href="<? if(strlen($_SERVER['HTTP_REFERER'])){?><?= $_SERVER['HTTP_REFERER'] ?><? }else{?><?= QURL::link($top2Section) ?><? }?>" class="link-box link-box_back">вернуться</a>
</div>
<? if ($photos && count($photos)) { ?>
    <div class="galleries-wrap">
        <h3 class="title-l-1 title-media"><span>Фотогалерея</span></h3>
        <div class="wrap">
            <div class="short-gallery js-fancy">
                <?
                foreach ($photos as $k => $v) {
                    if ($k >= $show)
                        break;
                    $photo_ids[] = $v->id;
                    ?>
                    <a href="<?= $v->tfields['photo']['url'] ?>" data-fancybox-group="gallery-1">
                        <img src="<?= $v->tfields['photo']['thumburl'] ?>"  alt="<?= htmlspecialchars($v->tfields['photo_alt']) ?>">
                    </a>
                <? } ?>
                <? if (count($photos) > 10) { ?>
                    <a href="#" class="more-photos js-more-photos">смотреть еще</a>
                <? } ?>
                <?
                foreach ($photos as $k => $v) {
                    if (in_array($v->id, $photo_ids))
                        continue;
                    ?>
                    <a  class="js-hidden-photo" href="<?= $v->tfields['photo']['url'] ?>" data-fancybox-group="gallery-1">
                        <img src="<?= $v->tfields['photo']['thumburl'] ?>"  alt="<?= htmlspecialchars($v->tfields['photo_alt']) ?>">
                    </a>
                <? } ?>
            </div>
        </div>
    </div>
<? } ?>
<? tinclude('_foot'); ?>