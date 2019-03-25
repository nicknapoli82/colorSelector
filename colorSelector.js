let textColor = {r: document.getElementById("t_r"),
		 g: document.getElementById("t_g"),
		 b: document.getElementById("t_b"),
		 a: document.getElementById("t_a")};
let backgroundColor = {r: document.getElementById("b_r"),
		       g: document.getElementById("b_g"),
		       b: document.getElementById("b_b"),
		       a: document.getElementById("b_a")};
let textColorValue = {r: document.getElementById("tv_r"),
		      g: document.getElementById("tv_g"),
		      b: document.getElementById("tv_b"),
		      a: document.getElementById("tv_a")};
let backgroundColorValue = {r: document.getElementById("bv_r"),
			    g: document.getElementById("bv_g"),
			    b: document.getElementById("bv_b"),
			    a: document.getElementById("bv_a")};

let text_difference = { r: { g: 0, b: 0 },
			g: { r: 0, b: 0 },
			b: { r: 0, g: 0 } };


let background_difference = { r: { g: 0, b: 0 },
			      g: { r: 0, b: 0 },
			      b: { r: 0, g: 0 } };

let rightSide = document.getElementById("right_side");

let textBond = false;
let backgroundBond = false;

document.onload = initValues();

function text_bond(elem) {
    if(elem.style.backgroundColor == "" || elem.style.backgroundColor == "white") {
	elem.style.backgroundColor = "red";
	elem.style.color = "white";
	textBond = true;
	text_difference.r.g = textColorValue.g.value - textColorValue.r.value;
	text_difference.r.b = textColorValue.b.value - textColorValue.r.value;
	text_difference.g.r = textColorValue.r.value - textColorValue.g.value;
	text_difference.g.b = textColorValue.b.value - textColorValue.g.value;
	text_difference.b.r = textColorValue.r.value - textColorValue.b.value;
	text_difference.b.g = textColorValue.g.value - textColorValue.b.value;
    }
    else {
	elem.style.backgroundColor = "white";
	elem.style.color = "black";	
	textBond = false;
    }
}

function background_bond(elem) {
    if(elem.style.backgroundColor == "" || elem.style.backgroundColor == "white") {
	elem.style.backgroundColor = "red";
	elem.style.color = "white";
	backgroundBond = true;
	background_difference.r.g = backgroundColorValue.g.value - backgroundColorValue.r.value;
	background_difference.r.b = backgroundColorValue.b.value - backgroundColorValue.r.value;
	background_difference.g.r = backgroundColorValue.r.value - backgroundColorValue.g.value;
	background_difference.g.b = backgroundColorValue.b.value - backgroundColorValue.g.value;
	background_difference.b.r = backgroundColorValue.r.value - backgroundColorValue.b.value;
	background_difference.b.g = backgroundColorValue.g.value - backgroundColorValue.b.value;
    }
    else {
	elem.style.backgroundColor = "white";
	elem.style.color = "black";	
	backgroundBond = false;
    }
}

function initValues(picked_color) {
    if (!textBond) {
    	textColor.r.innerText = textColorValue.r.value;
    	textColor.g.innerText = textColorValue.g.value;
    	textColor.b.innerText = textColorValue.b.value;
    	textColor.a.innerText = textColorValue.a.value;
    }
    else {
    	if (picked_color == "tv_r") {
	    textColor.g.innerText = textColorValue.g.value = text_difference.r.g + Number(textColorValue.r.value);
	    textColor.b.innerText = textColorValue.b.value = text_difference.r.b + Number(textColorValue.r.value);
    	}
	else if (picked_color == "tv_g") {
	    textColorValue.r.value = textColor.r.innerText = text_difference.g.r + Number(textColorValue.g.value);
	    textColorValue.b.value = textColor.b.innerText = text_difference.g.b + Number(textColorValue.g.value);
	}
	else if (picked_color == "tv_b") {
	    textColorValue.r.value = textColor.r.innerText = text_difference.b.r + Number(textColorValue.b.value);
	    textColorValue.g.value = textColor.g.innerText = text_difference.b.g + Number(textColorValue.b.value);
	}

	if (textColor.r.innerText < 0) {
	    textColorValue.r.value = textColor.r.innerText = 0;
	}
	else if (textColor.r.innerText > 255) {
	    textColorValue.r.value = textColor.r.innerText = 255;	    
	}

	if (textColor.g.innerText < 0) {
	    textColorValue.g.value = textColor.g.innerText = 0;
	}
	else if (textColor.g.innerText > 255) {
	    textColorValue.g.value = textColor.g.innerText = 255;	    
	}
	if (textColor.b.innerText < 0) {
	    textColorValue.b.value = textColor.b.innerText = 0;
	}
	else if (textColor.b.innerText > 255) {
	    textColorValue.b.value = textColor.b.innerText = 255;	    
	}	
    }

    if (!backgroundBond) {
    	backgroundColor.r.innerText = backgroundColorValue.r.value;
    	backgroundColor.g.innerText = backgroundColorValue.g.value;
    	backgroundColor.b.innerText = backgroundColorValue.b.value;
    	backgroundColor.a.innerText = backgroundColorValue.a.value;
    }
    else {
    	if (picked_color == "bv_r") {
	    backgroundColor.g.innerText = backgroundColorValue.g.value = background_difference.r.g + Number(backgroundColorValue.r.value);
	    backgroundColor.b.innerText = backgroundColorValue.b.value = background_difference.r.b + Number(backgroundColorValue.r.value);
    	}
	else if (picked_color == "bv_g") {
	    backgroundColorValue.r.value = backgroundColor.r.innerText = background_difference.g.r + Number(backgroundColorValue.g.value);
	    backgroundColorValue.b.value = backgroundColor.b.innerText = background_difference.g.b + Number(backgroundColorValue.g.value);
	}
	else if (picked_color == "bv_b") {
	    backgroundColorValue.r.value = backgroundColor.r.innerText = background_difference.b.r + Number(backgroundColorValue.b.value);
	    backgroundColorValue.g.value = backgroundColor.g.innerText = background_difference.b.g + Number(backgroundColorValue.b.value);
	}

	if (backgroundColor.r.innerText < 0) {
	    backgroundColorValue.r.value = backgroundColor.r.innerText = 0;
	}
	else if (backgroundColor.r.innerText > 255) {
	    backgroundColorValue.r.value = backgroundColor.r.innerText = 255;	    
	}

	if (backgroundColor.g.innerText < 0) {
	    backgroundColorValue.g.value = backgroundColor.g.innerText = 0;
	}
	else if (backgroundColor.g.innerText > 255) {
	    backgroundColorValue.g.value = backgroundColor.g.innerText = 255;	    
	}
	if (backgroundColor.b.innerText < 0) {
	    backgroundColorValue.b.value = backgroundColor.b.innerText = 0;
	}
	else if (backgroundColor.b.innerText > 255) {
	    backgroundColorValue.b.value = backgroundColor.b.innerText = 255;	    
	}	
    }

    
    rightSide.style.color = "rgba(" + textColorValue.r.value + "," +
	textColorValue.g.value + "," + 
	textColorValue.b.value + "," +
	textColorValue.a.value + ")";

    rightSide.style.backgroundColor = "rgba(" + backgroundColorValue.r.value + "," +
	backgroundColorValue.g.value + "," +
	backgroundColorValue.b.value + "," +
	backgroundColorValue.a.value + ")";
}
