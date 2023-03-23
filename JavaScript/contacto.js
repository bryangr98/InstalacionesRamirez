


function enviarMensaje() {
  const nombre = document.getElementById('nombre').value;
  const mensaje = document.getElementById('mensaje').value;
  const telefono = '7352328096'; // Aquí se debe colocar el número de teléfono de WhatsApp
  const mensajeURL = encodeURIComponent(`${nombre} dice: ${mensaje}`);
  window.open(`https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeURL}`, '_blank');
}
