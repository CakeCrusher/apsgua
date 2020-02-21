// $("#load").show();
// $("#main").hide();
// $(window).on('load', function() {
   $("#load").hide();
//    $("#main").show();
// });
//popover
$(function() {
  $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
  trigger: 'focus'
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//*popover
function widthToLength(itemFrom, attributeFrom) {
  var widthSize=parseInt($(itemFrom).css(attributeFrom))*(100/($(window).width()))
  widthSize=widthSize.toString()+'vw'
  return widthSize
}
var theatreCount=1;//Current Theatre Positions
// $('.theatre-left').css('height', widthToLength('.theatre-left','width'))//Sets Height of Arrows
// $('.theatre-right').css('height', widthToLength('.theatre-right','width'))//Sets Height of Arrows
// var theatreHeight=(parseFloat(widthToLength('.theatre-frames-container','width'))/4).toString()+'vw'//Determines Theatre Height
// $('.theatre-frames-container').css('height',theatreHeight)//Determines Theatre Height
// var arrowPos=((parseFloat(widthToLength('.theatre-frames-container','height'))/2)-1).toString()+'vw'//Vertical Position
// $('.theatre-left').css('margin-top', arrowPos)//Vertical Position
// $('.theatre-right').css('margin-top', arrowPos)//Vertical Position
var percentOfWidth=parseFloat(widthToLength('.theatre-frames-container','width'))/110//Divides Width by Percentage
function percentTimes(mult) {//Multiplies by Width Percentage
  return (percentOfWidth*mult.toString())+'vw'//Multiplies by Width Percentage
}//Multiplies by Width Percentage
var sa={}

function makeTheatreItem(item,hw,posx,posy,zind,bgsize) {//Simplifies Item CSS Properties
  var attr=['width','height','transform','z-index','background-size']//All CSS Properties Getting Connections
  var attrChange=[percentTimes(hw),percentTimes(hw),'translate('+percentTimes(posx)+','+percentTimes(posy)+')',zind,percentTimes(bgsize)]//User Input
  for (var i = 0; i < attr.length; i++) {//Connects CSS Properties With User Input
    $(item).css(attr[i],attrChange[i])//Connects CSS Properties With User Input
  }//Connects CSS Properties With User Input
}//Simplifies Item CSS Properties
function displayTheatre() {//Contains All Information For Theatre CSS
  if ($('.theatre-item').length<3) {//If Too Short To Reach Middle
    $('.theatre-display').children('.theatre-frame-link').html($('.theatre-item:nth-child('+(theatreCount+1)+')').attr('name'))//Makes Item Description
    $('.theatre-display').children('.theatre-frame-link').attr('href',$('.theatre-item:nth-child('+(theatreCount+1)+')').attr('url'))//Makes Item Description
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount)+')', 17.5, 15, 3.5, 1, 17.5)//Ensurse it Reaches Middle
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount+1)+')', 25, 37.5, 0, 2, 25)//Ensurse it Reaches Middle
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount+2)+')', 17.5, 67.5, 3.5, 1, 17.5)//Ensurse it Reaches Middle
  }//If Too Short To Reach Middle
  else {//If Long Enough to REach Middle
    $('.theatre-display').children('.theatre-frame-link').html($('.theatre-item:nth-child('+(theatreCount+2)+')').attr('name'))//Makes Item Description
    $('.theatre-display').children('.theatre-frame-link').attr('href',$('.theatre-item:nth-child('+(theatreCount+2)+')').attr('url'))//Makes Item Description
    $('.theatre-item:nth-child('+(theatreCount-2)+')').css('display','none')//Hide and Prepare
    $('.theatre-item:nth-child('+(theatreCount-1)+')').css('display','block')//Hide and Prepare
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount-1)+')', 7.5, 5, 8.75, 0, 7.5)//Pairs Current Item With CSS
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount)+')', 7.5, 5, 8.75, 1, 7.5)//Pairs Current Item With CSS
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount+1)+')', 17.5, 15, 3.5, 2, 17.5)//Pairs Current Item With CSS
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount+2)+')', 25, 37.5, 0, 3, 25)//Pairs Current Item With CSS
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount+3)+')', 17.5, 67.5, 3.5, 2, 17.5)//Pairs Current Item With CSS
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount+4)+')', 7.5, 87.5, 8.75, 1, 7.5)//Pairs Current Item With CSS
    makeTheatreItem('.theatre-item:nth-child('+(theatreCount+5)+')', 7.5, 87.5, 8.75, 0, 7.5)//Pairs Current Item With CSS
    $('.theatre-item:nth-child('+(theatreCount+5)+')').css('display','block')//Hide and Prepare
    $('.theatre-item:nth-child('+(theatreCount+6)+')').css('display','none')//Hide and Prepare
  }//If Long Enough to REach Middle
}//Contains All Information For Theatre CSS
$('.theatre-right').click(function () {
  if ($('.theatre-item:nth-child('+$('.theatre-item').length+')').attr('name')==$('.theatre-display').children('.theatre-frame-link').html()) {//Nothing Happens if End of Items
  }//Nothing Happens if End of Items
  else {//Makes Item Transition
    theatreCount++//Makes Item Transition
    displayTheatre()//Makes Item Transition
  }//Makes Item Transition
})
$('.theatre-left').click(function () {
  if ($('.theatre-item:nth-child(1)').attr('name')==$('.theatre-display').children('.theatre-frame-link').html()) {//Nothing Happens if End of Items
  }//Nothing Happens if End of Items
  else {//Makes Item Trans//Simplifies Item CSS Propertiesition
    theatreCount--//Makes Item Transition
    displayTheatre()//Makes Item Transition
  }//Makes Item Transition
})
function replaceLastChar(item,replacement) {
  var str= item
  var start= str.slice(str[0], str.length-5)
  var mid= replacement
  var end= str.slice(str.length-4, str.length)
  return start+mid+end
}
displayTheatre()//Prepares Theatre on Start
for (var i = 1; i <= $('.theatre-item').length; i++) {//Prepares Theatre on Start
  $('.theatre-item:nth-child('+i+')').css('background-image',"url('"+($('.theatre-item:nth-child('+i+')').attr('image'))+"')")//Prepares Theatre on Start
}//Prepares Theatre on Start
// $('.nav-image').css('height',widthToLength('.nav-image','width'))//squares image
$('.nav-item').mouseover(function() {
  $(this).css('text-decoration','none')
  $(this).children('.nav-text').css({'text-decoration': 'none', 'cursor': 'pointer', 'color': 'rgb(2,88,43)', 'text-align': 'center'})
  var srcImg=$(this).children('.nav-image-container').children('.nav-image').attr('src')
  $(this).children('.nav-image-container').children('.nav-image').attr('src', replaceLastChar(srcImg,'H'))
})
$('.nav-item').mouseout(function() {
  $(this).children('.nav-text').css({'text-decoration': 'none', 'color': 'rgb(75,167,71)', 'text-align': 'center'})
  var srcImg=$(this).children('.nav-image-container').children('.nav-image').attr('src')
  $(this).children('.nav-image-container').children('.nav-image').attr('src', replaceLastChar(srcImg,'D'))
})
$('.nav-item-c').mouseover(function() {
  $(this).css('text-decoration','none')
  $(this).children('.nav-text').css({'text-decoration': 'none', 'cursor': 'pointer', 'color': 'rgb(90, 90, 90)', 'text-align': 'center'})
  var srcImg=$(this).children('.nav-image-container').children('.nav-image').attr('src')
  $(this).children('.nav-image-container').children('.nav-image').attr('src', replaceLastChar(srcImg,'G'))
})
$('.nav-item-c').mouseout(function() {
  $(this).children('.nav-text').css({'text-decoration': 'none', 'color': 'rgb(140, 140, 140)', 'text-align': 'center'})
  var srcImg=$(this).children('.nav-image-container').children('.nav-image').attr('src')
  $(this).children('.nav-image-container').children('.nav-image').attr('src', replaceLastChar(srcImg,'C'))
})
$('.donar-c').mouseover(function() {
  $(this).css('text-decoration','none')
  $(this).children('.general-title').css({'text-decoration': 'none', 'cursor': 'pointer', 'color': 'rgb(90, 90, 90)', 'text-align': 'center'})
  var srcImg=$(this).children('.donar-image').attr('src')
  $(this).children('.donar-image').attr('src', replaceLastChar(srcImg,'G'))
})
$('.donar-c').mouseout(function() {
  $(this).children('.general-title').css({'text-decoration': 'none', 'color': 'rgb(140, 140, 140)', 'text-align': 'center'})
  var srcImg=$(this).children('.donar-image').attr('src')
  $(this).children('.donar-image').attr('src', replaceLastChar(srcImg,'C'))
})
$('.nav-brand-item').mouseover(function() {
  $(this).css('text-decoration', 'none')
  $('.nav-brand-text').css({'text-decoration': 'none', 'cursor': 'pointer', 'color': 'rgb(2,88,43)'})
  $('.nav-brand-sub-text').css({'text-decoration': 'none', 'cursor': 'pointer', '-webkit-text-stroke-color': 'rgb(41,122,211,1)','color': 'rgb(41,122,211)'})
  $('.nav-brand-sub-in-text').css({'text-decoration': 'none', 'cursor': 'pointer', '-webkit-text-stroke-color': 'rgb(41,122,211,1)'})
})
$('.nav-brand-item').mouseout(function() {
  $('.nav-brand-text').css({'text-decoration': 'none', 'cursor': 'pointer','color':'rgb(75,167,71)'})
  $('.nav-brand-sub-text').css({'-webkit-text-stroke-color': 'rgb(71,152,241,1)','color': 'rgb(71, 152, 241)'})
  $('.nav-brand-sub-in-text').css({'text-decoration': 'none', 'cursor': 'pointer','-webkit-text-stroke-color': 'rgb(71,152,241,1)'})
})
$('.adps-books-container').css('height', widthToLength('.adps-books-container','width'))
// for (var book in $('.adps-books-image')) {
//   alert(book)
//   book.css({'width':'100%','height':'20vw','background-image': book.attr('image'),'background-color':'lightblue'})
// }
$('#adps_B').css({'background-image': "url('"+$('#adps_B').attr('image')+"')"})
$('#adps_IB').css({'background-image': "url('"+$('#adps_IB').attr('image')+"')"})
$('#adps_AdP').css({'background-image': "url('"+$('#adps_AdP').attr('image')+"')"})
// replaceLastChar($('.adps-books-item').children('#selectArea').children('.adps-books-image').attr('image'),'H')
$('body').ready(function() {
  $('.adps-books-item').mouseenter(function() {
    $(this).css('text-decoration','none')
    $(this).children('.adps-books-title').css({'text-decoration': 'none','color': 'rgb(2,88,43)'})
    $(this).children('.adps-books-image').css({'border-color': 'rgb(2,88,43)','background-image': "url('"+replaceLastChar($(this).children('.adps-books-image').attr('image'),'H')+"')"})
    $(this).children('.adps-books-image').children('.bb_top').animate({top:'28%'})
    $(this).children('.adps-books-image').children('.bb_bot').animate({top:'32%'})
  })
  $('.adps-books-item').mouseleave(function() {
    $(this).children('.adps-books-title').css({'color': 'rgb(75,167,71)'})
    $(this).children('.adps-books-image').css({'border-color': 'rgb(75,167,71)','background-image': "url('"+replaceLastChar($(this).children('.adps-books-image').attr('image'),'D')+"')"})
    $(this).children('.adps-books-image').children('.bb_top').animate({top:'-24%'})
    $(this).children('.adps-books-image').children('.bb_bot').animate({top:'80%'})
  })
})

