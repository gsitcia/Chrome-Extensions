chrome.storage.local.get(['id'],function(e) {
    chrome.management.launchApp(e.id);
});