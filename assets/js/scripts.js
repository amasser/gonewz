var h=document.documentElement,b=document.body,st="scrollTop",sh="scrollHeight",progress=document.querySelector("#progress"),scroll;var scrollpos=window.scrollY;var header=document.getElementById("header");var navcontent=document.getElementById("nav-content");document.addEventListener("scroll",function(){scroll=(h[st]||b[st])/((h[sh]||b[sh])-h.clientHeight)*100;progress.style.setProperty("--scroll",scroll+"%");scrollpos=window.scrollY;if(scrollpos>10){header.classList.add("bg-white");header.classList.add("shadow-xl");navcontent.classList.remove("bg-gray-50");navcontent.classList.add("bg-white")}else{header.classList.remove("bg-white");header.classList.remove("shadow-xl");navcontent.classList.remove("bg-white");navcontent.classList.add("bg-gray-50")}});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }