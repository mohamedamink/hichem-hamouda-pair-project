function showPartOne() {

  $("#comment_now").click(function() {
      var fname_input = $('#fname').val(); //get the first name
      var lname_input = $('#lname').val(); //get the last name
      var input = $('#myText').val(); //get the input comment 
              var $text1=$('<div></div>'); //create new div


   var d = new Date(); //create the format date YYYY/MM/DD

    var month = d.getMonth()+1;
    var day = d.getDate();

    var output = d.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;


              $text1.text('@'+fname_input + ' ' +lname_input+' : '+input + ', '+ output); 

    $text1.appendTo(".defaultDisplay"); //append the first and the last name and the comment to the div tag


  });
}

showPartOne();



$('area').click(function() {
    // get the contents of the link that was clicked
    var linkText = $(this)[0].title;
 var destinations = [
 {destination : "Egypt"  ,image:"https://images5.alphacoders.com/322/thumb-1920-322720.jpg",desc: 'Description: Explore Egypt holidays and discover the best time and places to visit. | Egypt welcomes you with its mighty Nile and magnificent monuments',price:"Price & Vaccation plan: 1000 $, The land of pharaohs, Red Sea and Sinai, Nile River Valley and Sharm El Sheikh."}
,{destination : "Thailand"   ,image:"https://c4.wallpaperflare.com/wallpaper/994/664/866/5bd3448d454ef-wallpaper-preview.jpg",desc: 'Description: Thailand is best sights and local secrets from travel experts you can trust.Friendly and food-obsessed, hedonistic and historic, cultured and curious',price:"Price & Vaccation plan: 1000 $, Arrival in Bangkok airport and transfer to Pattaya by road, Coral Island tour, Leisure day, Evening dinner cruise on the Chao Praya river, Half day Temple, Departure day "}
,{destination : "Peru"   ,image:"https://www.machupicchu.org/wp-content/uploads/top-destinations-machu-picchu.jpg",desc: 'Description: country of traditions, modern country, unique country. Come and have some unique experiences!',price:"Price & Vaccation plan: 1200 $, Sacred Valley, Lima Region, Lima, Arequipa."}
,{destination : "Italy"      ,image:"https://happyairtravel.com/wp-content/uploads/2019/10/Why-You-Should-Visit-Italy.jpg",desc: 'Rome. Just hearing the name conjures up some of the most famous landmarks in the world',price: "Price & Vaccation plan: 1400 $, Venice, Milan, Lake Como + Florence – Venice 3 nights, Milan 1 night, Lake Como 2 nights, Florence 2 nights"}
,{destination : "Brazil" ,image:"https://www.bookmundi.com/files/Destination-Images/Brazil/When-To-Visit-Brazil.jpg",desc: 'Brazil is a fantastic country. Enjoy discovering cities, sights and the best of Brazilian culture in an unforgettable trip',price: "Price & Vaccation plan: 1100 $ Rio de Janeiro and Buenos Aires 6 nights "}
,{destination : "China"      ,image:"https://www.chinalocaltours.com/wp-content/uploads/Colorful-Nightlife-in-China.jpg",desc: 'Explore China holidays and discover the best time and places to visit. | China. ... all but essential travel to mainland China due to an outbreak of the coronavirus.',price: "Price & Vaccation plan: 1200 $ Day 1-3: Shanghai is the perfect place to begin your trip, Day 4-5: Fly north to the nation’s capital, Beijing. Spend a day checking out Tiananmen Square, the Forbidden City"}
,{destination : "England"    ,image:"https://www.justraveling.com/wp-content/uploads/2017/11/visit-england-2.jpg",desc: 'Discover everything you need to know about visiting England, Scotland, Wales ... trivia and travel inspiration – its all you need to imagine a true taste of Britain.',price: "Price & Vaccation plan: 1500 $ You might visit two cities that you find interesting—London and Edinburgh or Glasgow are popular combinations—or plan a short city break with some adventure at the beach or in a national park. "}
,{destination :"France"  ,image:"https://orchardsnearme.com/wp-content/uploads/2019/05/reasons-to-visit-france-vineyards-orchards-near-me.jpg",desc: 'Of course, France is wine capital is a must-visit for food and wine connoisseurs – but dont worry if thats not your thing. With historical monuments',price: "Price & Vaccation plan: 1500 $, Eiffel Tower: Yes, this is at the top of the list for most travelers, The Louvre: This is where you can lay your own eyes on one of the art world is most memorable pairs of eyes—the Mona Lisa. "}
,{destination : "USA"    ,image:"https://www.aitkenspenceholidays.lk/wp-content/uploads/2016/07/usa-and-canada-header-mobile.jpg",desc: 'Visit USA brings together the best ideas, offers, travel guides, holiday brochures to ensure you have the best USA holiday. Visit and enjoy American landmarks',price: "Price & Vaccation plan: 1700 $, New York City: Known for its diverse cultural scene, the Big Apple boasts so many things to do that it puts most of its U.S. San Francisco: culture has been affected by diverse ethnic groups and many social movements"}
,{destination : "India"  ,image:"https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2016/03/top-places-in-india-that-every-tourist-must-visit.png",desc: 'Get the best Information about India Tourism. Get travel guides and plan your trip to India with places to visit, sightseeing, hotels, and reviews by other travellers',price: "Price & Vaccation plan: 1100$, Super Saver Kashmir, 6 Days / 5 Nights "}
,{destination : "Tunisia"    ,image:"https://english.aawsat.com/sites/default/files/styles/article_img_top/public/2018/10/05/sidi_bou_said_one_of_tunisias_main_resorts._getty_images.jpg?itok=9a_kbl4y",desc: 'Explore Tunisia holidays and discover the best time and places to visit',price: "Price & Vaccation plan: 1000 $, Musium of Bardo, El Madina Tunis, Dinner in sidi bou said one of tunisias main resorts"}
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
