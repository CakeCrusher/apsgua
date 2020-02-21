// alert('helo')
$('.organizacion-item').mouseover(function() {
  $(this).css('cursor','pointer')
  $(this).children('.general-link-title').css('color','rgb(4, 92, 44)')
  $(this).children('.organizacion-image').css('border-color','rgb(4, 92, 44)')
  $(this).children('.organizacion-item-descripcion').css('color','rgb(4, 92, 44)')
})
$('.organizacion-item').mouseout(function() {
  $(this).children('.general-link-title').css('color','rgb(78, 162, 74)')
  $(this).children('.organizacion-image').css('border-color','rgb(78, 162, 74)')
  $(this).children('.organizacion-item-descripcion').css('color','rgb(78, 162, 74)')
})
$('.opp_model-container').mouseover(function() {
  $(this).children('.row').children('.opp_model-image-container').children('.opp_model-image').css({'height':'5vw','width':'5vw','background-size':'6vw'})
  $(this).children('.row').children('.opp_model-title').css('font-size','2.5vw')
  $(this).children('.row').children('.opp_model-description').css('font-size','1.7vw')
})
$('.opp_model-container').mouseout(function() {
  $(this).children('.row').children('.opp_model-image-container').children('.opp_model-image').css({'height':'4vw','width':'4vw','background-size':'5vw'})
  $(this).children('.row').children('.opp_model-title').css('font-size','2vw')
  $(this).children('.row').children('.opp_model-description').css('font-size','1.2vw')
})
$('.orga').mouseover(function () {
  $(this).children('div').children('.org-img').css('border-color','#045c2c');
})
$('.orga').mouseout(function () {
  $(this).children('div').children('.org-img').css('border-color','#4ea24a');
})
