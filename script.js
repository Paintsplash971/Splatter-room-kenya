import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Initialize Supabase
const supabaseUrl = 'https://ffmdplorzhcbjqxqwwwc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmbWRwbG9yemhjYmpxeHF3d3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODY0MTksImV4cCI6MjA2MzI2MjQxOX0.KrAzfWuITsZi7xK4snCERBkV1txhky2UI9ou9CaZ348';
const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase client initialized");

// Update booking count
async function updateBookingCount() {
  const { count, error } = await supabase
    .from('bookings')
    .select('*', { count: 'exact', head: true });

  const countEl = document.getElementById('booking-count');
  if (error) {
    countEl.textContent = "Unable to load booking count.";
    console.error(error);
  } else {
    countEl.textContent = `${count} people have splattered with us`;
  }
}

updateBookingCount();

// Handle booking form
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

// Handle click splatters
document.addEventListener("click", function (e) {
  const splatter = document.createElement("div");
  splatter.className = "click-splatter";

  const size = Math.floor(Math.random() * 60) + 40;
  const rotation = Math.floor(Math.random() * 360);
  const colors = ['#ff4f5a', '#ff8a00', '#ffc107', '#32cd32', '#00bcd4', '#9c27b0'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  splatter.style.width = `${size}px`;
  splatter.style.height = `${size}px`;
  splatter.style.backgroundColor = color;
  splatter.style.position = "absolute";
  splatter.style.left = `${e.pageX - size / 2}px`;
  splatter.style.top = `${e.pageY - size / 2}px`;
  splatter.style.borderRadius = "50%";
  splatter.style.transform = `rotate(${rotation}deg)`;
  splatter.style.pointerEvents = "none";
  splatter.style.opacity = "0";
  splatter.style.animation = "splatter-pop 0.3s ease-out forwards";
  splatter.style.zIndex = "999";

  document.body.appendChild(splatter);
  setTimeout(() => splatter.remove(), 2000);
});

// Swiper setup
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: { el: '.swiper-pagination' },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

// Floating dots
function createFloatingDots() {
  const container = document.getElementById("float-container");
  if (!container) return;

  const colors = ['#ff4f5a', '#ff8a00', '#ffc107', '#32cd32', '#00bcd4', '#9c27b0'];

  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div");
    const size = Math.random() * 20 + 10;

    dot.className = "float-dot";
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.bottom = `-${Math.random() * 100}px`;
    dot.style.position = "absolute";
    dot.style.animation = "floatUp 12s linear infinite";
    dot.style.borderRadius = "50%";
    dot.style.opacity = 0.3;
    dot.style.pointerEvents = "none";

    container.appendChild(dot);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  createFloatingDots();
  const funButton = document.getElementById("fun-button");
  if (funButton) {
    funButton.addEventListener("click", splashPaint);
  }
});

function splashPaint() {
  const splash = document.createElement("div");
  const size = Math.floor(Math.random() * 100) + 40;
  const rotation = Math.floor(Math.random() * 360);
  const colors = ["#ff4f5a", "#ffa500", "#32cd32", "#00bcd4", "#9c27b0", "#ff69b4"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  splash.style.width = `${size}px`;
  splash.style.height = `${size}px`;
  splash.style.backgroundColor = color;
  splash.style.position = "absolute";
  splash.style.borderRadius = "50%";
  splash.style.left = `${Math.random() * window.innerWidth}px`;
  splash.style.top = `${Math.random() * window.innerHeight}px`;
  splash.style.transform = `rotate(${rotation}deg)`;
  splash.style.zIndex = 9999;
  splash.style.opacity = 0;
  splash.style.animation = "splash-pop 0.5s ease-out forwards";

  document.body.appendChild(splash);
  setTimeout(() => splash.remove(), 1500);
}
//Wait for DOM to be ready, then attach listener
document.addEventListener("DOMContentLoaded", () => {
  const funBtn = document.getElementById("fun-button");
  if (funBtn) {
    funBtn.addEventListener("click", splashPaint);
  } 
})

}
function toggleMenu() {
  const menu = document.getElementById('mobile-nav');
  menu.classList.toggle('show');
}