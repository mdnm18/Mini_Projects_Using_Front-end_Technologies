// Eye follow mouse movement
document.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eyes-left, .eyes-right");
  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const rad = Math.atan2(e.pageX - x, e.pageY - y);
    const rot = rad * (180 / Math.PI) * -1 + 180;
    eye.style.transform = `rotate(${rot}deg)`;
  });
});

// Sparkle effect on mouse move
function createSparkle(e) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  document.body.appendChild(sparkle);

  sparkle.style.left = e.pageX - 5 + "px";
  sparkle.style.top = e.pageY - 5 + "px";

  sparkle.addEventListener("animationend", () => {
    sparkle.remove();
  });
}

document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.8) {
    createSparkle(e);
  }
});

// Interactive expressions
const face = document.getElementById("circle");
let taps = 0;

face.addEventListener("click", () => {
  taps++;
  if (taps > 3) {
    face.style.backgroundColor = "#ff6b6b";
    setTimeout(() => {
      face.style.backgroundColor = "#c47500";
      taps = 0;
    }, 500);
  }
});
