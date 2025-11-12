// ==UserScript==
// @name         Disable JavaScript Popups
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disables alert, confirm, prompt, and beforeunload popups on websites like Tekstac
// @author       Raj Varun
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Disable alert/confirm/prompt ASAP
    window.alert = () => {};
    window.confirm = () => true;
    window.prompt = () => null;

    // Prevent site scripts from overwriting these
    Object.defineProperty(window, 'alert',  { value: () => {}, writable: false, configurable: false });
    Object.defineProperty(window, 'confirm',{ value: () => true, writable: false, configurable: false });
    Object.defineProperty(window, 'prompt', { value: () => null, writable: false, configurable: false });

    // Disable beforeunload prompts (eg. “Are you sure you want to leave?”)
    window.addEventListener('beforeunload', e => {
        e.stopImmediatePropagation();
        e.returnValue = undefined;
    }, true);
})();
