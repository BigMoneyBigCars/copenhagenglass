       const toggler = document.querySelector('.menu__toggler');
       const menu = document.querySelector('.mobile-menu-dropdown');
       const atags = document.querySelector('.atags-mobile-menu');

       toggler.addEventListener('click', () => {
           toggler.classList.toggle('active');
           atags.classList.toggle('fade-in-left');
           menu.classList.toggle('active');
       });


       (function (i, s, o, g, r, a, m) {
           i['GoogleAnalyticsObject'] = r;
           i[r] = i[r] || function () {
               (i[r].q = i[r].q || []).push(arguments)
           }, i[r].l = 1 * new Date();
           a = s.createElement(o),
               m = s.getElementsByTagName(o)[0];
           a.async = 1;
           a.src = g;
           m.parentNode.insertBefore(a, m)
       })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

       ga('create', 'UA-46156385-1', 'cssscript.com');
       ga('send', 'pageview');




       /* footer kode*/

       document.addEventListener("DOMContentLoaded", getJson);
       let aabningstider;

       async function getJson() {

           let jsonData = await fetch("https://mostvalue.dk/Copenhagenglass/wordpress/wp-json/wp/v2/aabningstid");

           aabningstider = await jsonData.json();
           console.log(aabningstider);
           vis();
       };

       function vis() {
           document.querySelector(".mandag").textContent = aabningstider[0].mandag;
           document.querySelector(".tirsdag").textContent = aabningstider[0].tirsdag;
           document.querySelector(".onsdag").textContent = aabningstider[0].onsdag;
           document.querySelector(".torsdag").textContent = aabningstider[0].torsdag;
           document.querySelector(".fredag").textContent = aabningstider[0].fredag;
           document.querySelector(".loerdag").textContent = aabningstider[0].loerdag;
           document.querySelector(".soendag").textContent = aabningstider[0].soendag;
       }
