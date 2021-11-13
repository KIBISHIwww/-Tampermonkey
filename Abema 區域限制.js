// ==UserScript==
// @name         Abema 區域限制
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  解除 AbemaTV 區域限制
// @author       KIBISHIwww
// @match        https://abema.tv/*
// @icon         https://www.google.com/s2/favicons?domain=abema.tv
// @grant        none
// ==/UserScript==

Object.defineProperty(__CLIENT_REGION__,'isAllowed',{
get: () => true
});
Object.defineProperty(__CLIENT_REGION__,'status',{
get: () => false
});
