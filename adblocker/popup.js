"use strict"
 
window.onload = function () {
    function updateLabel() {
        const enabled = chrome.extension.getBackgroundPage().enabled;
        // FIXME! Toggle the button label: Disabled <-> Enabled
        if (enabled) document.getElementById("toggle_button").value="Disable";
        else document.getElementById("toggle_button").value = "Enable";
    }
    document.getElementById('toggle_button').onclick = function () {
        let background = chrome.extension.getBackgroundPage();
        background.enabled = !background.enabled;
        updateLabel();
    };

    updateLabel();
}
