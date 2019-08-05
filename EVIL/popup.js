function make(e,s) {
    var a = document.createElement(e);
    a.innerText = s;
    return a;
}

chrome.management.getAll(l => {
    l.forEach(i => {
        if (i.isApp) {
            apps.appendChild(make('div',i.name));
        }
    });
});