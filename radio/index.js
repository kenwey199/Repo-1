let radios = document.querySelector('genderS');

for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        alert(radios[i].value);

        break;
    }
}