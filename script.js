import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
// Display total booking count from Supabase
async function updateBookingCount() {
  const { count, error } = await supabase
    .from('bookings')
    .select('*', { count: 'exact', head: true });

  const countEl = document.getElementById('booking-count');
  if (error) {
    countEl.textContent = "Unable to load booking count.";
    console.error(error);
  } else {
    countEl.textContent = count} "people have splattered with us"
  }

updateBookingCount();
const supabaseUrl = 'https://ffmdplorzhcbjqxqwwwc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmbWRwbG9yemhjYmpxeHF3d3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODY0MTksImV4cCI6MjA2MzI2MjQxOX0.KrAzfWuITsZi7xK4snCERBkV1txhky2UI9ou9CaZ348';
const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase client initialized");
document.getElementById('booking-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const date = form.date.value;
  const time = form.time.value;
  const selectedPackage = form.package.value;

  const { data, error } = await supabase.from('bookings').insert([
    { name, email, date, time, package: selectedPackage }
  ]);
if (error) {
  alert('There was an error submitting your booking.');
  console.error(error);
} else {
  document.getElementById('booking-form').reset();
  document.getElementById('booking-success').style.display = 'block';
  confetti({
  particleCount: 150,
  spread: 60,
  origin: { y: 0.6 }
});
}
});
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

  // Remove the splatter after 0.5 seconds
  setTimeout(function () {
    splatter.remove();
  }, 2000);
});
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: { el: '.swiper-pagination' },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
function createFloatingDots() {
  console.log("Running floating dots script...");

  const container = document.getElementById("float-container");
  if (!container) return;

  const colors = ['#ff4f5a', '#ff8a00', '#ffc107', '#32cd32', '#00bcd4', '#9c27b0'];

  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div");
    const size = Math.random() * 20 + 10;

    dot.className = "float-dot";
    dot.style.width = '${size}px';
    dot.style.height = '${size}px';
    dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    dot.style.left = '${Math.random() * 100}vw';
    dot.style.bottom = -'${Math.random() * 100}px';
    dot.style.position = "absolute";
    dot.style.animation = "floatUp 12s linear infinite";
    dot.style.borderRadius = "50%";
    dot.style.opacity = 0.3;
    dot.style.pointerEvents = "none";

    container.appendChild(dot);
  }
}

window.addEventListener("DOMContentLoaded", createFloatingDots);