function runThroughChild(element) {
  var arr=[]
  for (var i = 1; i <= $(element).length; i++) {
    var str=element+':nth-child('+ i +')'
    arr.push(str)
  }
  return arr
}
$('.support-pull').mouseenter(function () {
  $(this).css({'background-color':'rgb(4, 92, 44)','cursor':'pointer','border':'0.5vw solid #004c1c'})
  $('.support-container').css('border-top-color','rgb(4, 92, 44)')
  $('.support-container').css('border-bottom-color','rgb(4, 92, 44)')
})
$('.support-pull').mouseleave(function () {
  $(this).css({'background-color':'rgb(78, 162, 74)','border':'0.5vw solid #3e923a'})
  $('.support-container').css('border-top-color','rgb(78, 162, 74)')
  $('.support-container').css('border-bottom-color','rgb(78, 162, 74)')
})
$('.support-pull').click(function () {
  body=parseInt($('body').css('width'))
  cont=parseInt($('.support-container').css('left'))
  if (Math.floor(body/cont)==1) {
    $('.support-container').css('right','0%')
    $('.support-arrow').css({'transform':'rotate(45deg)','right':'0%','left':'20%'})
  }
  if (Math.floor(body/cont)==2) {
    $('.support-container').css('right','-46%')
    $('.support-arrow').css({'transform':'rotate(225deg)','right':'0%','left':'30%'})
  }
})
// Dropdown Info Nav
$('.propuesta-btn').click(function () {
  if ($(this).parent().children('.propuesta-container').css('height')=='0px') {
    $(this).parent().children('.propuesta-container').css('height','20vw');
    $(this).children('.propuesta-arrow').css({'transform':'rotateZ(225deg)','margin-top':'0.8vw'});
  }
  else{
    $(this).parent().children('.propuesta-container').css('height','0vw')
    $(this).children('.propuesta-arrow').css({'transform':'rotateZ(45deg)','margin-top':'0vw'});
  }
})
var tabs=runThroughChild('.tab')
$('.tab').mouseover(function() {
  for (var i = 0; i < tabs.length; i++) {
    $(tabs[i]).css('width','9%')
  }
  $(this).css('width','61%')
})
$('.tab').mouseout(function() {
  for (var i = 0; i < tabs.length; i++) {
    $(tabs[i]).css('width','22%')
  }
})
// End
// Opportunidades
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





