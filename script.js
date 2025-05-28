
const API_URL = "https://script.google.com/macros/s/AKfycbwV1hKaEt40z_HaeZQNXEBAKumIHzvc3DP0XTBkuMSNy-aCj_tF-rC4dOBBONyEsThZ/exec";

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const sn = document.getElementById("sn-register").value.trim();
  const store = document.getElementById("store").value.trim();
  if (!sn || !store) return;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "register", sn, store })
  });
  const text = await res.text();
  document.getElementById("result").innerText = text;
});

document.getElementById("revoke-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const sn = document.getElementById("sn-revoke").value.trim();
  if (!sn) return;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "revoke", sn })
  });
  const text = await res.text();
  document.getElementById("result").innerText = text;
});
