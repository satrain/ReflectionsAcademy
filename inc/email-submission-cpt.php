<?php

/*
* Creating a function to create CPT Email Submission
*/
  
function reflections_email_subimission_cpt() {
  
    $labels = array(
        'name'                => _x( 'Emails', 'Post Type General Name', 'twentytwentyone' ),
        'singular_name'       => _x( 'Email', 'Post Type Singular Name', 'twentytwentyone' ),
        'menu_name'           => __( 'Emails', 'twentytwentyone' ),
        'parent_item_colon'   => __( 'Parent Email', 'twentytwentyone' ),
        'all_items'           => __( 'All Emails', 'twentytwentyone' ),
        'view_item'           => __( 'View Email', 'twentytwentyone' ),
        'add_new_item'        => __( 'Add New Email', 'twentytwentyone' ),
        'add_new'             => __( 'Add New Email', 'twentytwentyone' ),
        'edit_item'           => __( 'Edit Email', 'twentytwentyone' ),
        'update_item'         => __( 'Update Email', 'twentytwentyone' ),
        'search_items'        => __( 'Search Email', 'twentytwentyone' ),
        'not_found'           => __( 'Not Found', 'twentytwentyone' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'twentytwentyone' ),
    );
          
    $args = array(
        'label'               => __( 'Emails', 'twentytwentyone' ),
        'description'         => __( 'Email submissions', 'twentytwentyone' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'author', 'thumbnail', 'revisions', 'custom-fields', ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'show_in_rest'       => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
        'show_in_rest' => true,
    
    );
        
    register_post_type( 'Emails', $args );
} 

add_action( 'init', 'reflections_email_subimission_cpt', 0 );

?>