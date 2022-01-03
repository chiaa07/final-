const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor img");

// hammer 跟著滑鼠動的部分//  

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";


// hammer點擊一下 ，會跟著擺動//  

  window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease";
    setTimeout(() => {
      cursor.style.removeProperty("animation");  // hammer點擊一下 ，會跟著擺動 無數多次 //
    }, 100);
  });
});



playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";

  let hole;
  let points = 0;

  const startGame = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 9);
    hole = holes[arrayNo];

    let image = document.createElement("img");
    image.setAttribute("src", "gameImages/mole.png");
    image.setAttribute("class", "mole");
    hole.appendChild(image);

    setTimeout(() => {
      hole.removeChild(image);
    }, 600);
  }, 700);

  window.addEventListener("click", (e) => {
    if (e.target === hole) score.innerText = ++points;
  });

// 點擊 停下 遊戲就會停止 //

  stopBtn.addEventListener("click", () => {
    clearInterval(startGame);
    stopBtn.style.display = "none";
    playBtn.style.display = "inline-block";
    score.innerText = 0;
  });
});