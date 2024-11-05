
const memes = [
    'images/download.png' ,  
    'images/obama.jpeg',  
    'images/suscat.jpeg',  
  ];
  
  function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");
    
    
    const maxWidth = container.offsetWidth - noButton.offsetWidth;
    const maxHeight = container.offsetHeight - noButton.offsetHeight;
  
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
  
    
    const offsetX = Math.floor(Math.random() * 50) - 25; 
    const offsetY = Math.floor(Math.random() * 50) - 25; 
  
    
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.min(Math.max(randomX + offsetX, 0), maxWidth)}px`;
    noButton.style.top = `${Math.min(Math.max(randomY + offsetY, 0), maxHeight)}px`;
  }
  
  
  document.getElementById("noButton").addEventListener("mouseover", moveNoButton);
  
  
  function showSurprise() {
    
    for (let i = 0; i < 100; i++) {
      createConfetti();
    }
  
    
    const memeModal = document.getElementById("memeModal");
    const memeImage = document.getElementById("memeImage");
  
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    memeImage.src = randomMeme;
    memeModal.style.display = "block";
  }
  
  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
  
    const confettiContainer = document.getElementById("confetti-container");
    confettiContainer.appendChild(confetti);
  
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    const randomAnimationDelay = Math.random() * 3;
    const randomRotation = Math.floor(Math.random() * 360);
  
    confetti.style.left = `${randomLeft}px`;
    confetti.style.animationDelay = `${randomAnimationDelay}s`;
    confetti.style.transform = `rotate(${randomRotation}deg)`;
  
    
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
  
  function closeModal() {
    document.getElementById("memeModal").style.display = "none";
  }
  