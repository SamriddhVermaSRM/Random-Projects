addEventListener('DOMContentLoaded', function() {
    var body = document.querySelector('body');
    var scrollValue = window.scrollY;

    this.window.addEventListener('scrollend', function() {
        scrollValue = window.scrollY;
        console.log(scrollValue);
        var nav = document.querySelector('#nav');
        if (scrollValue > 450) {
            nav.attributes.class.value = 'scolled-head';
        }
    });

    
});