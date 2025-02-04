function displayUTCDate() {
  const now = new Date();

  const utcTime = now.toUTCString();

  document.querySelector(".utc-time").innerText = utcTime;
}

displayUTCDate();