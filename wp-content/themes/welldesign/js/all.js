jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 300) {
        jQuery('.tovelos').show(700);
    } else {
        jQuery('.tovelos').hide(700);
    }
});
document.getElementById('return-to-top').addEventListener('click', ()=>{
    window.scrollTo('0,0')
})
jQuery("a[href='#top']").click(function() {
    jQuery("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});
jQuery('.toggle,.toggle2').click(function() {
    jQuery('.toggle').toggleClass('active');
    jQuery('#overlay').toggleClass('open');
});

jQuery('.parent-li').on("mouseenter", function() {
    jQuery(this).children('ul').show();
});

jQuery('.parent-li').on("mouseleave", function() {
    jQuery(this).children('ul').hide();
});

// Get the modal
var ebModal = document.getElementById('mod1');

// Get the button that opens the modal
var ebBtn = document.getElementById("image1");

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close")[0];

// When the user clicks the button, open the modal 
ebBtn.onclick = function() {
    ebModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}