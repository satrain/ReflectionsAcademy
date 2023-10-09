</div> <!-- #main --> 

<footer id="colophon" class="site-footer">
    <div class="sliding-text-container">
        <p class="sliding-text">Let's talk Let's talk Let's talk Let's talk Let's talk</p>
    </div>

    <div class="container">
        <div class="sliding-text-navigation">
            <p>Let's see what they have to say</p>
            <p>Our worldwide clients</p>
        </div>

        <div class="instagram-posts-wrapper">
            <a class="post-item" href="https://www.instagram.com/" target="_blank">
                <img src="/wp-content/uploads/2023/10/reflections-instagram-post-1.png" alt="Reflections instagram post">
            </a>
            <a class="post-item" href="https://www.instagram.com/" target="_blank">
                <img src="/wp-content/uploads/2023/10/reflections-instagram-post-2.png" alt="Reflections instagram post">
            </a>
            <a class="post-item" href="https://www.instagram.com/" target="_blank">
                <img src="/wp-content/uploads/2023/10/reflections-instagram-post-3.png" alt="Reflections instagram post">
            </a>
            <a class="post-item" href="https://www.instagram.com/" target="_blank">
                <img src="/wp-content/uploads/2023/10/reflections-instagram-post-4.png" alt="Reflections instagram post">
            </a>
        </div>

        <div class="footer-navigation">
            <div class="main-navigation">
                <?php 
                    wp_nav_menu( array(
                        'menu' => 'Footer menu',
                        'menu_class' => "", 
                        'menu_id'   => "",
                        'container' => false
                    ) );
                ?>
                <div class="footer-search">
                    <input type="search" name="footer-search" placeholder="Search"> <svg class="search-input-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
<circle cx="9.71422" cy="9.10094" r="8.10094" stroke="black" stroke-width="2"/>
<line x1="16.6095" y1="14.582" x2="20.9779" y2="18.9504" stroke="black" stroke-width="2"/>
</svg>
                </div>
            </div>
            <div class="bottom-navigation">
                <div class="shortcut-links">
                    <ul>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Pets</a></li>
                        <br>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Pets</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Pets</a></li>
                        <br>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Pets</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Pets</a></li>
                    </ul>
                </div>
                <div class="notices">
                    <p>2020 Wireframe LLC. All rights reserved. Wireframe, the Wireframe logo, the tag design, Wireframe, and Wireframe.com are trademarks of Wireframe and its affiliated companies. info@Wireframe.com</p>
                    <div class="social-media-links">
                        <a class="facebook-icon" href="#" target="_blank"><img src="<?= get_template_directory_uri() ?>/assets/images/facebook.svg" alt="Facebook icon"></a>
                        <a class="twitter-icon" href="#" target="_blank"><img src="<?= get_template_directory_uri() ?>/assets/images/twitter.svg" alt="Twitter icon"></a>
                        <a class="instagram-icon" href="#" target="_blank"><img src="<?= get_template_directory_uri() ?>/assets/images/instagram.svg" alt="Instagram icon"></a>
                        <a class="m-icon" href="#" target="_blank"><img src="<?= get_template_directory_uri() ?>/assets/images/m.svg" alt="M icon"></a>
                        <a class="linkedin-icon" href="#" target="_blank"><img src="<?= get_template_directory_uri() ?>/assets/images/linkedin.svg" alt="LinkedIn icon"></a>
                    </div>
                    <div class="privacy">
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer> <!-- #colophon -->
</div><!-- #page --> 

<?php wp_footer(); ?>
</body>
</html>