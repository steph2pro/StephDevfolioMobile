document.querySelectorAll(".toggle-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        const techList = this.closest(".skills__container").querySelector(".tech-list");
        
        if (!techList) return; // sécurité

        techList.classList.toggle("hidden");
        this.textContent = techList.classList.contains("hidden") ? "Voir plus" : "Voir moins";
    });
});



// document.getElementById("toggle-btn").addEventListener("click", function() {
//     var techList = document.getElementById("tech-list");
//     if (techList.classList.contains("hidden")) {
//         techList.classList.remove("hidden");
//         this.textContent = "Voir moins";
//     } else {
//         techList.classList.add("hidden");
//         this.textContent = "Voir plus";
//     }
// });