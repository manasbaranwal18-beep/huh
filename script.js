let selectedDate = "";
let selectedPlace = "";

function hideAll() {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
}

function goYes() {
  hideAll();
  document.getElementById("screenDate").classList.add("active");
}

function goNo() {
  hideAll();
  document.getElementById("screenNo").classList.add("active");
}

function pickDate(date) {
  selectedDate = date;
  hideAll();
  document.getElementById("screenPlace").classList.add("active");
}

function customDateNext() {
  const d = document.getElementById("otherDate").value.trim();
  if (!d) return alert("Please enter a date");
  selectedDate = d;
  hideAll();
  document.getElementById("screenPlace").classList.add("active");
}

function submitFinal() {
  const placeInput = document.getElementById("placeInput");
  if (placeInput) selectedPlace = placeInput.value.trim();

  hideAll();
  document.getElementById("screenFinal").classList.add("active");

  const response = `
✨ Date Invite ✨

📅 Date: ${selectedDate || "—"}
📍 Plan: ${selectedPlace || "—"}

Looking forward to this 💖
`;

  document.getElementById("finalResponse").innerText = response;
}

function copyResponse() {
  const text = document.getElementById("finalResponse").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied 💗");
}

function sendWhatsApp() {
  const text = document.getElementById("finalResponse").innerText;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}