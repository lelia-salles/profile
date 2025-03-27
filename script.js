document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded Successfully!");

    const menu = document.getElementById("menu");

    if (menu) {
        const banner = document.createElement("div");
        banner.className = "banner"; 
        banner.innerHTML = `<img src="img/lelia linkedin.png" alt="Banner Portfolio Lelia Salles">`;

        menu.insertAdjacentElement("beforebegin", banner);

        const aboutImageContainer = document.getElementById("about-image");

        if (aboutImageContainer) {
            const img = document.createElement("img");
            img.id = "babout-image"; 
            img.src = "img/Lelia Portfolio.png";
            img.alt = "Colagem Portfolio Lelia Salles";
            aboutImageContainer.appendChild(img);
        } else {
            console.warn("Elemento '#about-image' não encontrado!");
        }
    } else {
        console.warn("Elemento '#menu' não encontrado!");
    }
});
