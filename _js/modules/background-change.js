$(".change-color").mousemove(function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    $(".change-color").css("background", "radial-gradient(circle, rgb("+x/3+","+y/3+","+(x-y)/2+") 0%, rgb("+x/2+","+y/2+","+(x-y)/3+") 100%)")
});