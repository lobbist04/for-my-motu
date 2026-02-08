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
    // 1. Start Fireworks/Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // 2. Hide the Bubu/Dudu animation smoothly
    document.querySelector('.main-stage').style.opacity = '0';
    document.getElementById('dialogue-box').style.opacity = '0';

    // 3. Show the Letter on the SAME page (Music keeps playing!)
    setTimeout(() => {
        document.querySelector('.main-stage').classList.add('hidden');
        document.getElementById('final-letter-overlay').classList.remove('hidden');
        showEmotionalLetter();
    }, 1500);
}

function showEmotionalLetter() {
    const title = "Dearest Jyoti (Motu), ❤️";
    const body = "I wrote this code because words sometimes fail to describe how much you mean to me. You are the perfect logic in my chaotic world. Every 'Yes' from you is a successful build in my life. I promise to be the one who fixes your bugs, shares your snacks, and loves you forever.";
    
    document.getElementById('letter-title').innerText = title;
    document.getElementById('letter-body').innerText = body;
}
