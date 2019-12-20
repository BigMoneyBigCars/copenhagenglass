   document.addEventListener("DOMContentLoaded", burgerMenu); // kalder funktionen burgermMenu når vinduet er loadet

   /// Burgermenu kode ///
   function burgerMenu() {

       const toggler = document.querySelector('.menu__toggler'); // definerer variablen "toggler" til at være .menu__toggler i vores html
       const menu = document.querySelector('.mobile-menu-dropdown'); // --
       const atags = document.querySelector('.atags-mobile-menu'); // --

       toggler.addEventListener('click', () => { // sætter en click eventlisterne på variablen "toggler"
           toggler.classList.toggle('active'); // toggle "active" på vores variabel "toggler"
           atags.classList.toggle('fade-in-left'); // toggler classen .fade-in-left
           menu.classList.toggle('active'); // toggler "active" på vores varibel menu

       });
       console.log("menu virker"); // Logger at vores menu virker.

       getJson(); // kalder getJson funktion
   }

   ///Json data til footer ///

   let aabningstider;

   async function getJson() {

       let jsonData = await fetch("https://mostvalue.dk/Copenhagenglass/wordpress/wp-json/wp/v2/aabningstid");

       aabningstider = await jsonData.json();
       console.log(aabningstider);
       footer();
   };

   ///Footer åbningstider ///

   function footer() {
       document.querySelector(".mandag").textContent = aabningstider[0].mandag;
       document.querySelector(".tirsdag").textContent = aabningstider[0].tirsdag;
       document.querySelector(".onsdag").textContent = aabningstider[0].onsdag;
       document.querySelector(".torsdag").textContent = aabningstider[0].torsdag;
       document.querySelector(".fredag").textContent = aabningstider[0].fredag;
       document.querySelector(".loerdag").textContent = aabningstider[0].loerdag;
       document.querySelector(".soendag").textContent = aabningstider[0].soendag;

   }
