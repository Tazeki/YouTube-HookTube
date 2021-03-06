// ==UserScript==
// @name        URL Conversion | YouTube - HookTube
// @namespace   Tazeki
// @description The smallest, possibly most useful YouTube-HookTube conversion script.  RegEx based.  Report bugs to tangentale@protonmail.com.  Sends any /www.youtube.com/ sites to HookTube before page load.  Does not affect /other.youtube.com/, (gaming.youtube.com, creatoracademy.youtube.com, etc.).
// @include     *youtube*
// @version     1
// @grant       none
// @run-at document-start
// ==/UserScript==

var url = window.location.toString();
if (url.indexOf('www.youtube.com') !== - 1) {
  window.location = url.replace(/youtube.com/, 'hooktube.com');
}
