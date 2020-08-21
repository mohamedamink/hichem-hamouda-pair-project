$('area').click(function() {
    // get the contents of the link that was clicked
    var linkText = $(this)[0].title;
console.log ('trah',linkText);
 var destinations = [
 {destination : "Egypt"  ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination : "Thailand"   ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination : "Peru"   ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination : "Italy"      ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination : "Brazil" ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination : "China"      ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination : "England"    ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination :"France"  ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination : "USA"    ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination : "India"  ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
,{destination : "Tunisia"    ,image:"",desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto',price: "12$"}
];

      var currentdest = {destination : ''
    			,image:''
    			,desc: ''
    			,price: 0};

    for(var i=0;i<destinations.length;i++){             
        if(destinations[i].destination ===  linkText){
        	currentdest= destinations[i];
        }         
      }
//window.open("displaydest.html?variable=currentdest");
// replace the contents of the div with the link text
 $('#dest').html(currentdest.destination);
 $('#dest_desc').html(currentdest.desc);
 $("#dest_img").attr("src", currentdest.image);
 $('#dest_price').html(currentdest.price);
 
    // cancel the default action of the link by returning false
    return false;
});

var button=$('<button id="button" onclick="function()">share</button>');
          button.appendTo($body);             
          $('#button').click(function(){
          
          var text;
          var input=$('#myText').val();          
          var $text1=$('<div></div>');
          $text1.text('@'+tweet.user+': '+input+','+ tweet.created_at);
          $text1.appendTo($body);
        

        });     