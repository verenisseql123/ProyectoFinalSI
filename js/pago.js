const tarjeta = document.getElementById("tarjeta").value.replace(/\s/g, "");

// Verificar que tenga 16 dígitos
if (!/^\d{16}$/.test(tarjeta)) {
    alert("El número de tarjeta debe tener 16 dígitos.");
    return;
}

// Verificar el número de tarjeta con el algoritmo de Luhn
let suma = 0;
let duplicar = false;

for (let i = tarjeta.length - 1; i >= 0; i--) {
    let digito = parseInt(tarjeta[i]);

    if (duplicar) {
        digito *= 2;

        if (digito > 9) {
            digito -= 9;
        }
    }

    suma += digito;
    duplicar = !duplicar;
}

if (suma % 10 !== 0) {
    alert("El número de tarjeta no es válido.");
    return;
}

alert("Número de tarjeta válido.");