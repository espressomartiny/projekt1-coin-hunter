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
let i = 1;


let mince = document.querySelector("#mince");
mince.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
mince.style.top = Math.floor(Math.random() * window.innerHeight) + "px";




function stiskKlavesy(udalost) {
  console.log(udalost.key, udalost.keyCode);
  	let poziceL = panacek.style.left;
	let poziceT = panacek.style.top;

  if (udalost.keyCode === 37) {
    panacek.src = src = "obrazky/panacek-vlevo.png";
	panacek.style.left = parseInt(poziceL) - i++ + "px";
  }
  if (udalost.keyCode === 38) {
    panacek.src = src = "obrazky/panacek-nahoru.png";
	panacek.style.top = parseInt(poziceT) - i++ + "px";
  }
  if (udalost.keyCode === 39) {
    panacek.src = src = "obrazky/panacek-vpravo.png";
	panacek.style.left = parseInt(poziceL) + i++ + "px";
  }
  if (udalost.keyCode === 40) {
    panacek.src = src = "obrazky/panacek.png";
	panacek.style.top = parseInt(poziceT) + i++ + "px";
  }
}



