document.getElementById('clickButton').onclick = showAlert;
function showAlert() {
    var âge = document.getElementById('âge').value;
    if (âge >= 18) {
        alert('Vous êtes majeur');
    }
    else {
        alert('Vous êtes mineur');
    }
} 