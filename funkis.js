
graphviz_text =  d3.text("kursgraf.dot", function(text){

	document.body.innerHTML += Viz(text, "svg");
});


setTimeout(function addListeners(){
  var x = d3.selectAll('g');
  console.log(x);
  x.on("mousedown", d3.contextMenu(menu)); //Add contextmenu to all nodes and eges.
  var p =document.getElementById("graph0");
  d3.select(p).on("mousedown", ""); //Remove contextMenu menu feuture from master element.
}, 0);






// $("g").click(function(evt) {
//   //if ($(this).attr("id")  != "graph0") {
//  			alert("hello");
//  		//$("g").on("mousedown",  d3.contextMenu(menu));
//  		//d3.contextMenu(menu);
//  	//}
// });



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
// var courseName = $(this)[0].childNodes[0].textContent;
// console.log($(this)[0].childNodes[0].textContent);
// //console.log($(this)[0].childNodes[3].textContent);
// //console.log((document.getElementById("node18")).childNodes[3]);



var menu = [
	{
		title: 'Kursutveckling',
		action: function(elm, d, i) {
			var courseName = $(elm)[0].childNodes[0].textContent;
			console.log('Item #1 clicked!');
			console.log('The data for this circle is: ' + courseName);
			window.open(dnslink + courseName + "/Kursutveckling");

		}
	},
	{
		title: 'Kursrelationer',
		action: function(elm, d, i) {
			var courseName = $(elm)[0].childNodes[0].textContent;
			console.log('You have clicked the second item!');
			console.log('The data for this circle is: ' + portMap[courseName]);
			window.open(dnslink + courseName + "/Kursrelationer");
		}
	},
	{
		title: 'Kursplan',
		action: function(elm, d, i) {
			var courseName = $(elm)[0].childNodes[0].textContent;
			console.log('You have clicked the second item!');
			console.log('The data for this circle is: ' + portMap[courseName]);
			window.open(portMap[courseName]);
		}
	}
]


var portlink ="https://student.portal.chalmers.se/sv/chalmersstudier/minkursinformation/Sidor/SokKurs.aspx?course_id="
var portMap= {
	  'fysik': portlink + "24421&parsergrp=3",
	  'el': portlink + "24725&parsergrp=3",
	  'map_name_3': "hej2",
	  'map_name_4':"hej3"
		}


var dnslink ="https://dns.dtek.se/course_id="
