const signUpButton = document.querySelector(".signup-button");
const imageEffect = document.querySelector('.image-effect');
const thankYouMessage = document.querySelector('.thank-you-message');

const signUpHandler = () => {
    // console.log("SIGN     UP")
    imageEffect.style.opacity = 0.6;
    thankYouMessage.style.display = 'block';
}

signUpButton.addEventListener('click', signUpHandler);