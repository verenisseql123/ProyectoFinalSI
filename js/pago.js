document.addEventListener('DOMContentLoaded', () => {
  const formPago = document.getElementById('form-pago');
  const inputCVV = document.getElementById('cvv');

  if (inputCVV) {
    // 1. Bloquea caracteres que no sean números mientras el usuario escribe
    inputCVV.addEventListener('input', function () {
      this.value = this.value.replace(/\D/g, '');
    });
  }

  if (formPago) {
    // 2. Valida al presionar el botón "Confirmar pago"
    formPago.addEventListener('submit', function (e) {
      const cvvVal = inputCVV.value.trim();
      const regexCVV = /^[0-9]{3,4}$/;

      if (!regexCVV.test(cvvVal)) {
        e.preventDefault(); // Evita que se envíe el formulario
        alert('Por favor, ingresa un CVV válido de 3 o 4 dígitos numéricos.');
        inputCVV.focus();
      } else {
        alert('¡Formulario procesado correctamente!');
      }
    });
  }
});