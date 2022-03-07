// toto budeš potřebovat později
//   if (
//     !(
//       panacekX + panacekSirka < minceX ||
//       minceX + minceSirka < panacekX ||
//       panacekY + panacekVyska < minceY ||
//       minceY + minceVyska < panacekY
//     )
//   ) {
//     console.log("panacek a mince se prekryvaji");
//   }

// sem začni psát svůj program

let panacek = document.querySelector("#panacek");

let startX = (panacek.style.left = "500px");
let startY = (panacek.style.top = "100px");
let pohyb = 1;

let mince = document.querySelector("#mince");
let minceX = parseInt(
  (mince.style.left = Math.floor(Math.random() * window.innerWidth) + "px")
);
let minceY = parseInt(
  (mince.style.top = Math.floor(Math.random() * window.innerHeight) + "px")
);

let hudba = document.querySelector("#hudba");
let zvukmince = document.querySelector("#zvukmince");

function stiskKlavesy(udalost) {
  console.log(udalost.key, udalost.keyCode);
  hudba.play();

  if (udalost.keyCode === 37) {
    panacek.src = src = "obrazky/panacek-vlevo.png";
    panacek.style.left = parseInt(panacek.style.left) - pohyb + "px";
  }
  if (udalost.keyCode === 38) {
    panacek.src = src = "obrazky/panacek-nahoru.png";
    panacek.style.top = parseInt(panacek.style.top) - pohyb + "px";
  }
  if (udalost.keyCode === 39) {
    panacek.src = src = "obrazky/panacek-vpravo.png";
    panacek.style.left = parseInt(panacek.style.left) + pohyb + "px";
  }
  if (udalost.keyCode === 40) {
    panacek.src = src = "obrazky/panacek.png";
    panacek.style.top = parseInt(panacek.style.top) + pohyb + "px";
  }

  let panacekX = parseInt(panacek.style.left);
  let panacekY = parseInt(panacek.style.top);
  let minceX = parseInt(mince.style.left);
  let minceY = parseInt(mince.style.top);
  console.log(panacekX, minceX, panacekY, minceY);
  let x = panacekX - minceX;
  let y = panacekY - minceY;

  if (x > -40 && x < 10 && y > -50 && y < 50) {
    console.log("funguje");
    mince.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    mince.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    zvukmince.play();
    PrictiBod();
  }
}

// function PrictiBod()
// {let skore = document.querySelector("#score")
// let body = 0
// skore.innerHTML = body++;}
