$("g").click(function(evt) {
if ($(this).attr("id")  != "graph0") {
	var e = evt.target;
    	var dim = e.getBoundingClientRect();
    	var x = evt.clientX - dim.left;
    	var y = evt.clientY - dim.top;
    	alert("x: "+x+" y:"+y);
       alert($(this).attr("id"));  
	//$(this).text("snabelpabel");
	//myFunction();
var elem = document.getElementById("myDropdown");
$('.dropdown').css('position', 'absolute'); // = evt.clientX ;
$('.dropdown').css('top',dim.top-5);
$('.dropdown').css('left',dim.left);
$('.dropdown').css('left',dim.left);
//$elem.style.left = evt.clientY;
	myFunctione() // argument = linkToCoursePage

}
});
function myFunction() {
var popup = document.getElementById('myPopup');
	if (popup.classList.visibility == "hidden"){
	popup.classList.toggle('show');
}
 //window.open('http://www.google.com');

}

function myFunctione() {
    var link = document.getElementById("myDropdown");
	$(document.getElementById("myDropdown")).attr("href", "http://the.new.url");
	link.setAttribute("text", "eeee");
	link.classList.toggle("show");
var elem = document.getElementById("minknapp");
elem.style.visibility = "hidden";
	 //('visibility', hidden);
	
    //document.getElementById("myDropdown").classList.toggle("show");
}   
function f1(){
    document.getElementById("mylink1").setAttribute("href", "xyz.php");
  }

  

