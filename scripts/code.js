
let clicked = false;

$(document).ready(function()
{

    startSite();

    /* Left */

    $(".left").mouseenter(function(){
        $(this).css("flex", "2");
        if(!clicked) {
            $("#leftExpandB").fadeIn(500);
            $(".left .clock-div").children('h2').fadeIn(500);
        }

    })

    $(".left").mouseleave(function(){
        $(this).css("flex", "1");
        $("#leftExpandB").fadeOut(500);
        $(".left .clock-div").children('h2').fadeOut(500);
    })

    $("#leftExpandB").click(function(){

        clicked = true;
       
        setTimeout(() => $(".left").css("flex", "3"), 750);
        setTimeout(() => $(".middle").css("flex", "0"), 750);
        setTimeout(() => $(".right").css("flex", "0"), 750);

        $("#leftExpandB").fadeOut(750);
        setTimeout(() => $("#leftShrinkB").fadeIn(750), 750);
        $(".middle .clock-div").fadeOut(750);
        $(".right .clock-div").fadeOut(750);

        $(".middle").css("pointer-events", "none");
        $(".right").css("pointer-events", "none");

        setTimeout(() => $("#steveleft").fadeIn(750), 2000);
        setTimeout(() => $("#steveright").fadeIn(750), 2000);

    })

    $("#leftShrinkB").click(function(){
        
        clicked = false;

        $(".left").css("flex", "1");
        $(".middle").css("flex", "1");
        $(".right").css("flex", "1");
        setTimeout(() => $("#leftShrinkB").fadeOut(750));
        setTimeout(() => $(".middle .clock-div").fadeIn(750), 750);
        setTimeout(() => $(".right .clock-div").fadeIn(750), 750);    
        
        $(".middle").css("pointer-events", "auto");
        $(".right").css("pointer-events", "auto");

        $("#steveleft").css("display", "none");
        $("#steveright").css("display", "none");
    })

    /* middle */

    $(".middle").mouseenter(function(){
        $(this).css("flex", "2");
        if(!clicked) {
            $("#middleExpandB").fadeIn(500);
            $(".middle .clock-div").children('h2').fadeIn(500);
        }
    })

    $(".middle").mouseleave(function(){
        $(this).css("flex", "1");
        $("#middleExpandB").fadeOut(500);
        $(".middle .clock-div").children('h2').fadeOut(500);
    })


    $("#middleExpandB").click(function(){

        clicked = true;

        setTimeout(() => $(".left").css("flex", "0"), 750);
        setTimeout(() => $(".middle").css("flex", "3"), 750);
        setTimeout(() => $(".right").css("flex", "0"), 750);

        $("#middleExpandB").fadeOut(750);
        setTimeout(() => $("#middleShrinkB").fadeIn(750), 750);
        $(".left .clock-div").fadeOut(750);
        $(".right .clock-div").fadeOut(750);

        $(".left").css("pointer-events", "none");
        $(".right").css("pointer-events", "none");

        setTimeout(() => $("#meanleft").fadeIn(750), 2000);
        setTimeout(() => $("#meanright").fadeIn(750), 2000);


    })

    $("#middleShrinkB").click(function(){

        clicked = false;

        $(".left").css("flex", "1");
        $(".middle").css("flex", "1");
        $(".right").css("flex", "1");
        setTimeout(() => $("#middleShrinkB").fadeOut(750));
        setTimeout(() => $(".left .clock-div").fadeIn(750), 750);
        setTimeout(() => $(".right .clock-div").fadeIn(750), 750);

        $(".right").css("pointer-events", "auto");
        $(".left").css("pointer-events", "auto");

        $("#meanleft").css("display", "none");
        $("#meanright").css("display", "none");
        
    })

    /* right */
    
    $(".right").mouseenter(function(){
        $(this).css("flex", "2");
        if(!clicked) {
            $("#rightExpandB").fadeIn(500);
            $(".right .clock-div").children('h2').fadeIn(500);
        }
    })


    $(".right").mouseleave(function(){
        $(this).css("flex", "1");
        $("#rightExpandB").fadeOut(500);
        $(".right .clock-div").children('h2').fadeOut(500);
    })

    $("#rightExpandB").click(function(){

        clicked = true;

        setTimeout(() => $(".left").css("flex", "0"), 750);
        setTimeout(() => $(".middle").css("flex", "0"), 750);
        setTimeout(() => $(".right").css("flex", "3"), 750);

        $("#rightExpandB").fadeOut(750);
        setTimeout(() => $("#rightShrinkB").fadeIn(750), 750);
        $(".middle .clock-div").fadeOut(750);
        $(".left .clock-div").fadeOut(750);

        $(".middle").css("pointer-events", "none");
        $(".left").css("pointer-events", "none");



        setTimeout(() => $("#goldleft").fadeIn(750), 2000);
        setTimeout(() => $("#goldright").fadeIn(750), 2000);
    })

    $("#rightShrinkB").click(function(){

        clicked = false;

        $(".left").css("flex", "1");
        $(".middle").css("flex", "1");
        $(".right").css("flex", "1"); 
        setTimeout(() => $("#rightShrinkB").fadeOut(750));
        setTimeout(() => $(".middle .clock-div").fadeIn(750), 750);
        setTimeout(() => $(".left .clock-div").fadeIn(750), 750);

        $(".middle").css("pointer-events", "auto");
        $(".left").css("pointer-events", "auto");

        $("#goldleft").css("display", "none");
        $("#goldright").css("display", "none");
    })

    function startSite() {
        setTimeout(() => $(".lds-hourglass").fadeOut(1000), 2000);
        setTimeout(() => $("#loadingtext").fadeOut(1000), 2000);
        setTimeout(() => $("#loadingimage").fadeOut(1000), 2000);

       
        setTimeout(() => $(".flex-container").css("flex-direction", "row").css("align-items", "unset"), 3000);
        setTimeout(() => $(".clock-div").css("display", "flex"), 3000);

        setTimeout(() => $(".left").fadeIn(1000, "linear"), 3000);
        setTimeout(() => $(".middle").fadeIn(1000, "linear"), 3000);
        setTimeout(() => $(".right").fadeIn(1000, "linear"), 3000);
        setTimeout(() => $(".header").fadeIn(1000),  4500);
        setTimeout(() => $(".musicbuttons .roundB").fadeIn(1000), 4500);

        setTimeout(() => $(".left").css("transition", "all 0.75s ease-in-out"), 4000);
        setTimeout(() => $(".middle").css("transition", "all 0.75s ease-in-out"), 4000);
        setTimeout(() => $(".right").css("transition", "all 0.75s ease-in-out"), 4000);

        setTimeout(() => $(".middle").css("pointer-events", "auto"), 4000);
        setTimeout(() => $(".left").css("pointer-events", "auto"), 4000);
        setTimeout(() => $(".right").css("pointer-events", "auto"), 4000);      
    }

/* innerright */
    $(".innerright #t1").mouseenter(function() {
        $("#steve").attr("src", "images/watch1glass.png"); 
    })
    $(".innerright #t1").mouseleave(function() {
            $("#steve").attr("src", "images/watch1.png");
    })

    $(".innerright #t2").mouseenter(function() {
        $("#steve").attr("src", "images/watch1button.png"); 
    })
    $(".innerright #t2").mouseleave(function() {
            $("#steve").attr("src", "images/watch1.png");
    })

    $(".innerright #t3").mouseenter(function() {
        $("#steve").attr("src", "images/watch1case.png"); 
    })
    $(".innerright #t3").mouseleave(function() {
            $("#steve").attr("src", "images/watch1.png");
    })

  /*   innerleft */
    $(".innerleft #t1").mouseenter(function() {
        $("#steve").attr("src", "images/watch1radar.png"); 
    })

    $(".innerleft #t1").mouseleave(function() {
        $("#steve").attr("src", "images/watch1.png");
    })

    $(".innerleft #t2").mouseenter(function() {
        $("#steve").attr("src", "images/watch1band.png"); 
    })
    $(".innerleft #t2").mouseleave(function() {
        $("#steve").attr("src", "images/watch1.png");
    })

    $(".innerleft #t3").mouseenter(function() {
        $("#steve").attr("src", "images/watch1lumos.png"); 
    })
    $(".innerleft #t3").mouseleave(function() {
        $("#steve").attr("src", "images/watch1.png");
    })
})











