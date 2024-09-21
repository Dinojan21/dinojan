document.addEventListener("DOMContentLoaded", function() {
    fetch("../templates/header.html") // Chemin mis à jour
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau : ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement de la navigation :", error));
});
