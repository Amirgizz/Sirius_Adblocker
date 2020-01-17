"use strict"
 
var enabled = true;
 
// Check on sochisirius.ru and ngs.ru
const badDomains = [
    "doubleclick.com",
    "mc.yandex.ru",
    "google-analytics.com",
    "googletagmanager.com",
    "an.yandex.ru",
    "reklama.ngs.ru",
    "ads.adfox.ru",
    "www.tns-counter.com"
];
 
let leetRequestFilter = function(details) {
    if (!enabled) return {};
 
    let isBlocked = false;
    badDomains.forEach((domain) => {
        if (details.url.indexOf(domain) != -1) {
            isBlocked = true;
        }
    });

    console.log("Trying to load: ", details.url, isBlocked);
       
    const response = {cancel: isBlocked};
    return response;
}
 
chrome.webRequest.onBeforeRequest.addListener(
        leetRequestFilter,
        {urls: ["http://*/*", "https://*/*"]},
        ["blocking"]  // Nothing continues until we decide to proceed.
);
