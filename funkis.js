var menu = [
	{
		title: 'Kursutveckling',
		action: function(elm, d, i) {
			var courseName = $(elm)[0].childNodes[0].textContent;
			console.log('Item #1 clicked!');
			console.log('The data for this circle is: ' + courseName);

		}
	},
	{
		title: 'Kursplan',
		action: function(elm, d, i) {
			var courseName = $(elm)[0].childNodes[0].textContent;
			console.log('You have clicked the second item!');
			console.log('The data for this circle is: ' + map[courseName]);
			window.open(map[courseName]);
		}
	}
]


var x = d3.selectAll('g');
x.on("contextmenu", d3.contextMenu(menu)); //Add contextmenu to all nodes and eges.
var p =document.getElementById("graph0");
d3.select(p).on("contextmenu", ""); //Remove contextMenu menu feuture from master element.

//d3.selectAll('g').on("contextmenu", d3.contextMenu(menu));
// var p =document.getElementById("node1").childNodes[0];
// d3.select(p).on("contextmenu", d3.contextMenu(menu));
// $("g").click(function(evt) {
// 	var e = evt.target;
//
//
//
// if ($(this).attr("id")  != "graph0") {
// alert("hello");
// 	 var offset = $( this ).offset();
// 	// var sth = (this).getBoundingClientRect();
// 	//alert("current x: " + offset.left + "current y: " + offset.top);
// 	// var bbox = (this).getBBox();
// 	// middleX = bbox.x + (bbox.width / 2),
// 	// middleY = bbox.y + (bbox.height / 2);
// 	// var dim = e.getBoundingClientRect();
//     	//var dim = e.getBoundingClientRect();
//     	//var x = evt.clientX - dim.left;
//     	//var y = evt.clientY - dim.top;
//     	//alert("x: "+evt.cx+" y:"+evt.clientY );
//        //alert($(this).attr("id"));
// 	//$(this).text("snabelpabel");
// 	//myFunction();
// //var elem = document.getElementById("myDropdown");
//
//
// // $('.dropdown').css('position', 'absolute'); // = evt.clientX ;
//  $('.dropdown').css('top', offset.top);
//  $('.dropdown').css('left', offset.left);
// var courseName = $(this)[0].childNodes[0].textContent;
// console.log($(this)[0].childNodes[0].textContent);
// //console.log($(this)[0].childNodes[3].textContent);
// //console.log((document.getElementById("node18")).childNodes[3]);
// var link = document.getElementById("myDropdown");
//
// $('.dropdown').css('top', offset.top);
// $('.dropdown').css('left', offset.left);
// link.style.display = 'block'
//
//
// if (link.classList.visibility == "hidden"){
// 	link.classList.toggle("show");
// 	var elem = document.getElementById("minknapp");
// 	elem.style.visibility = "hidden";
// }
//
// document.getElementById("mylink1").setAttribute("href", "/Kursutveckling/" + courseName + ".html");
//
//
// document.getElementById("mylink2").setAttribute("href", map[courseName]);
//
// }
// });




var linkPre ="https://student.portal.chalmers.se/sv/chalmersstudier/minkursinformation/Sidor/SokKurs.aspx?course_id="
var map= {
	  'fysik': linkPre + "24421&parsergrp=3",
	  'el': linkPre + "24725&parsergrp=3",
	  'map_name_3': "hej2",
	  'map_name_4':"hej3"
	  }
