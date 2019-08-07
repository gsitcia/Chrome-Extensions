chrome.storage.local.get(['id'], function(e) {
    document.getElementById('id').value = e.id;
});

document.getElementById('id').addEventListener('keyup',function() {
    chrome.storage.local.set({id:document.getElementById('id').value});
});