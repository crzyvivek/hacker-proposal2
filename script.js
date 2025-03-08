const text = "I Love You.
    "Do You Love Me.'";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;

