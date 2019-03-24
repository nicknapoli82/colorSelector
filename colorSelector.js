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

let text_last = { r: textColorValue.r.value,
		  g: textColorValue.g.value,
		  b: textColorValue.b.value,
		  a: textColorValue.a.value };

let background_last = { r: backgroundColorValue.r.value,
			g: backgroundColorValue.g.value,
			b: backgroundColorValue.b.value,
			a: backgroundColorValue.a.value };


let rightSide = document.getElementById("right_side");

let textBond = false;
let backgroundBond = false;

document.onload = initValues();

function text_bond(elem) {
    if(elem.style.backgroundColor == "" || elem.style.backgroundColor == "white") {
	elem.style.backgroundColor = "red";
	elem.style.color = "white";
	textBond = true;
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
    }
    else {
	elem.style.backgroundColor = "white";
	elem.style.color = "black";	
	backgroundBond = false;
    }
}

function initValues() {
    if (!textBond) {
	textColor.r.innerText = text_last.r = textColorValue.r.value;
	textColor.g.innerText = text_last.g = textColorValue.g.value;
	textColor.b.innerText = text_last.b = textColorValue.b.value;
	textColor.a.innerText = text_last.a = textColorValue.a.value;
    }
    else {
	let edit_distance_r = (Number(textColorValue.g.value) - Number(text_last.g)) + (Number(textColorValue.b.value) - Number(text_last.b));
	let edit_distance_g = (Number(textColorValue.r.value) - Number(text_last.r)) + (Number(textColorValue.b.value) - Number(text_last.b));
	let edit_distance_b = (Number(textColorValue.r.value) - Number(text_last.r)) + (Number(textColorValue.g.value) - Number(text_last.g));	
	
	textColor.r.innerText = textColorValue.r.value = text_last.r = (Number(textColorValue.r.value) + Number(edit_distance_r));
	textColor.g.innerText = textColorValue.g.value = text_last.g = (Number(textColorValue.g.value) + Number(edit_distance_g));
	textColor.b.innerText = textColorValue.b.value = text_last.b = (Number(textColorValue.b.value) + Number(edit_distance_b));
	textColor.a.innerText = textColorValue.a.value;
    }

    if (!backgroundBond) {
	backgroundColor.r.innerText = background_last.r = backgroundColorValue.r.value;
	backgroundColor.g.innerText = background_last.g = backgroundColorValue.g.value;
	backgroundColor.b.innerText = background_last.b = backgroundColorValue.b.value;
	backgroundColor.a.innerText = background_last.a = backgroundColorValue.a.value;
    }
    else {
	let edit_distance_r = (Number(backgroundColorValue.g.value) - Number(background_last.g)) + (Number(backgroundColorValue.b.value) - Number(background_last.b));
	let edit_distance_g = (Number(backgroundColorValue.r.value) - Number(background_last.r)) + (Number(backgroundColorValue.b.value) - Number(background_last.b));
	let edit_distance_b = (Number(backgroundColorValue.r.value) - Number(background_last.r)) + (Number(backgroundColorValue.g.value) - Number(background_last.g));	
	
	backgroundColor.r.innerText = backgroundColorValue.r.value = background_last.r = (Number(backgroundColorValue.r.value) + Number(edit_distance_r));
	backgroundColor.g.innerText = backgroundColorValue.g.value = background_last.g = (Number(backgroundColorValue.g.value) + Number(edit_distance_g));
	backgroundColor.b.innerText = backgroundColorValue.b.value = background_last.b = (Number(backgroundColorValue.b.value) + Number(edit_distance_b));
	backgroundColor.a.innerText = backgroundColorValue.a.value;
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
