document.addEventListener('DOMContentLoaded', function() {
    const animatedTextElement = document.getElementById('animated-text');
    const cursorElement = document.getElementById('typing-cursor');
    
    const textToAnimate = "While the world races to make AI more agentic, we're focused on what matters – making the founder unreasonably agentic.";
    const typingSpeed = 50; // Milliseconds per character
    const initialDelay = 500; // Milliseconds before animation starts
    const pauseDelay = 350; // Extra delay for impactful pauses (e.g., around em dash)

    if (!animatedTextElement || !cursorElement) {
        console.error("Required elements for typing animation not found.");
        return;
    }

    cursorElement.style.display = 'none'; // Hide cursor initially

    setTimeout(() => {
        cursorElement.style.display = 'inline-block'; // Show cursor when animation starts
        typeText(0);
    }, initialDelay);

    function typeText(charIndex) {
        if (charIndex < textToAnimate.length) {
            animatedTextElement.textContent += textToAnimate.charAt(charIndex);
            
            let nextCharDelay = typingSpeed;
            // Check for characters that should trigger a pause
            // Pause after "matters " (before the em dash)
            if (textToAnimate.substring(charIndex, charIndex + 2) === "s ") { // Check for "s" followed by space before em dash
                 if (textToAnimate.charAt(charIndex+2) === '–'){
                    nextCharDelay = pauseDelay;
                 }
            }
            // Pause after "– " (the em dash and space after it)
            else if (textToAnimate.substring(charIndex, charIndex + 2) === "– ") {
                nextCharDelay = pauseDelay;
            }

            setTimeout(() => typeText(charIndex + 1), nextCharDelay);
        } else {
            // Animation finished
            // To keep cursor blinking at the end:
             cursorElement.style.display = 'inline-block'; 
            // To stop blinking and hide cursor:
            // cursorElement.style.animation = 'none'; 
            // cursorElement.style.backgroundColor = 'transparent'; 
        }
    }
});
