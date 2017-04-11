
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
        var  svgText = Viz(text, "svg");
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
                var $yearOne = $();
                var allNodes = $(".node");
                var yearOne   = ['D1','haskell','diskmat', 'linalg', 'digodat','analys', 'mop', 'datakom', 'oop'];
                var yearTwo   = ['D2','matstat','dtekproj', 'fysik', 'dstrukt', 'syntes', 'el', 'matdom', 'concurrent', 'dst'];
                var yearThree = ['D3','tss','concurrent','algoritmer','regler', 'kandidat', 'matdom', 'mts', 'barsaft', 'elektronik', 'databas', 'flervar', 'fysik2', 'web', 'deskonstr'];
                var alg       = ['DM1','prolang','algoritmer', 'logik', 'cscience', 'advAlg', 'discopt', 'ml', 'ai', 'models', 'types', 'softEng',
                                 'compilerConst', 'advFunc', 'paraFunc', 'crypto', 'langsecurity'];
                var csn       = ['DM2','computerNetworks','oS', 'ftcs', 'techwrite', 'advDistSys', 'networkSecurity', 'computerSecurity', 'rts',
                                 'parallelOrganization', 'parallelRTS', 'distSys', 'energyComp', 'routerSwitch', 'commEng', 'compArch'];
                var elective  = ['matdom','concurrent','elektronik','databas','flervar','fysik2','deskonstr','web','advAlg','discopt',
                                 'ml','ai','models','types','softEng','compilerConst','advFunc','paraFunc','crypto','langsecurity',
                                 'advDistSys','networkSecurity','computerSecurity','rts','parallelOrganization','parallelRTS','distSys','energyComp',
                                 'routerSwitch','commEng','compArch'];
                var mandatory  = ['haskell','diskmat', 'linalg', 'digodat','analys', 'mop', 'datakom', 'oop',
                                  'matstat','dtekproj', 'fysik', 'dstrukt', 'syntes', 'el', 'dst',
                                  'tss','regler', 'kandidat', 'mts', 'barsaft',
                                  'prolang','algoritmer','logik','cscience','computerNetworks','oS','ftcs','techwrite'];
                var yearOneSet = $(); yearTwoSet = $(); yearThreeSet = $(); algSet = $(); csnSet = $(); electSet = $(); mandaSet = $();
                for( i = 0; i < allNodes.length; i++){
                    yearOneSet.push($(".node").filter(function(){ return $(this).attr('data-name') == yearOne[i] }));
                    yearTwoSet.push($(".node").filter(function(){ return $(this).attr('data-name') == yearTwo[i] }));
                    yearThreeSet.push($(".node").filter(function(){ return $(this).attr('data-name') == yearThree[i] }));
                    algSet.push($(".node").filter(function(){ return $(this).attr('data-name') == alg[i] }));
                    csnSet.push($(".node").filter(function(){ return $(this).attr('data-name') == csn[i] }));
                    electSet.push($(".node").filter(function(){ return $(this).attr('data-name') == elective[i] }));
                    mandaSet.push($(".node").filter(function(){ return $(this).attr('data-name') == mandatory[i] }));
                }

                gv.nodes().click(function () {
                var $set = $()
                $set.push(this)
                $set = $set.add(gv.linkedFrom(this, true))
                $set = $set.add(gv.linkedTo(this, true))
                gv.highlight($set, true)
                gv.bringToFront($set)
                if ($(this).attr('data-name') == "D1")
                    gv.highlight(yearOneSet, true)
                if ($(this).attr('data-name') == "D2")
                    gv.highlight(yearTwoSet, true)
                if ($(this).attr('data-name') == "D3")
                    gv.highlight(yearThreeSet, true)
                if ($(this).attr('data-name') == "DM1")
                    gv.highlight(algSet, true)
                if ($(this).attr('data-name') == "DM2")
                    gv.highlight(csnSet, true)
                if ($(this).attr('data-name') == "Valbar")
                    gv.highlight(electSet, true)
                if ($(this).attr('data-name') == "Obligatorisk")
                    gv.highlight(mandaSet, true)
                })
                $(document).keydown(function (evt) {
                  if (evt.keyCode == 27)
                    gv.highlight()
                })

                //Highlight nodes of the selected year


//-
                //Reset selection when pressing outside of a node or the menu
                var searchis = $("#honke");
                var menyiss  = $("#ui-id-1")
                $(window).click(function(e) {
                if (!allNodes.is(e.target) && allNodes.has(e.target).length === 0) // if the target of the click isn't the container...
                    if (!searchis.is(e.target) && searchis.has(e.target).length === 0)    // nor a descendant of the container
                        if (!menyiss.is(e.target) && menyiss.has(e.target).length === 0) // -||-
                            gv.highlight()  // then highlight every node.
                })

                //Highlight nodes when a search match occurs
                var button = document.getElementById("searchButt")
                button.onclick = function() {
                    var tag =  document.getElementById("tags").value;
                    var taggedCourses = tagMap[tag];
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
                }
             }
     })
})
}


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


var dnslink ="https://dns.dtek.se/course_id="