// <div class="newsContainer" style="width: 100%; position: relative;">
//       {% for  i in news %}
//       {% if i.Headline != "NULL" %}
//       <div class= "box">
//         <a target="_blank" rel="noopener noreferrer" class="general-link-title" href= {{ i.Link }}>
//           <p style=" font-size: 2vw; height: 5vw; overflow: hidden;" class="general-link-title">{{ i.Headline }}</p>
//         </a>
//         <hr style="color: rgb(78, 162, 74); background-color: rgb(78, 162, 74); width: 100%">
//         <div class="row" style="margin-left: 0; width: 100%; height: 15vw; overflow: hidden;">
//           <div style="width: 25%; margin-left: 5%">
//             <img src={{ i.Art }} style="width: 90%; margin-left: 5%; border-radius: 1vw;">
//           </div>
//           <div style="font-size: 1.5vw; width: 62.5%; margin-left: 2.5%">
//             <p>&nbsp; &nbsp;{{ i.Hook }}</p>
//           </div>
//         </div>
//         <hr style="color: rgb(78, 162, 74); background-color: rgb(78, 162, 74); width: 100%">
//         <p style="font-size: 1.5vw; font-weight: bold; text-align: right; margin-right: 5%;  height: 5vw; overflow: hidden;">{{i.Provider}}</p>
//       </div>
//       {% endif %}
//       {% endfor %}
//     </div>


// var cou= 5
// for (var i = 1; i<= $('.box').length; i++) {
//   if (i!= 1) {
//     $('.box:nth-child('+(i)+')').css('margin-top', ((i-1)*5).toString()+'vw')
//   }
//   $('.box:nth-child('+(i)+')').css('z-index', cou.toString())
//   cou= cou- 1
// }
$('.box').hover(function () {
  $('.box').css({'width': '60%', 'margin-left': '20%'})
  var curIndex= $(this).index()+1
  var cou= 5
  for (var i= curIndex+1; i<= $('.box').length; i= i+1){
    cou= cou-1
    $('.box:nth-child('+(i)+')').css('z-index', cou.toString())
  }
  for (var i= curIndex-1; i>= 1; i= i-1){
    cou= cou-1
    $('.box:nth-child('+(i)+')').css('z-index', cou.toString())
  }
  // nth-child starts at 1
  // .index() starts at 0
  $(this).css({'z-index': '5', 'width': '70%', 'margin-left': '15%'})

})
// $('.newsContainer').css('height', ($('.box').length*10).toString()+'vw')