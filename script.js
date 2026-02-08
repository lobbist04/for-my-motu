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
    // Firework Effect
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
        window.location.href = 'letter.html';
    }, 2000);
}
