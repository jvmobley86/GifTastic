$(document).ready(function () {


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

    function renderButtons() {

        $("#buttons_here").empty();
        for (var i = 0; i < topics.length; i++) {

            var buttons = $('<button>');
            buttons.text(topics[i]);
            buttons.attr('data-name', topics[i]);
            buttons.addClass('btn');

            $('#buttons_here').append(buttons);

            

        }
    };

    renderButtons();

    $("#submit").on('click', function (event) {
        event.preventDefault();
        var userInput = $("#userInput").val();
        topics.push(userInput);
        renderButtons();
    })



    $('#buttons_here').on('click', '.btn', function () {
        var topics = $(this).attr("data-name");
        console.log(topics)
        console.log(queryURL)

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            topics + "&api_key=SpKxqIkJbChrNLcX83G8ZPC0wBDbrxZq";

        $.ajax({
            url: queryURL,
            method: "GET"

        })
            .then(function (response) {
                
                var results = response.data;
                
                for (var i = 0; i < results.length; i++) {
                    var imgDiv = $("<div>");

                    var pTag = $("<p>").text("Rating: " + results[i].rating);

                    var adventureImg = $("<img>");

                    adventureImg.attr("src", results[i].images.fixed_height.url);

                    imgDiv.append(pTag);
                    imgDiv.append(adventureImg);

                    $("#gifs_here").prepend(imgDiv);
                }
            })
    })})