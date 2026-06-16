// The clock bends when you look at it.
const scene = document.getElementById("scene");
let lastGaze = 0;
let observed = false;

document.addEventListener("visibilitychange", () => {
  observed = document.visibilityState === "visible";
  lastGaze = performance.now();
});
window.addEventListener("focus", () => { observed = true; lastGaze = performance.now(); });
window.addEventListener("blur", () => { observed = false; });

function render() {
  if (!scene) return;
  const now = new Date();
  // Tempo bends: time runs slower while observed, sprints when looked away
  const dilation = observed ? 0.6 : 1.4;
  const subjectiveSeconds = (performance.now() / 1000) * dilation;
  const t = new Date(Date.now() + (subjectiveSeconds - performance.now()/1000) * 1000);
  scene.innerHTML = "<div style='font-size:48px;font-family:monospace;'>" +
    t.toTimeString().slice(0, 8) +
    "</div><div style='margin-top:8px;color:#8a8c99;font-size:12px;'>" +
    (observed ? "(slowing — you're watching)" : "(racing — your gaze is gone)") +
    "</div>";
  requestAnimationFrame(render);
}
render();
