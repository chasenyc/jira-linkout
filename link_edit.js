const fixLinks = function() {
    const comp = new RegExp(location.host)   
    document.querySelectorAll('div[role="presentation"] a').forEach(function (el){
        if (!comp.test(el.href)) {
            el.setAttribute('target', '_blank');
        }
    });
};

const max_tries = 20;

const fixLinksAfterTime = function(count = 0) {
    if (count < max_tries) {
        fixLinks();
        setTimeout(function () {
            fixLinksAfterTime(count + 1)
        }, 250);
    }
};

fixLinksAfterTime(Math.floor(max_tries / 2));

// Add listener for whenever user clicks on screen.
document.addEventListener('click', function () { fixLinksAfterTime(); });