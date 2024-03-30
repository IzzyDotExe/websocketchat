
let currentStyle = localStorage.getItem('style');

if (!currentStyle)
    localStorage.setItem('style', 'imessage');

function setCurrentStyle() {
    let style = prompt("Select a style (options: imessage, irc)", "imessage");
    currentStyle = style;
    localStorage.setItem('style', style)
}

function initStyle() {
    const head = document.querySelector(".style")
    head.clearChildren();
    const js = document.createElement("script");
    js.src = `/static/styles/${currentStyle}.js`;
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = `/static/styles/${currentStyle}.css`;
    head.appendChild(css);
    head.appendChild(js);
}
