document.addEventListener("DOMContentLoaded", () => {
  const entryForm = document.getElementById("entry-form");
  const revokeForm = document.getElementById("revoke-form");
  const msgBox = document.getElementById("message");

  entryForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const sn = document.getElementById("sn").value.trim();
    const store = document.getElementById("store").value.trim();
    const receiveTime = document.getElementById("receiveTime").value;

    if (!sn || !store || !receiveTime) return;

    const res = await fetch('https://你的API網址/add', {
      method: 'POST',
      body: JSON.stringify({ sn, store, receiveTime }),
      headers: { 'Content-Type': 'application/json' }
    });

    const result = await res.text();
    msgBox.innerText = result;
  });

  revokeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const sn = document.getElementById("revokeSn").value.trim();
    const revokeTime = document.getElementById("revokeTime").value;

    if (!sn || !revokeTime) return;

    const res = await fetch('https://你的API網址/revoke', {
      method: 'POST',
      body: JSON.stringify({ sn, revokeTime }),
      headers: { 'Content-Type': 'application/json' }
    });

    const result = await res.text();
    msgBox.innerText = result;
  });
});
