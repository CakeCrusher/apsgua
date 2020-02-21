var articles=[]
var inContainer=''

$.getJSON(
  'https://newsapi.org/v2/everything?'+$.param({'q': 'climate+change', 'sources': 'the-huffington-post', 'apiKey': 'cfd58d5639aa4ddc9eeaaf883ab558ef'}),
  function functionName(response) {
    for (var i = 0; i < 3; i++) {
      var link= response.articles[i].url
      var headline= response.articles[i].title
      var hook= response.articles[i].title
      var art= response.articles[i].urlToImage
      var publisher= response.articles[i].source.name
      articles.push({'Link' : link, 'Headline' : headline, 'Hook' : hook, 'Art' : art, 'Publisher' : publisher})
    }
    var cou= 5
    
    for (var i = 0; i < articles.length; i++) {
      var link= articles[i]['Link']
      var headline= articles[i]['Headline']
      var hook= articles[i]['Hook']
      var art= articles[i]['Art']
      var publisher= articles[i]['Publisher']
      inContainer= inContainer+ '<div class= "box" style="margin-top: '+ (i*5).toString()+'vw; z-index: '+ (5-i).toString()+'"><div class="row" style="margin-left: 0; width: 100%; height: 10vw; overflow: hidden;"><div style="width: 28%; margin-left: 2%"><img src="'+ art+'" style="width: 100%; margin-left: 5%; margin-top: 1vw; border-radius: 1vw;"></div><div style="font-size: 1.5vw; width: 63%; margin-left: 2%"><a target="_blank" rel="noopener noreferrer" class="general-link-title" href= "'+ link+'"><p style=" font-size: 1.5vw;" class="general-link-title">'+ headline+'</p></a></div></div><hr style="color: rgb(78, 162, 74); background-color: rgb(78, 162, 74); width: 100%"><p class="provider" style="font-size: 1.5vw; font-weight: bold; text-align: right; margin-right: 5%;  height: 5vw; overflow: hidden;">'+ publisher+'</p></div>'
      cou= cou- 1
    }
    $('.newsContainer').html(inContainer)
    $('.newsContainer').css('height', ((articles.length+1)*10).toString()+'vw')
    $('.box').hover(function () {
      $('.box').css({'width': '60%', 'margin-left': '15%'})
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
        $(this).css({'z-index': '5', 'width': '70%', 'margin-left': '11.25%'})
    })
  }
)


for (var i = 1; i <= $('.newsOps').length; i++) {
  if ($('h1').html()== $('.newsOps:nth-child('+i.toString()+')').attr('provider')) {
    $('.newsOps:nth-child('+i.toString()+')').css('border','1vw solid #045c2c')
  }
  $('.newsOps:nth-child('+i.toString()+')').css({'background-image': 'url("/static/images/' +$('.newsOps:nth-child('+i.toString()+')').attr('image')+ '")', 'background-size': '6vw', 'background-repeat': 'no-repeat', 'background-position': 'center'})
}
$('.newsOps').mouseover(function functionName() {
  $(this).css('border','1vw solid #045c2c')
})
$('.newsOps').mouseout(function functionName() {
  $(this).css('border','1vw solid #4ea24a')
})
var provider= 'the-huffington-post'
$('.newsOps').click(function functionName() {
  articles=[]
  for (var i = 1; i <= $('.newsOps').length; i++) {
    $('.newsOps:nth-of-type('+i.toString()+')').css('border','1vw solid #4ea24a')
  }
  $('h1').html($(this).attr('provider'))
  provider= $(this).attr('provider')
  $.getJSON(
  'https://newsapi.org/v2/everything?'+$.param({'q': 'climate+change', 'sources': provider, 'apiKey': 'cfd58d5639aa4ddc9eeaaf883ab558ef'}),
  function functionName(response) {
    for (var i = 0; i < 3; i++) {
      var link= response.articles[i].url
      var headline= response.articles[i].title
      var hook= response.articles[i].title
      var art= response.articles[i].urlToImage
      var publisher= response.articles[i].source.name
      articles.push({'Link' : link, 'Headline' : headline, 'Hook' : hook, 'Art' : art, 'Publisher' : publisher})
    }
    var cou= 5
    
    for (var i = 0; i < articles.length; i++) {
      var link= articles[i]['Link']
      var headline= articles[i]['Headline']
      var hook= articles[i]['Hook']
      var art= articles[i]['Art']
      var publisher= articles[i]['Publisher']
      inContainer= inContainer+ '<div class= "box" style="margin-top: '+ (i*5).toString()+'vw; z-index: '+ (5-i).toString()+'"><div class="row" style="margin-left: 0; width: 100%; height: 10vw; overflow: hidden;"><div style="width: 28%; margin-left: 2%"><img src="'+ art+'" style="width: 100%; margin-left: 5%; margin-top: 1vw; border-radius: 1vw;"></div><div style="font-size: 1.5vw; width: 63%; margin-left: 2%"><a target="_blank" rel="noopener noreferrer" class="general-link-title" href= "'+ link+'"><p style=" font-size: 1.5vw;" class="general-link-title">'+ headline+'</p></a></div></div><hr style="color: rgb(78, 162, 74); background-color: rgb(78, 162, 74); width: 100%"><p class="provider" style="font-size: 1.5vw; font-weight: bold; text-align: right; margin-right: 5%;  height: 5vw; overflow: hidden;">'+ publisher+'</p></div>'
      cou= cou- 1
    }
    $('.newsContainer').html(inContainer)
    $('.newsContainer').css('height', ((articles.length+1)*10).toString()+'vw')
    $('.box').hover(function () {
      $('.box').css({'width': '60%', 'margin-left': '15%'})
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
        $(this).css({'z-index': '5', 'width': '70%', 'margin-left': '11.25%'})
        })
      }
    )
})
setInterval(function function_name(argument) {
  for (var i = 1; i <= $('.newsOps').length; i++) {
    if ($('.newsOps:nth-of-type('+i.toString()+')').attr('providerName')== articles[1]['Publisher']) {
      $('.newsOps:nth-of-type('+i.toString()+')').css('border','1vw solid #045c2c')
    }
  }
},100)

$.getJSON(
  'https://www.googleapis.com/youtube/v3/playlistItems?'+$.param({'part': 'contentDetails', 'playlistId': 'PLivjPDlt6ApTjurXykShuUqp7LQcj9s8s', 'key': 'AIzaSyBu2Ycr7HFgOtkT8pVOsgDLtr4b8Y9jk4k'}),
  function functionName(response) {
    var link= 'https://www.youtube.com/embed/'
    link= link+ response.items[0].contentDetails.videoId
    $('.mediaVid').attr('src', link)
  }
)