//----=Animation-----//
$(document).ready(function () {
  $('#background').addClass('animar')
  $('#cronometro, img, #seta-pato').addClass('aparecer')
  $('#principal').addClass('texto')
})

function local() {
  $('#local').css('display', 'block')
  $('#mapa').css('display', 'block')
}
setInterval(local, 2000)

//-----Contador-----//
function cronometro() {
  let cro = document.getElementById('contador')
  var agora = new Date()
  var min = agora.getMinutes()
  min = 60 - min
  var hora = agora.getHours()
  hora = 24 - hora
  var dia = agora.getDate()
  dia = 41 - dia
  cro.innerHTML = `${dia} dias ${hora} horas e ${min} minutos`
  if (dia == 0) {
    hora = 19 - hora
  }
  if (hora == 0) {
    min = 30 - min
  }
  if (min == 0) {
    cro.innerHTML = 'Começou !!!'
  }
}

intervalTimer = setInterval(cronometro, 1000)
window.onload = intervalTimer
