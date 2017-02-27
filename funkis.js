
genGraph("test.dot");

function genNewGraph (dotFile){
    document.getElementsByTagName('body')[0].removeChild(document.getElementById('tempis'));
    $( document ).ready(function() {
      genGraph(dotFile);
  })
}

function genGraph(dotFile){
  //Parse the .dot file and add the generated html code (which includes the svg element).
  d3.text(dotFile, function(text){
    var	svgText = Viz(text, "svg");
    var tempDiv = document.createElement('div');
    tempDiv.id  = 'tempis';



    document.getElementsByTagName('body')[0].appendChild(tempDiv);

    //Add the highlighting effect
    $("#tempis").graphviz({
        svg: svgText,
    		ready: function() {



            var x = d3.selectAll('.node');
            x.on("contextmenu", d3.contextMenu(menu)); //Add contextmenu to all nodes and eges.
            //Add zooming to non-mobile devices.


            if (!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
                var svgGraph = document.getElementsByTagName('svg')[0];
                svgPanZoom(svgGraph, {
                 panEnabled: true
                , controlIconsEnabled: false
                , zoomEnabled: true
                , dblClickZoomEnabled: false
                , mouseWheelZoomEnabled: true
                , preventMouseEventsDefault: false
                , zoomScaleSensitivity: 0.2
                , minZoom: 1
                , maxZoom: 10
                , fit: true
                , contain: true
                , center: true
                , refreshRate: 'auto'
                , beforeZoom: function(){}
                , onZoom: function(){}
                , beforePan: function(){}
                , onPan: function(){}
                , eventsListenerElement: null
                });
            }

    				var gv = this
            $(window).click(function(e) {
                var allNodes = $(".node");
                var searchis = $("#honke");
                if   (!allNodes.is(e.target) && allNodes.has(e.target).length === 0)  // if the target of the click isn't the container...
                    if (!searchis.is(e.target) && searchis.has(e.target).length === 0) {
                    gv.highlight()
                      // ... nor a descendant of the container
                    
                }
            })

    				gv.nodes().click(function () {
    						var $set = $()
    						$set.push(this)
    						$set = $set.add(gv.linkedFrom(this, true))
    						$set = $set.add(gv.linkedTo(this, true))
    						gv.highlight($set, true)
    						gv.bringToFront($set)
    				})
    				$(document).keydown(function (evt) {
    						if (evt.keyCode == 27)
    								gv.highlight()
    				})


  					var button = document.getElementById("searchButt")
  					button.onclick = function() {
                    
    				  var tag =  document.getElementById("tags").value;
    					var taggedCourses = tagMap[tag]
    					if (taggedCourses !== undefined){
                        console.log("hej")
    						var $nodisar = $()
    						for (i = 0; i < taggedCourses.length; i++){
    							$nodisar.push($(".node").filter(function(){ return $(this).attr('data-name') == taggedCourses[i] }));
    						}
    						gv.highlight($nodisar, true)
    				  }
    				  else{
    					  var $emptySet = $(searchButt) //Fulhack
    					  gv.highlight($emptySet, true)
    				  }
    			  }
         }
     })
})
}

//function labelToCode (label){
//}
var labelCodeMap = {
"logik" : "DAT060"
}

//function hideItem(){
//	$("#graph").graphviz({
//			svg: svgText,
//			ready: function() {
//					var gv = this
//				}
//			})
//	};

	//var theNode = d3.selectAll(".node")
	//								.filter(function(d) { return d.className == itemName });
	//d3.selectAll(".node").style("opacity","0");
	//theNode.style("opacity","1");



//Add listeners to nodes----------------------------------------------------------
//setTimeout(function addListeners(){
// $(document).ready(function(){
//   var x = d3.selectAll('.node');
//   console.log(x);
//   x.on("contextmenu", d3.contextMenu(menu)); //Add contextmenu to all nodes and eges.
//
// var svgGraph = document.getElementsByTagName('svg')[0];
// var SelectedGraph = d3.select(svgGraph);
//
// //Add shadows to nodes------------------------------------------------------------
// // // filters go in defs element
// // var defs = SelectedGraph.append("defs");
// //
// // // create filter with id #drop-shadow
// // // height=130% so that the shadow is not clipped
// // var filter = defs.append("filter")
// //     .attr("id", "drop-shadow")
// //     .attr("height", "150%");
// //
// // // SourceAlpha refers to opacity of graphic that this filter will be applied to
// // // convolve that with a Gaussian with standard deviation 3 and store result
// // // in blur
// // filter.append("feGaussianBlur")
// //     .attr("in", "SourceAlpha")
// //     .attr("stdDeviation", 4)
// //     .attr("result", "blur");
// //
// // // translate output of Gaussian blur to the right and downwards with 2px
// // // store result in offsetBlur
// // filter.append("feOffset")
// //     .attr("in", "blur")
// //     .attr("dx", 1)
// //     .attr("dy", 1)
// //     .attr("result", "offsetBlur");
// //
// // // overlay original SourceGraphic over translated blurred opacity by using
// // // feMerge filter. Order of specifying inputs is important!
// // var feMerge = filter.append("feMerge");
// //
// // feMerge.append("feMergeNode")
// //     .attr("in", "offsetBlur")
// // feMerge.append("feMergeNode")
// //     .attr("in", "SourceGraphic");
// //
// //
// // // for each rendered node, apply #drop-shadow filter
// // SelectedGraph.selectAll(".node").style("filter", "url(#drop-shadow)");
//
// //Remove title of graphobject. This avoids having "%3" showing up while hovering.
// d3.select("#graph0").select("title").remove();
// });
//}, 5000);
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
			var courseName =$(elm).attr('data-name');
			console.log('You have clicked the second item!');
			console.log('The data for this circle is: ' + portMap[courseName]);
			window.open(portMap[courseName]);
		}
	}
]




