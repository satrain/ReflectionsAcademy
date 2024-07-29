<?php 
/* Template Name: Free Black & White Photo Editing Guide */
?>

<html lang="en">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body>
    <div class="main-content free-bw-guide">
        <a href="<?= get_site_url() ?>"><div class="free-bw-guide-reflections-logo">Reflections</div></a>
        <div class="free-bw-guide-hero container">
            <div class="hero-copy">
                <h1>Free Black & White Photo Editing Guide</h1>
                <p>In this free guide Sharon will show you the exact technique how we edit our black & white photos for that clean and crisp look. The technique she uses is so surprisingly simple that you'll be able to replicate it in less than 10 minutes.</p>
            </div>
            <div class="video-holder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/881640168?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Free Black &amp; White Photo Editing Guide - REFLECTIONS ACADEMY"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>

            <div class="mobile-h1 free-bw-guide-mobile-logo">
                <img src="<?= get_template_directory_uri() ?>/assets/images/reflections.svg" alt="Reflections image">
            </div>

            <p>If you liked this free black & white editing guide checkout our full editing masterclass <a>here.</a></p>
        </div>
    </div>
    <?php wp_footer(); ?>
</body>
</html>