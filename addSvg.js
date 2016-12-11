graphviz_text =  d3.text("kursgraf.dot", function(error, text){
	document.body.innerHTML += Viz(text, "svg");
});
