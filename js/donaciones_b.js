// alert('hello')
var inputs=[,,]
$('#id_email').mouseover(function () {
  $('#id_email').parent().children('.donacion_label').css('color','rgb(4, 92, 44)')
})
$('#id_email').mouseout(function () {
  $('#id_email').parent().children('.donacion_label').css('color','rgb(78, 162, 74)')
})

$('#id_cardNumber').mouseover(function () {
  $('#id_cardNumber').parent().children('.donacion_label').css('color','rgb(4, 92, 44)')
})
$('#id_cardNumber').mouseout(function () {
  $('#id_cardNumber').parent().children('.donacion_label').css('color','rgb(78, 162, 74)')
})

$('#id_expirationDate').mouseover(function () {
  $('#id_expirationDate').parent().children('.donacion_label').css('color','rgb(4, 92, 44)')
})
$('#id_expirationDate').mouseout(function () {
  $('#id_expirationDate').parent().children('.donacion_label').css('color','rgb(78, 162, 74)')
})

$('#id_expirationDateEx').mouseover(function () {
  $('#id_expirationDateEx').parent().children('.donacion_label').css('color','rgb(4, 92, 44)')
})
$('#id_expirationDateEx').mouseout(function () {
  $('#id_expirationDateEx').parent().children('.donacion_label').css('color','rgb(78, 162, 74)')
})

$('#id_cvc').mouseover(function () {
  $('#id_cvc').parent().children('.donacion_label').css('color','rgb(4, 92, 44)')
})
$('#id_cvc').mouseout(function () {
  $('#id_cvc').parent().children('.donacion_label').css('color','rgb(78, 162, 74)')
})

$('#id_amount').mouseover(function () {
  $('#id_amount').parent().children('.donacion_label').css('color','rgb(4, 92, 44)')
})
$('#id_amount').mouseout(function () {
  $('#id_amount').parent().children('.donacion_label').css('color','rgb(78, 162, 74)')
})
$('.form_submit').html("Donar <span class='dollar'>$</span>"+$('#id_amount').val())
$('#id_amount').keyup(function() {
  $('.form_submit').html("Donar <span class='dollar'>$</span>"+$('#id_amount').val())
})
