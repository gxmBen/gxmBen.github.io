// When the user scrolls the page, execute myFunction 
window.onscroll = function () { stick(); };

setTimeout(function () { popup(); }, 1000);

// Get the header
var header = document.getElementById('sticky-ad');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
    if (window.pageYOffset >= sticky) {
        header.classList.add('sticky');
        $('#sticky-ad').show();
        $('.gxm-cr-sharebtns').show();
        $('.ad-popup').hide();
    } else {
        header.classList.remove('sticky');
        $('#sticky-ad').hide();
        $('.gxm-cr-sharebtns').hide();
    }
}

function popup() {
    $('#ad-modal').modal();
}

window.onload = function () {
    $('#sticky-ad').hide();
    $('.gxm-cr-sharebtns').hide();
};
//# sourceMappingURL=crtv-sticky-ad.js.map
