const text = "🚨 WARNING! 🚨";
    const text = "Your system is under attack!";
       const text = "hacker has breached your heart's firewall.";
       const text =" 🖥️ Running command: 'Proceed to next step...'";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;

