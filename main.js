// This file is scaffolding. Rip it out.
const scene = document.getElementById("scene");
let n = 0;
setInterval(() => {
  if (!scene) return;
  scene.textContent = "the phenomenon waits" + ".".repeat((n++ % 4) + 1);
}, 600);
