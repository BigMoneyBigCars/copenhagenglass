       const toggler = document.querySelector('.menu__toggler');
       const menu = document.querySelector('.mobile-menu-dropdown');
       const atags = document.querySelector('.atags-mobile-menu');

       toggler.addEventListener('click', () => {
           toggler.classList.toggle('active');
           atags.classList.toggle('fade-in-left');
           menu.classList.toggle('active');

       });



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
