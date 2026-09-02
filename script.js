const exploreBtn = document.getElementById("exploreBtn");
const backBtn = document.getElementById("backBtn");

const hero = document.getElementById("hero");
const menuScreen = document.getElementById("menuScreen");


/* =========================
   HERO → FIELD MENU
========================= */

exploreBtn.addEventListener("click", () => {
  hero.classList.add("hero-hidden");
  menuScreen.classList.add("menu-visible");
});


/* =========================
   FIELD MENU → HERO
========================= */

backBtn.addEventListener("click", () => {
  hero.classList.remove("hero-hidden");
  menuScreen.classList.remove("menu-visible");
});


/* =========================
   RETURN FROM CATEGORY PAGE
   index.html#fields
========================= */

if (window.location.hash === "#fields") {
  hero.classList.add("hero-hidden");
  menuScreen.classList.add("menu-visible");
}

