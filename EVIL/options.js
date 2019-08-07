function ov(v) {
    var z = document.createElement('option');
    z.value = v;
    return z;
}

chrome.storage.local.get(['id'], function(e) {
    if (e.id) {
        chrome.management.get(e.id,function(r) {
            document.getElementById('name').value = r.name;
            document.getElementById('success').innerText = 'Currently launching: '+r.name;
        });
    }
});

chrome.management.getAll(function(l) {
    var apps = l.filter(i=>i.type.indexOf('app')!=-1);
    apps.forEach(i=>document.getElementById('names').appendChild(ov(i.name)));
    document.getElementById('submit').addEventListener('click',function() {
        var id = apps.filter(i=>i.name==document.getElementById('name').value);
        if (id.length > 0) {
            chrome.storage.local.set({id:id[0].id},function() {
                var success = document.getElementById('success');
                success.innerText = chrome.runtime.lastError || ('Currently launching: '+id[0].name);
            });
        }
    });
});