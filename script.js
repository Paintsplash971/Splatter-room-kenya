document.addEventListener("click", function (e) {
  // Create a new div element for the splatter
  const splatter = document.createElement("div");
  splatter.className = "click-splatter";

  // Randomize size (40–100px)
  const size = Math.floor(Math.random() * 60) + 40;

  // Random rotation
  const rotation = Math.floor(Math.random() * 360);

  // Random color
  const colors = ['#ff4f5a', '#ff8a00', '#ffc107', '#32cd32', '#00bcd4', '#9c27b0'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  // Apply styles directly
  splatter.style.width = size + "px";
  splatter.style.height = size + "px";
  splatter.style.backgroundColor = color;
  splatter.style.position = "absolute";
  splatter.style.left = (e.pageX - size / 2) + "px";
  splatter.style.top = (e.pageY - size / 2) + "px";
  splatter.style.borderRadius = "50%";
  splatter.style.transform = "rotate(" + rotation + "deg)";
  splatter.style.pointerEvents = "none";
  splatter.style.opacity = "0";
  splatter.style.animation = "splatter-pop 0.3s ease-out forwards";
  splatter.style.zIndex = "999";

  // Add the splatter to the document
  document.body.appendChild(splatter);

  // Remove the splatter after 2 seconds
  setTimeout(function () {
    splatter.remove();
  }, 2000);
});