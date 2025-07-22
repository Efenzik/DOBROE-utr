function showImage() {
  document.getElementById("showImageBtn").style.display = "none";
  document.getElementById("hiddenImage").style.display = "block";

  const audio = document.getElementById("myAudio");
  audio.volume = 0.05;
  audio.play();

  startEmojiRain();
}

function startEmojiRain() {
  const container = document.getElementById("emojiRain");
  const emojis = ["🐳", "💋", "👅", "🛐", "🔞", "😳", "🥵", "😈"];
  setInterval(() => {
    const numberOfEmojis = Math.floor(Math.random() * 10) + 20;

    for (let i = 0; i < numberOfEmojis; i++) {
      const emoji = document.createElement("div");
      emoji.classList.add("emoji");
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.fontSize = Math.random() * 20 + 20 + "px";
      emoji.style.animationDuration = Math.random() * 2 + 2 + "s";

      container.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, 5000);
    }
  }, 500);
}
