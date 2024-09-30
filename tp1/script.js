function chooseCharacter(character) {
    alert("Vous avez choisi : " + character);
    // Transitionner vers le jeu avec le personnage sélectionné
    window.location.href = "game.html?character=" + character;
}
