/**
 * author: andreas johan virkus
 * snippet url: https://gist.github.com/andreasvirkus/bfaedc839de0d46ffe4c
 * 
 * Remove classes that have given prefix
 * Example: You have an element with classes "apple juiceSmall juiceBig banana"
 * You run:
 *   $elem.removeClassPrefix('juice');
 * The resulting classes are "apple banana"
 */
$.fn.removeClassPrefix = function (prefix) {
    this.each( function ( i, it ) {
        var classes = it.className.split(" ").map(function (item) {
            return item.indexOf(prefix) === 0 ? "" : item;
        });
        it.className = classes.join(" ");
    });

    return this;
};

/**
 * "http://dummy.com/?technology=jquery&blog=jquerybyexample". 
 * 1 var tech = GetURLParameter('technology');
 * 2 var blog = GetURLParameter('blog');
 * note: we are using this inside icon generator page
 */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

/*
 * Toggle text
 * $(".example").toggleText('Initial', 'Secondary');
 * https://stackoverflow.com/questions/2155453/jquery-toggle-text
 */
jQuery.fn.extend({
    toggleText: function (a, b){
        var that = this;
            if (that.text() != a && that.text() != b){
                that.text(a);
            }
            else
            if (that.text() == a){
                that.text(b);
            }
            else
            if (that.text() == b){
                that.text(a);
            }
        return this;
    }
});