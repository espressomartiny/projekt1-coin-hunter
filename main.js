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
let mince = document.querySelector("#mince");
let hudba = document.querySelector("#hudba");
let zvukmince = document.querySelector("#zvukmince");
let zvukfanfara = document.querySelector("#zvukfanfara");

let pohyb = 5;
priSpusteni()


function priSpusteni() {
umisti(panacek, (window.innerWidth/2)-(panacek.naturalWidth/2), (window.innerHeight/2)-(panacek.naturalHeight))
umistiNahodne(mince)
}

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

  seberMinci();
  projdiSkrz();
  
  console.log(
    panacekX,
    minceX,
    panacekY,
    minceY,
    window.innerWidth,
    window.innerHeight,
    mince.naturalWidth
  );
  }

function seberMinci() {
	let panacekX = parseInt(panacek.style.left);
let panacekY = parseInt(panacek.style.top);
let minceX = parseInt(mince.style.left);
let minceY = parseInt(mince.style.top);
  let x = panacekX - minceX;
  let y = panacekY - minceY;

  if (x > -40 && x < 10 && y > -50 && y < 50) {
    umistiNahodne(mince);
	zvukmince.play();
    document.getElementById("score").innerHTML =
      parseInt(document.getElementById("score").innerHTML) + 1;
  }}

function vyhraj() {
  if (parseInt(document.getElementById("score").innerHTML) > 5) {
    zvukfanfara.play();
    alert("Bravo! Povedlo se ti sesbírat rezervu jednoho akademického platu.");
  }}

function projdiSkrz() {
  if (panacekY < 0) {
    umisti(panacek, panacek.style.left, window.innerHeight);
  }
  if (panacekY > window.innerHeight) {
    umisti(panacek, panacek.style.left, 0);
  }
  if (panacekX < 0) {
    umisti(panacek, window.innerWidth, panacek.style.top);
  }
  if (panacekX > window.innerWidth) {
    umisti(panacek, 0, panacek.style.top);
  }
}

function umisti(obj, X, Y) {
  obj.style.left = X + "px";
  obj.style.top = Y + "px";
}

function umistiNahodne(obj) {
	obj.style.left = Math.floor(Math.random() * (window.innerWidth - obj.naturalWidth)) + "px";
	obj.style.top = Math.floor(Math.random() * (window.innerHeight - obj.naturalHeight)) + "px";
}
