function unlock() {
  const pass = document.getElementById("password").value.toLowerCase();
  if (pass === "motu") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("proposal").style.display = "block";
    document.getElementById("bg-music").play();
  } else {
    document.getElementById("error").innerText = "Wrong 😅 Try again Motu 💖";
  }
}
