$("#submit").on("click", function(event) {
    event.preventDefault();

    var userData = {
        name: $("#name").val(),
        photo: $("#image").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };
    
    $.post("/api/friends", userData, function(data) {  // ERRORING OUT ON THIS LINE
        $("#matchPhoto").join(data.friendImage);
        $("#matchName").text(data.friendName);
        $("#resultsModal").modal('toggle');
    });
    
    // runApp(userData);
    // $(".quiz").empty();
    // $(".quiz").hide();
});

console.log("test")

// function runApp(newUser) {
//     $.post("/api/friends", newUser, function(data) {
//         console.log(data.name)
//     })                 
// };