document.getElementById("toggle-btn").addEventListener("click", function() {
    var techList = document.getElementById("tech-list");
    if (techList.classList.contains("hidden")) {
        techList.classList.remove("hidden");
        this.textContent = "Voir moins";
    } else {
        techList.classList.add("hidden");
        this.textContent = "Voir plus";
    }
});