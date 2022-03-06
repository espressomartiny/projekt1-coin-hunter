// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program

let panacek = document.querySelector("#panacek");
panacek.style.left = "500px";
panacek.style.top = "100px";

function stiskKlavesy(udalost) {
  console.log(udalost.key, udalost.keyCode);

  if (udalost.keyCode === 37) {
    panacek.src = src = "obrazky/panacek-vlevo.png";
  }
  if (udalost.keyCode === 38) {
    panacek.src = src = "obrazky/panacek-nahoru.png";
  }
  if (udalost.keyCode === 39) {
    panacek.src = src = "obrazky/panacek-vpravo.png";
  }
  if (udalost.keyCode === 40) {
    panacek.src = src = "obrazky/panacek.png";
  }
}
