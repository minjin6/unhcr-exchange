jQuery(document).ready(function () {

    //Open the menu
    jQuery("#menuIcon").click(function () {

        jQuery('#pageOne').css('min-height', jQuery(window).height());

        jQuery('nav').css('opacity', 1);

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = jQuery('#pageOne').width();

        //set the content with the width that it has originally
        jQuery('#pageOne').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        jQuery('#contentLayer').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        jQuery('#container').bind('touchmove', function (e) {
            e.preventDefault()
        });

        //set margin for the whole container with a jquery UI animation
        jQuery("#container").animate({"marginLeft": ["60%", 'easeOutExpo']}, {
            duration: 600
        });

    });

    //close the menu
    jQuery("#contentLayer").click(function () {

        //enable all scrolling on mobile devices when menu is closed
        jQuery('#container').unbind('touchmove');

        jQuery('nav').css('opacity', 0);
        
        //set margin for the whole container back to original state with a jquery UI animation
        jQuery("#container").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
            duration: 600,
            complete: function () {
                jQuery('#pageOne').css('width', '100%');
                jQuery('#contentLayer').css('display', 'none');
                
                jQuery('#pageOne').css('min-height', 'auto');

            }
        });
    });

});