var portlink = "https://student.portal.chalmers.se/sv/chalmersstudier/programinformation/Sidor/SokProgramutbudet.aspx?course_id="
var engLink  = "https://student.portal.chalmers.se/en/chalmersstudies/programme-information/Pages/SearchProgram.aspx?course_id="
var portMap = {
		'haskell': portlink + "24698&parsergrp=2",
		'diskmat': portlink + "24696&parsergrp=2",
		'digodat': portlink + "24923&parsergrp=2",
		'linalg': portlink + "24655&parsergrp=2",
		'oop': portlink + "24926&parsergrp=2",
		'analys': portlink + "24301&parsergrp=2",
		'datakom': portlink + "25127&parsergrp=2",
		'mop': portlink + "25607&parsergrp=2",

		'dtekproj': portlink + "24919&parsergrp=2",
		'matstat': portlink + "25146&parsergrp=2",
	  'fysik': portlink + "24421&parsergrp=2",
		'dstrukt': portlink + "24543&parsergrp=2",
		'syntes': portlink + "24431&parsergrp=2",
		'matdom': portlink + "24230&parsergrp=2",
		'concurrent': portlink + "24545&parsergrp=2",
		'dst': portlink + "25661&parsergrp=2",
		'el': portlink + "24725&parsergrp=2",


		'tss': portlink + "24693&parsergrp=2",
		'fysik2': portlink + "24278&parsergrp=2",
		'flervar': portlink + "24309&parsergrp=2",
		'regler': portlink + "24323&parsergrp=2",
		'barsaft': portlink + "25114&parsergrp=2",
		'web': portlink + "24637&parsergrp=2",
		'databas': portlink + "24682&parsergrp=2",
		'deskonstr': portlink + "24391&parsergrp=2",
		'elektronik': portlink + "25273&parsergrp=2",
		'kandidat': portlink + "24684&parsergrp=2",



		'logik': engLink + "24599&parsergrp=2",
		'algoritmer': engLink + "24535&parsergrp=2",
		'prolang': engLink + "24933&parsergrp=2",
		'cscience': engLink + "25491&parsergrp=2",
		'advAlg': engLink + "25245&parsergrp=2",
		'discopt': engLink + "24703&parsergrp=2",
		'ml': engLink + "24468&parsergrp=2",
		'ai': engLink + "25601&parsergrp=2",
		'models': engLink + "25603&parsergrp=2",
		'types': engLink + "24302&parsergrp=2",
		'softEng': engLink + "25057&parsergrp=2",
		'compilerConst': engLink + "24405&parsergrp=2",
		'advFunc': engLink + "25054&parsergrp=2",
		'paraFunc': engLink + "25266&parsergrp=2",
		'crypto': engLink + "24316&parsergrp=2",
		'langsecurity': engLink + "24874&parsergrp=2",


		'ftcs': engLink + "24999&parsergrp=2",
		'computerNetworks': engLink + "24231&parsergrp=2",
		'oS': engLink + "24679&parsergrp=2",
		'techwrite': engLink + "24527&parsergrp=2",
		'advDistSys': engLink + "24756&parsergrp=2",
		'networkSecurity': engLink + "25020&parsergrp=2",
		'computerSecurity': engLink + "25022&parsergrp=2",
		'rts': engLink + "25090&parsergrp=2",
		'parallelOrganization': engLink + "24321&parsergrp=2",
		'parallelRTS': engLink + "24303&parsergrp=2",
		'distSys': engLink + "25021&parsergrp=2",
		'energyComp': engLink + "24341&parsergrp=2",
		'routerSwitch': engLink + "24242&parsergrp=2",
		'commEng': engLink + "25226&parsergrp=2",
		'compArch': engLink + "24813&parsergrp=2",
		'XXXXXXXXXXXX': engLink + "YYYYYYYYYYYYYY",
		'XXXXXXXXXXXX': engLink + "YYYYYYYYYYYYYY",
		'XXXXXXXXXXXX': engLink + "YYYYYYYYYYYYYY",

		}


var dnslink ="https://dns.dtek.se/course_id="
