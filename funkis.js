
genGraph("kursgraf.dot");

	//document.body.innerHTML += Viz(text, "svg");

//Add the highlighting effect
//$(document).ready(function(){
//addGraphis();
//function addGraphis(){

function genGraph(dotFile) {
//Parse the .dot file and add the generated html code (which includes the svg element).
    drawDot =  d3.text(dotFile, function(text){
	    var	svgText = Viz(text, "svg");


        $("#graph").graphviz({
	        svg: svgText,
	        ready: function() {
                // BEGIN
                var x = d3.selectAll('.node');
                x.on("contextmenu", d3.contextMenu(menu)); //Add contextmenu to all nodes and eges.
                var svgGraph = document.getElementsByTagName('svg')[0];
                var SelectedGraph = d3.select(svgGraph);

                //Remove title of graphobject. This avoids having "%3" showing up while hovering.
                d3.select("#graph0").select("title").remove();

                // END

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
			        var button = document.getElementById("searchButt");
			        button.onclick = function() {
			        var tag =  document.getElementById("tags").value;
			        var taggedCourses = tagMap[tag]
			        if (taggedCourses !== undefined){
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
		        };
            }
        })

    });

			    //};
		    //console.log(i)
									    // tempElems.push($(this).attr('data-name') == taggedCourses[i])
								    //return tempElems});
									    //return $(this).attr('data-name') == taggedCourses[i] }); //d3.selectAll(".node")
				    //console.log(elems)
				    //function checkName(elems)
				    //function findNodesByTag(tag){
				    //	var taggedCourses = tagMap[tag]
					    //console.log(taggedCourses)
			    //		return taggedCourses;
					    //var corrLabels    = labelCodeMap
		    //
				    //$nodisar.push(elems)
				    //$nodisar = $nodisar.add(gv.linkedFrom(elems, true))
				    //$nodisar = $nodisar.add(gv.linkedTo(elems, true))
				    //var nodisar = d3.selectAll(".node")
				    //nodisar = nodisar.add(gv.linkedFrom(this,true))
				    //gv.highlight($nodis, true)
	    //	}


}

var tagMap = {
	"värden" : ["haskell"],
	"typer" : ["haskell"],
	"funktioner" : ["haskell", "diskmat", "analys"],
	"datastrukturer" : ["haskell", "dstrukt", "algoritmer"],
	"listor" : ["haskell", "dstrukt"],
	"tupler" : ["haskell"],
	"användardefinierade typer" : ["haskell"],
	"top-down programdesign" : ["haskell"],
	"rekursion" : ["haskell", "diskmat", "algoritmer"],
	"rekursiva typer" : ["haskell"],
	"tidskomplexitet" : ["haskell"],
	"input-output" : ["haskell"],
	"moduler" : ["haskell"],
	"abstraktion" : ["haskell"],
	"verifiering" : ["haskell", "mop"],
	"högre ordningens funktioner" : ["haskell", "advFunc"],
	"data-centrisk programmering" : ["haskell"],
	"logik" : ["diskmat"],
	"mängdlära" : ["diskmat"],
	"relationer" : ["diskmat"],
	"bevis" : ["diskmat", "matdom"],
	"motsägelsebevis" : ["diskmat"],
	"heltalsaritmetik" : ["diskmat"],
	"kombinatorik" : ["diskmat", "dstrukt"],
	"grafteori" : ["diskmat", "dstrukt"],
	"boolesk algebra" : ["diskmat", "digodat"],
	"kombinatoriska nät" : ["digodat", "syntes"],
	"sekvensnät" : ["digodat", "syntes"],
	"alu" : ["digodat", "syntes"],
	"dataväg" : ["digodat", "syntes", "dst"],
	"styrenhet" : ["digodat", "syntes"],
	"minne" : ["digodat", "syntes", "dst"],
	"in- och ut- enheter" : ["digodat", "syntes", "dst"],
	"instruktionsuppsättning" : ["digodat", "syntes"],
	"maskinspråk" : ["digodat"],
	"assembler" : ["digodat", "mop", "dst"],
	"digitalteknik" : ["digodat", "syntes", "dst"],
	"matriser" : ["linalg"],
	"vektorer" : ["linalg"],
	"linjära avbildningar" : ["linalg"],
	"ekvationssystem" : ["linalg"],
	"egenvektorer" : ["linalg"],
	"egenvärden" : ["linalg", "matdom"],
	"baser" : ["linalg"],
	"dimensioner" : ["linalg", "flervar"],
	"relationsmatriser" : ["linalg"],
	"matlab" : ["linalg", "flervar"],
	"objektorienterad" : ["oop"],
	"objekt" : ["oop"],
	"klass" : ["oop"],
	"datainkapsling" : ["oop"],
	"konstruktorer" : ["oop"],
	"metoder" : ["oop"],
	"instansvariabler" : ["oop"],
	"klassvariabler" : ["oop"],
	"standardbibliotek" : ["oop"],
	"kodningsstandard" : ["oop"],
	"namnsättning" : ["oop"],
	"kommentering" : ["oop"],
	"derivata" : ["analys"],
	"intergral" : ["analys"],
	"linjärisering" : ["analys", "regler"],
	"optimalitetskriterier" : ["analys"],
	"polynom" : ["analys"],
	"potensserier" : ["analys", "matdom"],
	"envariabelanalys" : ["analys"],
	"kretskoppling" : ["datakom"],
	"paketkoppling" : ["datakom"],
	"datornätverk" : ["datakom"],
	"distribuerad" : ["datakom"],
	"applikationsprotokoll" : ["datakom"],
	"www" : ["datakom"],
	"dns" : ["datakom"],
	"sockets" : ["datakom"],
	"datagram" : ["datakom"],
	"dataöverföring" : ["datakom"],
	"tcp" : ["datakom"],
	"udp" : ["datakom"],
	"stockningskontroll" : ["datakom"],
	"internet" : ["datakom"],
	"protokoll" : ["datakom", "dtekproj"],
	"adressering" : ["datakom"],
	"ipv4" : ["datakom"],
	"ipv6" : ["datakom"],
	"arp" : ["datakom"],
	"icmp" : ["datakom"],
	"dv" : ["datakom"],
	"ls" : ["datakom"],
	"autonoma system" : ["datakom"],
	"rip" : ["datakom"],
	"ospf" : ["datakom"],
	"bgp" : ["datakom"],
	"lan" : ["datakom"],
	"mac" : ["datakom"],
	"ethernet" : ["datakom"],
	"switching" : ["datakom"],
	"vlan" : ["datakom"],
	"trådlös" : ["datakom"],
	"brandvägg" : ["datakom"],
	"paket" : ["datakom"],
	"wlan" : ["datakom"],
	"c" : ["mop"],
	"test" : ["mop"],
	"systemprogrammering" : ["mop"],
	"händelser" : ["mop"],
	"avbrott" : ["mop"],
	"räknarkretsar" : ["mop"],
	"seriekommunikation" : ["mop"],
	"tidsdelningssystem" : ["mop"],
	"periferikretsar" : ["mop"],
	"mikrodatorsystem" : ["dtekproj"],
	"mikroprocessor" : ["dtekproj"],
	"periferienheter" : ["dtekproj"],
	"projektarbete" : ["dtekproj"],
	"versionshantering" : ["dtekproj"],
	"rapport" : ["dtekproj"],
	"dokumentation" : ["dtekproj"],
	"sannolikhetslära" : ["matstat"],
	"markovkedjor" : ["matstat"],
	"stokastisk" : ["matstat"],
	"väntevärde" : ["matstat"],
	"varians" : ["matstat"],
	"korrelation" : ["matstat"],
	"stora talens lag" : ["matstat"],
	"centrala gränsvärdessatsen" : ["matstat"],
	"statistik" : ["matstat"],
	"skattningar" : ["matstat"],
	"konfidensintervall" : ["matstat"],
	"kombinationer" : ["matstat", "diskmat"],
	"permutationer" : ["matstat", "diskmat"],
	"modeller" : ["matstat"],
	"abstrakta datatyper" : ["dstrukt"],
	"komplexitetsanalys" : ["dstrukt"],
	"träd" : ["dstrukt"],
	"fält" : ["dstrukt"],
	"hashtabeller" : ["dstrukt"],
	"köer" : ["dstrukt"],
	"prioritetsköer" : ["dstrukt"],
	"lexika" : ["dstrukt"],
	"grafer" : ["dstrukt"],
	"iteratorer" : ["dstrukt"],
	"sortering" : ["dstrukt"],
	"mekanik" : ["fysik"],
	"newton" : ["fysik"],
	"rörelser" : ["fysik"],
	"komponenterna" : ["fysik"],
	"partiklar" : ["fysik"],
	"värmelära" : ["fysik"],
	"termodynamik" : ["fysik", "fysik2"],
	"processer" : ["fysik", "fysik2"],
	"vågfysik" : ["fysik"],
	"vågor" : ["fysik"],
	"interferens" : ["fysik", "concurrent"],
	"diffraktion" : ["fysik"],
	"arbete" : ["fysik"],
	"energi" : ["fysik"],
	"rotationsrörelse" : ["fysik"],
	"rörelsemängd" : ["fysik"],
	"rörelsemängdsmoment" : ["fysik"],
	"oscillationer" : ["fysik"],
	"superposition" : ["fysik"],
	"differentialekvationer" : ["fysik"],
	"transienta förlopp" : ["fysik", "el", "regler"],
	"asic" : ["syntes"],
	"fpga" : ["syntes"],
	"vhdl" : ["syntes"],
	"digitala kretsar" : ["syntes"],
	"hårdvarukonstruktion" : ["syntes"],
	"processor" : ["syntes", "dst"],
	"tillståndsmaskin" : ["syntes"],
	"dsl" : ["matdom", "advFunc"],
	"domänspecifikt språk" : ["matdom"],
	"funktionell programmering" : ["matdom", "advFunc"],
	"programkalkyl" : ["matdom"],
	"kategoriteori" : ["matdom", "advFunc"],
	"medelvärdessatser" : ["matdom"],
	"taylors formel" : ["matdom"],
	"haskell" : ["matdom", "haskell", "advFunc"],
	"laplace" : ["matdom", "tss", "flervar"],
	"transformer" : ["matdom", "tss"],
	"parallellism" : ["concurrent"],
	"synkronisering" : ["concurrent"],
	"kritiska regioner" : ["concurrent"],
	"ömsesidig uteslutning" : ["concurrent"],
	"deadlock" : ["concurrent"],
	"livelock" : ["concurrent"],
	"busy waiting" : ["concurrent"],
	"semaforer" : ["concurrent"],
	"monitorer" : ["concurrent"],
	"rendezvous" : ["concurrent"],
	"erlang" : ["concurrent"],
	"linda" : ["concurrent"],
	"resource allocation" : ["concurrent"],
	"dining philosophers" : ["concurrent"],
	"pipelining" : ["dst"],
	"minneshierarki" : ["dst"],
	"cacheminnen" : ["dst"],
	"huvudminne" : ["dst"],
	"virtuellt minne" : ["dst"],
	"fler-kärniga" : ["dst"],
	"kretselement" : ["el"],
	"ohm" : ["el"],
	"kirchhoff" : ["el"],
	"effekt" : ["el"],
	"elektriska nät" : ["el"],
	"växelström" : ["el"],
	"frekvensegenskaper" : ["el"],
	"bodediagram" : ["el", "regler"],
	"operationsförstärkare" : ["el", "elektronik"],
	"elektromagnetism" : ["el"],
	"likström" : ["el"],
	"ström" : ["el"],
	"spänning" : ["el"],
	"absolut summer" : ["tss"],
	"energisignaler" : ["tss"],
	"bandbegränsade signaler" : ["tss"],
	"linjäritet" : ["tss"],
	"skift-invarians" : ["tss"],
	"kausalitet" : ["tss"],
	"bibo" : ["tss"],
	"fourierserier" : ["tss"],
	"fourier" : ["tss"],
	"z-transform" : ["tss"],
	"fouriertransform" : ["tss"],
	"lti" : ["tss"],
	"lti-ekvationen" : ["tss"],
	"nyquist-frekvensen" : ["tss", "regler"],
	"samplingsteoremet" : ["tss", "regler"],
	"dft" : ["tss"],
	"sampling" : ["tss"],
	"lti-system" : ["tss"],
	"signalmodeller" : ["tss"],
	"parseval" : ["tss"],
	"impulssvar" : ["tss"],
	"stegsvar" : ["tss"],
	"överföringsfunktion" : ["tss"],
	"frekvenssvar" : ["tss"],
	"maxwell-boltzmanns fördelningsfunktion" : ["fysik2"],
	"fasta tillstånd" : ["fysik2"],
	"kristallstruktur" : ["fysik2"],
	"röntgen" : ["fysik2"],
	"elektrondiffraktion" : ["fysik2"],
	"fermi-diracs fördelningsfunktion" : ["fysik2"],
	"tillståndstätheter" : ["fysik2"],
	"frielektronmodellen" : ["fysik2"],
	"elektronstruktur" : ["fysik2"],
	"fotoelektronspektra" : ["fysik2"],
	"brillouinzoner" : ["fysik2"],
	"konduktivitet" : ["fysik2"],
	"isolatorer" : ["fysik2"],
	"halvledare" : ["fysik2"],
	"roman" : ["skon"],
	"novell" : ["skon"],
	"pjäs" : ["skon"],
	"poesi" : ["skon"],
	"texter" : ["skon"],
	"kreativt skrivande" : ["skon"],
	"litteraturteori" : ["skon"],
	"narratologi" : ["skon"],
	"läsarstrategier" : ["skon"],
	"skönlitteratur" : ["skon"],
	"tolkning" : ["skon"],
	"människa-teknologi-samhälle" : ["skon"],
	"mts" : ["skon"],
	"algoritm" : ["algoritmer", "dstrukt"],
	"o-notation" : ["algoritmer", "dstrukt"],
	"ordo" : ["algoritmer", "dstrukt"],
	"grafalgoritmer" : ["algoritmer", "dstrukt"],
	"giriga algoritmer" : ["algoritmer", "dstrukt"],
	"divide-and-conquer" : ["algoritmer"],
	"dynamisk programmering" : ["algoritmer"],
	"backtracking" : ["algoritmer"],
	"implicita sökträd" : ["algoritmer"],
	"branch-and-bound" : ["algoritmer"],
	"komplexitetsteori" : ["algoritmer", "dstrukt"],
	"approximationsalgoritmer" : ["algoritmer"],
	"p" : ["algoritmer"],
	"np" : ["algoritmer"],
	"npc" : ["algoritmer"],
	"rummet" : ["flervar", "linalg"],
	"gränsvärden" : ["flervar", "analys"],
	"kontinuitet" : ["flervar", "analys"],
	"differentierbarhet" : ["flervar", "analys"],
	"kedjeregeln" : ["flervar", "analys"],
	"partiella derivator" : ["flervar", "analys"],
	"gradient" : ["flervar", "analys"],
	"tangentplan" : ["flervar"],
	"differentialer" : ["flervar"],
	"funktionalmatriser" : ["flervar"],
	"funktionaldeterminanter" : ["flervar"],
	"trippelintegraler" : ["flervar"],
	"variabelsubstitution" : ["flervar"],
	"polärakoordinater" : ["flervar", "analys"],
	"sfäriska koordinater" : ["flervar"],
	"arean av buktig yta" : ["flervar"],
	"greens formel" : ["flervar"],
	"kurvintegraler" : ["flervar"],
	"normalytintegraler" : ["flervar"],
	"stokes satser" : ["flervar"],
	"vågekvationen" : ["flervar"],
	"hållbara energisystem" : ["barsaft"],
	"ekologi" : ["barsaft"],
	"växthuseffekten" : ["barsaft"],
	"reglerproblem" : ["regler"],
	"återkoppling" : ["regler"],
	"framkoppling" : ["regler"],
	"servofunktioner" : ["regler"],
	"parametervariationer" : ["regler"],
	"överföringsfunktioner" : ["regler"],
	"transient- och frekvensanalys" : ["regler"],
	"filter" : ["regler"],
	"pi- och pid-regulatorer" : ["regler"],
	"kaskadreglering" : ["regler"],
	"monader" : ["advFunc"],
	"domänspecifika programbibliotek" : ["advFunc"],
	"pretty printing" : ["advFunc"],
	"syntax" : ["advFunc", "matdom"],
	"semantik" : ["advFunc", "matdom"],
	"funktorer" : ["advFunc"],
	"monadtransformerare" : ["advFunc"],
	"resistorer" : ["elektronik"],
	"kondensatorer" : ["elektronik"],
	"induktorer" : ["elektronik"],
	"transistorer" : ["elektronik"],
	"effektsteg" : ["elektronik"],
	"mönsterkort" : ["elektronik"],
	"databas" : ["databas"],
	"sql" : ["databas"],
	"jdbc" : ["databas"],
	"xml" : ["databas"],
	"grafiskt gränssnitt" : ["deskonstr"],
	"html" : ["web"],
	"css" : ["web"],
	"javascript" : ["web"],
	"ajax" : ["web"],
	"java servlet api" : ["web"],
	"java server faces" : ["web"]






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
