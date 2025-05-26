function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function copyEmail() {

    const email = "ivangabrielromano8@gmail.com";
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);



    const copyMessage = document.getElementById("copyMessage");
    copyMessage.style.display = "inline";
    setTimeout(function () {
        copyMessage.style.display = "none";
    }, 2000);

}

function flipCard(button) {
    const flipContainer = button.closest('.project-details-container').querySelector('.flip-container');
    flipContainer.classList.toggle('flipped');
}

function closeFlip(button) {
    const flipContainer = button.closest('.flip-container');
    flipContainer.classList.remove('flipped');
}

// function toggleAboutText() {
//     const moreText = document.getElementById("more-text");
//     const seeMoreBtn = document.getElementById("see-more-btn");

//     if (moreText.style.display === "none") {
//         moreText.style.display = "inline";
//         seeMoreBtn.textContent = "See Less";
//     } else {
//         moreText.style.display = "none";
//         seeMoreBtn.textContent = "See More";
//     }
// }