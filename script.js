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