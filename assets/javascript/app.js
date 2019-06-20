$(document).ready(function() {


var topics = [
    "skydiving",
    "parasailing",
    "bungee jumping",
    "drag racing",
    "rafting",
    "surfing",
    "hand gliding",
    "skiing",
    "snow boarding",
    "scuba diving",
    "mountain climbing"

]

function renderButtons(){

    $("#buttons_here").empty();
    for (var i = 0; i < topics.length; i++) {

        var buttons = $('<button>');
        buttons.text(topics[i]);
        buttons.attr('data-name',topics[i]);
        buttons.addClass('btn');
        
        
        var div = $('<div>')
        
        div.append(buttons);
        $('#buttons_here').append(div);
        
        var buttons_here = $('#buttons_here');  
        
        }};

renderButtons ();

        $("#submit").on('click', function(event){
            event.preventDefault();
             var userInput = $("#userInput").val();
             topics.push(userInput);
             renderButtons ();
        })



$(document).on('click', '.btn', function(){
    var buttons=$(this).attr("data-name");

function callAPI() {
        var gif = $(this).attr("data-img").val().trim();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            search + "&api_key=SpKxqIkJbChrNLcX83G8ZPC0wBDbrxZqlimit=10";
        
        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function (response) {

            var results = response.data;
            for (var i = 0; i < topics.length; i++) {
                var imgDiv = $("<div>");

                var pTag = $("<p>").text("Rating: " + results[i].rating);

                var adventureImg = $("<img>");

                adventureImg.attr("src", results[i].images.fixed_height.url);

                imgDiv.append(pTag);
                imgDiv.append(adventureImg);

                $("#gifs_here").prepend(imgDiv);


            }


})}})})

// function renderButtons(){
//     buttons_here.empty();

// if (i < topics.length){
    
// for (var i = 0; i < topics.length; i++) {

// var buttons = $('<button>');
// buttons.text(topics[i]);
// buttons.attr('data-name',topics[i]);
// buttons.addClass('btn');


// var div = $('<div>')

// div.append(buttons);
// buttons_here.append(div);

// var buttons_here = $('#buttons_here');  
// }}};

// var image_buttons_here = $('#image_buttons_here');

// $("#image_buttons_here").on("click", callAPI); {

//     

//             var results = response.data;
//             for (var i = 0; i < results.length; i++) {

//                 


//             }
//         });

//     }
// }




