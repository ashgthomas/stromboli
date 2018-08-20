
//set variable for new date
var d = new Date();

//get the day of week and return that day's special
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("dayOfWeek").innerHTML = days[d.getDay()];
var sDay = days[d.getDay()];
document.getElementById(sDay).style.display = "block";

//write the current year in the footer
document.getElementById("current-year").innerHTML = d.getFullYear();


//animate the scroll on click of a link in the navigation
$(function(){
    $("#navigation").find("a").click(function(e){
        e.preventDefault();
        var area = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(area).offset().top
        }, 600);
    });

});