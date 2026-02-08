// Function to create falling roses, stars, and flowers
function startEmojiRain() {
    const container = document.getElementById('rain-container');
    const emojis = ['🌹', '✨', '⭐', '🌸', '🌷'];

    // Reduced frequency to 600ms to prevent lagging on mobile
    setInterval(() => {
        if (document.hidden) return; // Stop generating if she switches apps

        const item = document.createElement('div');
        item.className = 'falling-item';
        item.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Randomize position and speed
        item.style.left = Math.random() * 95 + 'vw'; 
        item.style.fontSize = Math.random() * 15 + 15 + 'px';
        item.style.animationDuration = Math.random() * 2 + 3 + 's'; 
        
        container.appendChild(item);

        // Remove element before it creates lag
        setTimeout(() => {
            item.remove();
        }, 4000);
    }, 600); 
}

// Bubu & Dudu Animation Logic
window.onload = () => {
    // Start the background rain immediately
    startEmojiRain();
    
    const dudu = document.getElementById('dudu');
    const bubu = document.getElementById('bubu');
    const bgm = document.getElementById('bgm');
    const dialogueBox = document.getElementById('dialogue-box');

    // 1. Play music (Triggered by the click on the previous page)
    if (bgm) {
        bgm.play().catch(e => console.log("Music waiting for interaction"));
    }

    // 2. Dudu walks toward Bubu
    setTimeout(() => {
        // Moves Dudu forward smoothly
        dudu.style.transform = "translateX(60px)";
    }, 1500);

    // 3. Dudu Kneels and the Question appears
    setTimeout(() => {
        // Change Dudu to Kneeling position
        dudu.innerHTML = "( >_<) <br> _/ \\_ 🌹";
        // Change Bubu to blushing/happy
        bubu.innerHTML = "(｡♥‿♥｡)";
        
        // Show the buttons and typewriter text
        dialogueBox.classList.remove('hidden');
        dialogueBox.style.opacity = "1";
        
        // Start typing the romantic question
        typeWriter("Jyoti, you are my world's favorite logic error. Will you be my Motu forever?");
    }, 3500);
};

// Typewriter Effect for the Question
function typeWriter(text) {
    let i = 0;
    const target = document.getElementById('typewriter');
    target.innerHTML = ""; // Clear existing text
    
    function play() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(play, 50); // Speed of typing
        }
    }
    play();
}
