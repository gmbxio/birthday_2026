document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.getElementById('envelope-wrapper');

  // 1. OPEN ENVELOPE LOGIC
  if (wrapper) {
      wrapper.addEventListener('click', function() {
          // Adds the 'open' class to trigger CSS animations
          wrapper.classList.add('open');
          
          // Wait for animation, then navigate to Page 1
          setTimeout(() => {
              window.location.href = 'assets/pages/page1.html';
          }, 1800);
      });
  }

  // 2. BACKGROUND HEARTS (FOR ALL PAGES)
  if (document.body) {
      setInterval(createHeart, 1000);
  }
});

//NAVIGATION 
function checkCustomPassword() {
  const passwordInput = document.getElementById('passwordInput').value;
  const errorMsg = document.getElementById('errorMessage');
  const lockScreen = document.getElementById('lock-screen');
  const birthdayContent = document.getElementById('protected-content');
  
  // Set your secret password here
  const secret = "iloveeeyouuusquishy"; 

  if (passwordInput.toLowerCase() === secret) {
      // Switch views
      lockScreen.style.display = 'none';
      birthdayContent.style.display = 'block';
      
      // Celebrate with your existing heart function
      if (typeof createHeart === "function") {
          for(let i=0; i<15; i++) {
              setTimeout(createHeart, i * 150);
          }
      }
  } else {
      // Show error message and shake the input if you want
      errorMsg.style.display = 'block';
      document.getElementById('passwordInput').value = ""; // Clear input
  }
}

function goBack() {
  window.history.back();
}

// FLOATING HEARTS
function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = ['💖', '💗', '🌸', '✨', '❤️'][Math.floor(Math.random() * 5)];
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-5vh';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heart.style.opacity = '0.6';
  heart.style.pointerEvents = 'none';
  heart.style.transition = 'transform 6s linear, opacity 6s';
  heart.style.zIndex = '999';
  
  document.body.appendChild(heart);

  setTimeout(() => {
      heart.style.transform = 'translateY(-110vh) rotate(360deg)';
      heart.style.opacity = '0';
  }, 100);

  setTimeout(() => heart.remove(), 6000);
}