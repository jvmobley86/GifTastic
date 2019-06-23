

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



    $(document).on('click', '.btn', function () {
        var topics = $(this).attr("data-name");
    

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            topics + "&api_key=SpKxqIkJbChrNLcX83G8ZPC0wBDbrxZq&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET",
            type: "json"

        })
            .then(function (response) {

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var imgDiv = $("<div>");
                    imgDiv.addClass('container');

                    var pTag = $("<p>").text("Rating: " + results[i].rating);

                    var adventureImg = $("<img>");
                    adventureImg.addClass('adventureImg');

                    adventureImg.attr("src", results[i].images.fixed_height.url);
                    adventureImg.attr('data-still', results[i].images.fixed_height_still.url )
                    adventureImg.attr('data-animate', results[i].images.fixed_height.url )
                    adventureImg.attr("data-state", "animate");
                    console.log(adventureImg);

                    imgDiv.append(pTag);
                    imgDiv.append(adventureImg);

                    $("#gifs_here").prepend(imgDiv);
             
               }
               
            })

    },
        
    )


$(document).on("click", ".adventureImg", function () {

    var state = $(this).attr("data-state");
    if (state == "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    } else {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    };
})