graphviz_text =  d3.text("kursgraf.dot", function(error, text){
	//console.log(text);
	document.body.innerHTML += Viz(text, "svg");

	//var z = Viz(text, "svg");
	//console.log(z);
	//wp.appendChild(svg);
	 var wp = document.getElementById('wrapper');
	 var z = document.createElement('div');

	 z.setAttribute("id", "testDiv");
	 wp.appendChild(z);

	// var wp = document.getElementById('wrapper');
	//
	//
	// wp.innerHTML = Viz(text, "svg");
	//wp.appendChild(z);

	//wp.appendChild(Viz(text, "svg"));
});
