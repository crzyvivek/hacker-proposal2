const text = "🚨 WARNING! 🚨\nYour system is under attack!\nA hacker has breached your heart's firewall.\n\n🖥️ Running command: 'Proceed to next step...'";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;

