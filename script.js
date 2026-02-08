function checkPassword() {
    const val = document.getElementById('passInput').value.toLowerCase();
    if(val === 'jyoti') {
        window.location.href = 'proposal.html';
    } else {
        document.getElementById('error-msg').classList.remove('hidden');
    }
}

function dodge() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function initiateSuccess() {
    // 1. Confetti Explosion
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // 2. Hide everything on the current screen
    document.querySelector('.glass-wrapper').style.opacity = '0';
    
    // 3. Show the letter after a short delay
    setTimeout(() => {
        document.querySelector('.glass-wrapper').classList.add('hidden');
        const letterOverlay = document.getElementById('final-letter-overlay');
        letterOverlay.classList.remove('hidden');
        letterOverlay.style.opacity = '1';
        letterOverlay.style.display = 'flex'; // Ensure it's visible
        
        showEmotionalLetter();
    }, 1000);
}

function showEmotionalLetter() {
    document.getElementById('letter-title').innerText = "Dearest Jyoti (Motu), ❤️";
    document.getElementById('letter-body').innerHTML = "I wrote this code because words sometimes fail to describe how much you mean to me.<br><br>" +
        "You are the perfect logic in my chaotic world. Every 'Yes' from you is a successful build in my life.<br><br>" +
        "I promise to be the one who fixes your bugs, shares your snacks, and loves you forever.";
}
