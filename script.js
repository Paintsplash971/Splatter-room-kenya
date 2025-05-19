import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

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

  // Remove the splatter after 2 seconds
  setTimeout(function () {
    splatter.remove();
  }, 2000);
});