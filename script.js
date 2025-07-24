particlesJS("particles-js", {
  particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.15,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.49,
      random: false,
      anim: {
        enable: true,
        speed: 0.25,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 0.333,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 83.9,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

document
  .getElementById("minimizarNotas")
  .addEventListener("click", function () {
    var notasMain = document.getElementById("notasMain");
    if (notasMain) {
      notasMain.style.display = "none";
    }
  });

maximized = false;
document
  .getElementById("maximizarNotas")
  .addEventListener("click", function () {
    maximized = !maximized;
    var notasMain = document.getElementById("notasMain");
    if (notasMain) {
      notasMain.style.width = "100%";
      notasMain.style.height = "100vh";
      notasMain.style.left = "0px";
      notasMain.style.top = "30px";
    }
    if (!maximized) {
      notasMain.style.width = "800px";
      notasMain.style.height = "500px";
      notasMain.style.left = "50px";
      notasMain.style.top = "50px";
    }
  });

document.getElementById("sairNotas").addEventListener("click", function () {
  var notasMain = document.getElementById("notasMain");
  if (notasMain) {
    notasMain.style.display = "none";
  }
});

document.getElementById("notas").addEventListener("click", function () {
  var notasMain = document.getElementById("notasMain");
  if (notasMain.style.display === "block") {
    notasMain.style.display = "none";
  } else {
    notasMain.style.display = "block";
    notasMain.style.left = "50px";
    notasMain.style.top = "50px";
  }
});

document.getElementById("memoria").addEventListener("click", function () {
  var memoriaMain = document.getElementById("memoriaMain");
  if (memoriaMain.style.display === "block") {
    memoriaMain.style.display = "none";
  } else {
    memoriaMain.style.display = "block";
    memoriaMain.style.width = "100%";
    memoriaMain.style.height = "100vh";
    memoriaMain.style.left = "0px";
    memoriaMain.style.top = "30px";
    memoriaMain.style.zIndex = "1000";
    memoriaMain.style.paddingBottom = "100px";
  }
});
document.getElementById("sairMemoria").addEventListener("click", function () {
  var memoriaMain = document.getElementById("memoriaMain");
  if (memoriaMain) {
    memoriaMain.style.display = "none";
  }
});
var maximizedMemoria = false;
document
  .getElementById("maximizarMemoria")
  .addEventListener("click", function () {
    maximizedMemoria = !maximizedMemoria;
    var memoriaMain = document.getElementById("memoriaMain");
    if (memoriaMain) {
      memoriaMain.style.width = "100%";
      memoriaMain.style.height = "100vh";
      memoriaMain.style.left = "0px";
      memoriaMain.style.top = "30px";
    }
    if (!maximizedMemoria) {
      memoriaMain.style.width = "80%";
      memoriaMain.style.height = "90vh";
      memoriaMain.style.left = "50px";
      memoriaMain.style.top = "50px";
      memoriaMain.style.paddingBottom = "50px";
    }
  });
document
  .getElementById("minimizarMemoria")
  .addEventListener("click", function () {
    var memoriaMain = document.getElementById("memoriaMain");
    if (memoriaMain) {
      memoriaMain.style.display = "none";
    }
  });

document.getElementById("velha").addEventListener("click", function () {
  var velhaMain = document.getElementById("velhaMain");
  if (velhaMain.style.display === "block") {
    velhaMain.style.display = "none";
  } else {
    velhaMain.style.display = "block";
    velhaMain.style.width = "100%";
    velhaMain.style.height = "100vh";
    velhaMain.style.left = "0px";
    velhaMain.style.top = "30px";
    velhaMain.style.zIndex = "1000";
    velhaMain.style.paddingBottom = "100px";
  }
});
document.getElementById("sairVelha").addEventListener("click", function () {
  var velhaMain = document.getElementById("velhaMain");
  if (velhaMain) {
    velhaMain.style.display = "none";
  }
});
var maximizedVelha = false;
document
  .getElementById("maximizarVelha")
  .addEventListener("click", function () {
    maximizedVelha = !maximizedVelha;
    var velhaMain = document.getElementById("velhaMain");
    if (velhaMain) {
      velhaMain.style.width = "100%";
      velhaMain.style.height = "100vh";
      velhaMain.style.left = "0px";
      velhaMain.style.top = "30px";
    }
    if (!maximizedVelha) {
      velhaMain.style.width = "80%";
      velhaMain.style.height = "90vh";
      velhaMain.style.left = "50px";
      velhaMain.style.top = "50px";
      velhaMain.style.paddingBottom = "50px";
    }
  });
document
  .getElementById("minimizarVelha")
  .addEventListener("click", function () {
    var velhaMain = document.getElementById("velhaMain");
    if (velhaMain) {
      velhaMain.style.display = "none";
    }
  });
document.getElementById("cobrinha").addEventListener("click", function () {
  var cobrinhaMain = document.getElementById("cobrinhaMain");
  if (cobrinhaMain.style.display === "block") {
    cobrinhaMain.style.display = "none";
  } else {
    cobrinhaMain.style.display = "block";
    cobrinhaMain.style.width = "100%";
    cobrinhaMain.style.height = "100vh";
    cobrinhaMain.style.left = "0px";
    cobrinhaMain.style.top = "30px";
    cobrinhaMain.style.zIndex = "1000";
    cobrinhaMain.style.paddingBottom = "100px";
  }
});
document.getElementById("sairCobrinha").addEventListener("click", function () {
  var cobrinhaMain = document.getElementById("cobrinhaMain");
  if (cobrinhaMain) {
    cobrinhaMain.style.display = "none";
  }
});
var maximizedCobrinha = false;
document
  .getElementById("maximizarCobrinha")
  .addEventListener("click", function () {
    maximizedCobrinha = !maximizedCobrinha;
    var cobrinhaMain = document.getElementById("cobrinhaMain");
    if (cobrinhaMain) {
      cobrinhaMain.style.width = "100%";
      cobrinhaMain.style.height = "100vh";
      cobrinhaMain.style.left = "0px";
      cobrinhaMain.style.top = "30px";
    }
    if (!maximizedCobrinha) {
      cobrinhaMain.style.width = "80%";
      cobrinhaMain.style.height = "90vh";
      cobrinhaMain.style.left = "50px";
      cobrinhaMain.style.top = "50px";
      cobrinhaMain.style.paddingBottom = "50px";
    }
  });
document
  .getElementById("minimizarCobrinha")
  .addEventListener("click", function () {
    var cobrinhaMain = document.getElementById("cobrinhaMain");
    if (cobrinhaMain) {
      cobrinhaMain.style.display = "none";
    }
  });
document.getElementById("busca").addEventListener("click", function () {
  var buscaMain = document.getElementById("buscaMain");
  if (buscaMain.style.display === "block") {
    buscaMain.style.display = "none";
  } else {
    buscaMain.style.display = "block";
    buscaMain.style.width = "100%";
    buscaMain.style.height = "100vh";
    buscaMain.style.left = "0px";
    buscaMain.style.top = "30px";
    buscaMain.style.zIndex = "1000";
    buscaMain.style.paddingBottom = "100px";
  }
});
document.getElementById("sairBusca").addEventListener("click", function () {
  var buscaMain = document.getElementById("buscaMain");
  if (buscaMain) {
    buscaMain.style.display = "none";
  }
});
var maximizedBusca = false;
document
  .getElementById("maximizarBusca")
  .addEventListener("click", function () {
    maximizedBusca = !maximizedBusca;
    var buscaMain = document.getElementById("buscaMain");
    if (buscaMain) {
      buscaMain.style.width = "100%";
      buscaMain.style.height = "100vh";
      buscaMain.style.left = "0px";
      buscaMain.style.top = "30px";
    }
    if (!maximizedBusca) {
      buscaMain.style.width = "80%";
      buscaMain.style.height = "90vh";
      buscaMain.style.left = "50px";
      buscaMain.style.top = "50px";
      buscaMain.style.paddingBottom = "50px";
    }
  });
document
  .getElementById("minimizarBusca")
  .addEventListener("click", function () {
    var buscaMain = document.getElementById("buscaMain");
    if (buscaMain) {
      buscaMain.style.display = "none";
    }
  });
document.getElementById("lol").addEventListener("click", function () {
  var lolMain = document.getElementById("lolMain");
  if (lolMain.style.display === "block") {
    lolMain.style.display = "none";
  } else {
    lolMain.style.display = "block";
    lolMain.style.width = "100%";
    lolMain.style.height = "100vh";
    lolMain.style.left = "0px";
    lolMain.style.top = "30px";
    lolMain.style.zIndex = "1000";
    lolMain.style.paddingBottom = "100px";
  }
});
document.getElementById("sairLol").addEventListener("click", function () {
  var lolMain = document.getElementById("lolMain");
  if (lolMain) {
    lolMain.style.display = "none";
  }
});
var maximizedLol = false;
document.getElementById("maximizarLol").addEventListener("click", function () {
  maximizedLol = !maximizedLol;
  var lolMain = document.getElementById("lolMain");
  if (lolMain) {
    lolMain.style.width = "100%";
    lolMain.style.height = "100vh";
    lolMain.style.left = "0px";
    lolMain.style.top = "30px";
  }
  if (!maximizedLol) {
      lolMain.style.width = "80%";
      lolMain.style.height = "90vh";
      lolMain.style.left = "50px";
      lolMain.style.top = "50px";
      lolMain.style.paddingBottom = "50px";
  }
});

document.getElementById("minimizarLol").addEventListener("click", function () {
  var lolMain = document.getElementById("lolMain");
  if (lolMain) {
    lolMain.style.display = "none";
  }
});

dragElement(document.getElementById("notasMain"));
dragElement(document.getElementById("memoriaMain"));
dragElement(document.getElementById("velhaMain"));
dragElement(document.getElementById("cobrinhaMain"));
dragElement(document.getElementById("buscaMain"));
dragElement(document.getElementById("lolMain"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  var resizer = document.createElement("div");
  resizer.className = "resizer";
  elmnt.appendChild(resizer);
  resizer.addEventListener("mousedown", function (e) {
    e.preventDefault();
    document.onmousemove = resizeElement;
    document.onmouseup = stopResize;
  });
  function resizeElement(e) {
    e.preventDefault();
    var width = e.clientX - elmnt.getBoundingClientRect().left;
    var height = e.clientY - elmnt.getBoundingClientRect().top;
    if (width > 300 && height > 300) {
      elmnt.style.width = width + "px";
      elmnt.style.height = height + "px";
    }
  }
  function stopResize() {
    document.onmousemove = null;
    document.onmouseup = null;
  }

  var dateElement = document.getElementById("date");
  if (dateElement) {
    var mediaQuery = window.matchMedia("(max-width: 600px)");
    function handleMediaChange(e) {
      if (e.matches) {
        var currentDate = new Date();
        dateElement.textContent =
          currentDate.getDate() +
          "/" +
          (currentDate.getMonth() + 1) +
          "/" +
          currentDate.getFullYear();
      } else {
          document.getElementById("date").textContent = new Date().toLocaleDateString('pt-BR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
          });
      }
    }
    mediaQuery.addEventListener("change", handleMediaChange);
    handleMediaChange(mediaQuery);
  }
}
