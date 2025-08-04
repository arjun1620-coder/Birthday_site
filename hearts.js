function showSurprise() {
  document.getElementById("surprise").style.display = "block";
  startHearts();
}

function startHearts() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}

const style = document.createElement('style');
style.innerHTML = `
.heart {
  position: fixed;
  font-size: 24px;
  top: -20px;
  z-index: 9999;
  animation: floatDown linear;
}

@keyframes floatDown {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
`;
document.head.appendChild(style);
