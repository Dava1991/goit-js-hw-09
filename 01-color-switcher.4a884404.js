const t={btnStart:document.querySelector(".btn-start"),btnStop:document.querySelector(".btn-stop"),body:document.querySelector("body")};let e;t.btnStart.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.btnStart.disabled=!0})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.disabled=!1}));
//# sourceMappingURL=01-color-switcher.4a884404.js.map
