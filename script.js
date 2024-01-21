// ==UserScript==
// @name         Wikiwww
// @namespace    http://tampermonkey.net/
// @version      2024-01-21
// @description  無機質なWikiに草を
// @author       M.Tange
// @match        https://*.wikipedia.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

var $ = window.jQuery;

$(function() {
    var paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++){
        const paragraph = paragraphs[i].textContent;
        paragraphs[i].textContent = paragraph.replaceAll("、", "ww").replaceAll("。", "www");
    };
    paragraphs = document.getElementsByTagName("dl");
    for (let i = 0; i < paragraphs.length; i++){
        const paragraph = paragraphs[i].textContent;
        paragraphs[i].textContent = paragraph.replaceAll("、", "ww").replaceAll("。", "www");
    };
});
