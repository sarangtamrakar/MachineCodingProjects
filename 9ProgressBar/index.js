let filled = 1;

document.getElementById("run").addEventListener("click", function () {
  console.log("clicked");

    let timer = setInterval(filling, 50);
    resetBar(timer);

  function filling() {
    if (filled < 100) {
      filled = filled + 1;
      let el = document.getElementById("filled__bar");
      el.style.width = filled + "%";
      el.innerHTML = filled + "%";
    } else {
        clearInterval(timer);
      }
  }
});

function resetBar(timer) {
  document.getElementById("reset").addEventListener("click", function () {
    clearInterval(timer);
    filled = 1;
    let el = document.getElementById("filled__bar");
    el.style.width = filled + "%";
    el.innerHTML = filled + "%";
  });
}
