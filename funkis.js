

//Parse the .dot file and add the generated html code (which includes the svg element).
drawDot =  d3.text("kursgraf.dot", function(text){
	var	svgText = Viz(text, "svg");

	//document.body.innerHTML += Viz(text, "svg");

//Add the highlighting effect
$(document).ready(function(){
								$("#graph").graphviz({
										svg: svgText,
										ready: function() {
												var gv = this
												gv.nodes().click(function () {
														var $set = $()
														$set.push(this)
														$set = $set.add(gv.linkedFrom(this, true))
														$set = $set.add(gv.linkedTo(this, true))
														gv.highlight($set, true)
														gv.bringToFront($set)
												})
												$(document).keydown(function (evt) {
														if (evt.keyCode == 27) {
																gv.highlight()
														}
												})
										}
								});
						});
});


//Add listeners to nodes----------------------------------------------------------
setTimeout(function addListeners(){









  var x = d3.selectAll('.node');
  console.log(x);
  x.on("contextmenu", d3.contextMenu(menu)); //Add contextmenu to all nodes and eges.

var svgGraph = document.getElementsByTagName('svg')[0];
var SelectedGraph = d3.select(svgGraph);



//Add shadows to nodes------------------------------------------------------------

// filters go in defs element
var defs = SelectedGraph.append("defs");

// create filter with id #drop-shadow
// height=130% so that the shadow is not clipped
var filter = defs.append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "150%");

// SourceAlpha refers to opacity of graphic that this filter will be applied to
// convolve that with a Gaussian with standard deviation 3 and store result
// in blur
filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 4)
    .attr("result", "blur");

// translate output of Gaussian blur to the right and downwards with 2px
// store result in offsetBlur
filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 1)
    .attr("dy", 1)
    .attr("result", "offsetBlur");

// overlay original SourceGraphic over translated blurred opacity by using
// feMerge filter. Order of specifying inputs is important!
var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
    .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");


// for each rendered node, apply #drop-shadow filter
SelectedGraph.selectAll(".node").style("filter", "url(#drop-shadow)");


//Remove title of graphobject. This avoids having "%3" showing up while hovering.
d3.select("#graph0").select("title").remove();




}, 5000);






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
			var courseName =$(elm).attr('data-name');
			//console.log($(elm).attr('data-name'));
			console.log('The data for this circle is: ' + courseName);
			window.open(dnslink + courseName + "/Kursutveckling");

		}
	},
	{
		title: 'Kursrelationer',
		action: function(elm, d, i) {
			var courseName =$(elm).attr('data-name');
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
