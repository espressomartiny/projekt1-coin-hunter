// toto budeš potřebovat později

// sem začni psát svůj program

let panacek = document.querySelector("#panacek");
let panacekSirka = panacek.style.width;
let panacekVyska = panacek.style.height;
panacek.style.left = "500px";
panacek.style.top = "100px";
let pohyb = 1;

let mince = document.querySelector("#mince");
let minceX = (mince.style.left =
  Math.floor(Math.random() * window.innerWidth) + "px");
let minceY = (mince.style.top =
  Math.floor(Math.random() * window.innerHeight) + "px");
let minceSirka = mince.style.width;
let mincekVyska = mince.style.height;

//let panacekX = panacek.style.left;
//let panacekY = panacek.style.top;

function stiskKlavesy(udalost) {
  console.log(udalost.key, udalost.keyCode);

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

  if (
    !(
      panacekX + panacekSirka < minceX ||
      minceX + minceSirka < panacekX ||
      panacekY + panacekVyska < minceY ||
      minceY + minceVyska < panacekY
    )
  ) {
    console.log("panacek a mince se prekryvaji");
  }
}
