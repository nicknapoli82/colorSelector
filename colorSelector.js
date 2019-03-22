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

function initValues() {
    if (!textBond) {
	textColor.r.innerText = textColorValue.r.value;
	textColor.g.innerText = textColorValue.g.value;
	textColor.b.innerText = textColorValue.b.value;
	textColor.a.innerText = textColorValue.a.value;

	rightSide.style.color = "rgba(" + textColorValue.r.value + "," +
	    textColorValue.g.value + "," + 
	    textColorValue.b.value + "," +
	    textColorValue.a.value + ")";
    }
    else {
	
	
	textColor.r.innerText = textColorValue.r.value;
	textColor.g.innerText = textColorValue.g.value;
	textColor.b.innerText = textColorValue.b.value;
	textColor.a.innerText = textColorValue.a.value;

	rightSide.style.color = "rgba(" + textColorValue.r.value + "," +
	    textColorValue.g.value + "," + 
	    textColorValue.b.value + "," +
	    textColorValue.a.value + ")";
    }

    if (!backgroundBond) {
	backgroundColor.r.innerText = backgroundColorValue.r.value;
	backgroundColor.g.innerText = backgroundColorValue.g.value;
	backgroundColor.b.innerText = backgroundColorValue.b.value;
	backgroundColor.a.innerText = backgroundColorValue.a.value;

	rightSide.style.backgroundColor = "rgba(" + backgroundColorValue.r.value + "," +
	    backgroundColorValue.g.value + "," +
	    backgroundColorValue.b.value + "," +
	    backgroundColorValue.a.value + ")";
    }
}
