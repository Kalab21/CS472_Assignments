// States:
var started = false;
var wall = false;

var loseFunc = () => {
    if (started){
        $(".boundary").addClass("youlost");
        $("h2").text("Sorry you lost :(");
        started = false;
        wall = true;
    }
}

$(document).ready(() => {
    $("#congratzImg").hide();

    $("#start").click((e) => {
        console.log("started");
        started = true;
        wall = false;
        $(".boundary").removeClass("youlost");
        $("h2").text("Game On!");
        $("#congratzImg").hide();
    });

    $("#maze").mouseleave(() => {
        loseFunc();
    });

    $(".boundary").mouseover(() => {
        loseFunc();
    });

    $("#end").mouseover(() => {
        if (started && !wall){
            $("h2").text("You won :)");
            $("#congratzImg").show();
            started = false;
        }
    });
});