//sidebar script

let arrow = document.querySelector(".arrowleft");
let sideBar = document.querySelector(".sidebar");

document.querySelector("#hideSidebar").onclick = function hideSidebar() {
  if (sideBar.style.transform == "") {
    hide();
  } else {
    sideBar.style.transform = "";
    arrow.style.transform = "";
    arrow.style.transition = "1s";
    arrow.title = "hide sidebar";
  }
};
function hide() {
  sideBar.style.transform = "translatex(-210px)";
  sideBar.style.transition = "1s";
  arrow.style.transform = "rotate(180deg)";
  arrow.style.transition = "1s";
  arrow.title = "show sidebar";
}

let skills = document.querySelector(".skills");
let about = document.querySelector(".about");
let portfolio = document.querySelector(".portfolio");
let gallery = document.querySelector(".gallery");
let playground = document.querySelector(".playground");

var x = window.matchMedia("(max-width: 1260px)");

function showContainer (clase,none1, none2, none3, none4) {
clase.style.display = 'flex';
none1.style.display = 'none';
none2.style.display = 'none';
none3.style.display = 'none';
none4.style.display = 'none';
  if (x.matches) {
  hide();
}
}
document.querySelector("#showAbout").onclick = function showAbout() {
  showContainer (about, skills, portfolio, gallery, playground);
}
document.querySelector("#showSkills").onclick = function showSkills() {
  showContainer (skills, about, portfolio, gallery, playground);
}
document.querySelector("#showPortfolio").onclick = function showPortfolio()  {
  showContainer ( portfolio, skills, about, gallery, playground);
}
document.querySelector("#showGallery").onclick = function showGallery() {
  showContainer (gallery, about, skills, portfolio, playground);
}
document.querySelector("#showPlayground").onclick = function showPlayground() {
  showContainer (playground, about, skills, portfolio, gallery);
}

// Skills script
function showSkillInfo(heading, first) {
  let main = document.querySelector("body");
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  main.appendChild(overlay);
  if (first == String) {
  first = `<ul>${first}</ul>`
  }
  let showDescription = document.createElement("div");
  showDescription.classList.add("showdescription");
  showDescription.innerHTML = `<div><h4>${heading}</h4>${first}</div>`;
  
  main.appendChild(showDescription);

  overlay.onclick = removeOverlay = () => {
    var remove = document.querySelector(".overlay");
    main.removeChild(remove);
    main.removeChild(showDescription);
  };
}
let ShowCss = document.querySelector("#showcss");
ShowCss.addEventListener("click", () => {
  showSkillInfo("css", "<li class='liststyle'>Bootstrap</li><li class='liststyle'>Responsive web</li><li class='liststyle'>flex tehnology</li><li class='liststyle'>Grids</li><li class='liststyle'>transforms/transitions</li>");
  
});
let ShowHtml = document.querySelector("#showhtml");
showhtml.addEventListener("click", () => {
  showSkillInfo("Html", "<li class='liststyle'>elements/attributes</li><li class='liststyle'>forms</li>");
});
let ShowJavascriptl = document.querySelector("#showjavascript");
ShowJavascriptl.addEventListener("click", () => {
  showSkillInfo("Javascript", "<li class='liststyle'>JQuery</li><li class='liststyle'>Html DOM</li><li class='liststyle'>Types</li><li class='liststyle'>conditions</li><li class='liststyle'>switch/loops</li>");
});
let ShowPhp = document.querySelector("#showphp");
ShowPhp.addEventListener("click", () => {
  showSkillInfo("php", "<li class='liststyle'>Laravel</li><li class='liststyle'>connect to mySql database</li>");
});

//portfolio script

let openMogo = document.querySelector(".mogo");
let openLogin = document.querySelector(".loginpage");
let openToDo =document.querySelector('.todolist');

function maximaze(first, second) {
  let main = document.querySelector("body");
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  main.appendChild(overlay);
  let outerdiv = document.createElement("div");
  outerdiv.classList.add(`${second}`);
  main.appendChild(outerdiv);

  let max = document.createElement("div");
  max.classList.add(`${first}`);
  outerdiv.appendChild(max);

  let closebtn = document.createElement('div');
  closebtn.classList.add('closebtn');
  outerdiv.appendChild(closebtn);
closebtn.innerHTML = "&#215;";
  overlay.onclick = removeOverlay = () => {
    var remove = document.querySelector(".overlay");
    main.removeChild(remove);
    main.removeChild(outerdiv);
  };
    closebtn.onclick = function() {
      removeOverlay ();
    }
};

openMogo.addEventListener("click", () => maximaze('mogomax', 'outerdiv'));
openLogin.addEventListener("click", () => maximaze('loginmax','outerdiv2'));
openToDo.addEventListener("click", () => maximaze('todomax', 'outerdiv2'));


//playground script
let firstNumber = document.querySelector(".firstnumber");
let secondNumber = document.querySelector(".secondnumber");
let select = document.querySelector("#select");

document.querySelector(".submit").onclick = function () {
  getValue();
};
function getValue() {
  let numberValue = firstNumber.value;
  let numberValue2 = secondNumber.value;
  // console.log(numberValue);
  // console.log(numberValue2);
  let a = Number(numberValue);
  let b = Number(numberValue2);
  // console.log(a + b);
  switch (select.value) {
    case "+":
      document.querySelector(".answer").innerHTML = `<div>${a + b}</div>`;
      firstNumber.value = "";
      secondNumber.value = "";
      firstNumber.focus();
      break;
    case "-":
      document.querySelector(".answer").innerHTML = `<div>${a - b}</div>`;
      firstNumber.value = "";
      secondNumber.value = "";
      firstNumber.focus();
      break;
    case "*":
      document.querySelector(".answer").innerHTML = `<div>${a * b}</div>`;
      firstNumber.value = "";
      secondNumber.value = "";
      firstNumber.focus();
      break;
    case "/":
      document.querySelector(".answer").innerHTML = `<div>${a / b}</div>`;
      firstNumber.value = "";
      secondNumber.value = "";
      firstNumber.focus();
      break;
  }
}
