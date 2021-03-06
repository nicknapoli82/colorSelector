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
	    textColor.r.innerText = textColorValue.r.value;
	    textColor.g.innerText = textColorValue.g.value = text_difference.r.g + Number(textColorValue.r.value);
	    textColor.b.innerText = textColorValue.b.value = text_difference.r.b + Number(textColorValue.r.value);
    	}
	else if (picked_color == "tv_g") {
	    textColor.g.innerText = textColorValue.g.value;
	    textColorValue.r.value = textColor.r.innerText = text_difference.g.r + Number(textColorValue.g.value);
	    textColorValue.b.value = textColor.b.innerText = text_difference.g.b + Number(textColorValue.g.value);
	}
	else if (picked_color == "tv_b") {
	    textColor.b.innerText = textColorValue.b.value;
	    textColorValue.r.value = textColor.r.innerText = text_difference.b.r + Number(textColorValue.b.value);
	    textColorValue.g.value = textColor.g.innerText = text_difference.b.g + Number(textColorValue.b.value);
	}
	textColor.a.innerText = textColorValue.a.value;

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
	    backgroundColor.r.innerText = backgroundColorValue.r.value;
	    backgroundColor.g.innerText = backgroundColorValue.g.value = background_difference.r.g + Number(backgroundColorValue.r.value);
	    backgroundColor.b.innerText = backgroundColorValue.b.value = background_difference.r.b + Number(backgroundColorValue.r.value);
    	}
	else if (picked_color == "bv_g") {
	    backgroundColor.g.innerText = backgroundColorValue.g.value;
	    backgroundColorValue.r.value = backgroundColor.r.innerText = background_difference.g.r + Number(backgroundColorValue.g.value);
	    backgroundColorValue.b.value = backgroundColor.b.innerText = background_difference.g.b + Number(backgroundColorValue.g.value);
	}
	else if (picked_color == "bv_b") {
	    backgroundColor.b.innerText = backgroundColorValue.b.value;
	    backgroundColorValue.r.value = backgroundColor.r.innerText = background_difference.b.r + Number(backgroundColorValue.b.value);
	    backgroundColorValue.g.value = backgroundColor.g.innerText = background_difference.b.g + Number(backgroundColorValue.b.value);
	}

	if (backgroundColor.r.innerText < 0) {
	    backgroundColorValue.r.value = backgroundColor.r.innerText = 0;
	}
	else if (backgroundColor.r.innerText > 255) {
	    backgroundColorValue.r.value = backgroundColor.r.innerText = 255;	    
	}
	backgroundColor.a.innerText = backgroundColorValue.a.value;

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

    update_text_values();
    update_background_values();
}

// Lets see if we can get this to work with some text?

let text_colors_element = document.getElementById("named_text_colors");
let text_colors_array = new Array();

let named_text_field_buttons = {
    set_text: false,
    set_background: false,
    sort_alpha: false,
    sort_hex: false
};

function create_colors_array() {
    let colors_text = text_colors_element.innerText;
    colors_text = colors_text.split(" ");

    let result = new Array();

    // Consume the array (Nom nom)
    while(colors_text.length != 0) {
	result.push(new_color_object(colors_text.shift()));
    }

    return result;
}

function new_color_object(the_string) {
    let s = the_string.split(",");
    let result = { color: s[0],
		   hex:   s[1] };
    return result;
}

function sort_colors_array(button_value) {
    if (button_value.value == "Sort Alphabetical") {
	if (!named_text_field_buttons.sort_alpha) {
	    button_value.style.backgroundColor = "red";
	    button_value.style.color = "white";
	    named_text_field_buttons.sort_alpha = true;
	    named_text_field_buttons.sort_hex = false;
	    
	    let temp_button = document.getElementById("sort_text_hex");
	    temp_button.style.backgroundColor = "white";
	    temp_button.style.color = "black";

	    text_colors_array.sort(function(a, b){
		if (a.color < b.color){
		    return -1;
		}
		else return 1;
		    });	    
	}
	else return;
    }
    else if (button_value.value == "Sort Hex") {
	if (!named_text_field_buttons.sort_hex) {
	    button_value.style.backgroundColor = "red";
	    button_value.style.color = "white";
	    named_text_field_buttons.sort_hex = true;
	    named_text_field_buttons.sort_alpha = false;	    

	    let temp_button = document.getElementById("sort_text_alpha");
	    temp_button.style.backgroundColor = "white";
	    temp_button.style.color = "black";
	    
	    text_colors_array.sort(function(a, b){
		if (a.hex < b.hex){
		    return -1;
		}
		else return 1;
		    });	    
	}
	else return;
    }

    replace_named_text_colors();
}

function replace_named_text_colors() {
    let output_text = "";

    text_colors_array.forEach(function(text) {
	output_text += '<p onclick="set_by_text_value(this)" style="background-color:' + text.hex + '; color:' + invert_color(text.hex) + '">' + text.color + '</p>';
    });
    text_colors_element.innerHTML = output_text;
}

function invert_color(hex) {
    let temp_string = hex.slice(1);
    temp_string = parseInt(temp_string, 16);
    let result = [(temp_string & 0xF00000) >> 20, (temp_string & 0x0F000) >> 16, temp_string & 0x00F000 >> 12, temp_string & 0x000F00 >> 8, temp_string & 0x0000F0 >> 4, temp_string & 0x00000F,];
    
    result[0] = 15 - result[0];
    result[1] = 15 - result[1];
    result[2] = 15 - result[2];
    result[3] = 15 - result[3];
    result[4] = 15 - result[4];
    result[5] = 15 - result[5];
    
    temp_string = "#" + result[0].toString(16) + result[1].toString(16) + result[2].toString(16) + result[3].toString(16) + result[4].toString(16) + result[5].toString(16);
    return temp_string;
}

function set_button_right_toggle(button_value) {
    if (button_value.value == "Named Set Text") {
	if (!named_text_field_buttons.set_text) {
	    button_value.style.backgroundColor = "red";
	    button_value.style.color = "white";
	    named_text_field_buttons.set_text = true;
	    named_text_field_buttons.set_background = false;
	    
	    let temp_button = document.getElementById("set_background");
	    temp_button.style.backgroundColor = "white";
	    temp_button.style.color = "black";
	}
	else return;
    }
    else if (button_value.value == "Named Set Background") {
	if (!named_text_field_buttons.set_background) {
	    button_value.style.backgroundColor = "red";
	    button_value.style.color = "white";
	    named_text_field_buttons.set_background = true;
	    named_text_field_buttons.set_text = false;	    

	    let temp_button = document.getElementById("set_text");
	    temp_button.style.backgroundColor = "white";
	    temp_button.style.color = "black";
	}
	else return;
    }
    
}

function set_by_text_value(elem) {
    let color = elem.style.backgroundColor;
    let rgb = { r: 0, g: 0, b: 0 };
    color = color.split(",");
    rgb.r = Number.parseInt(color[0].substr(4));
    rgb.g = Number.parseInt(color[1]);
    rgb.b = Number.parseInt(color[2]);    

    if (named_text_field_buttons.set_text) {
	textColor.r.innerText = textColorValue.r.value = rgb.r;
	textColor.g.innerText = textColorValue.g.value = rgb.g;
	textColor.b.innerText = textColorValue.b.value = rgb.b;	
    }
    else if (named_text_field_buttons.set_background) {
	backgroundColor.r.innerText = backgroundColorValue.r.value = rgb.r;
    	backgroundColor.g.innerText = backgroundColorValue.g.value = rgb.g;
    	backgroundColor.b.innerText = backgroundColorValue.b.value = rgb.b;
    }

    if(textBond) {
	text_difference.r.g = textColorValue.g.value - textColorValue.r.value;
	text_difference.r.b = textColorValue.b.value - textColorValue.r.value;
	text_difference.g.r = textColorValue.r.value - textColorValue.g.value;
	text_difference.g.b = textColorValue.b.value - textColorValue.g.value;
	text_difference.b.r = textColorValue.r.value - textColorValue.b.value;
	text_difference.b.g = textColorValue.g.value - textColorValue.b.value;
    }

    if(backgroundBond) {
	background_difference.r.g = backgroundColorValue.g.value - backgroundColorValue.r.value;
	background_difference.r.b = backgroundColorValue.b.value - backgroundColorValue.r.value;
	background_difference.g.r = backgroundColorValue.r.value - backgroundColorValue.g.value;
	background_difference.g.b = backgroundColorValue.b.value - backgroundColorValue.g.value;
	background_difference.b.r = backgroundColorValue.r.value - backgroundColorValue.b.value;
	background_difference.b.g = backgroundColorValue.g.value - backgroundColorValue.b.value;
    }

    rightSide.style.color = "rgba(" + textColorValue.r.value + "," +
	textColorValue.g.value + "," + 
	textColorValue.b.value + "," +
	textColorValue.a.value + ")";

    rightSide.style.backgroundColor = "rgba(" + backgroundColorValue.r.value + "," +
	backgroundColorValue.g.value + "," +
	backgroundColorValue.b.value + "," +
	backgroundColorValue.a.value + ")";

    update_text_values();
    update_background_values();
}

text_colors_array = create_colors_array();
replace_named_text_colors();

// Lets update the output text in a way that is actually usable
function update_text_values() {
    let text_element = document.getElementById("text_output");
    let color = {
	r: Number.parseInt(textColor.r.innerText).toString(16),
	g: Number.parseInt(textColor.g.innerText).toString(16),
	b: Number.parseInt(textColor.b.innerText).toString(16),
	a: Math.round(Number.parseFloat(textColor.a.innerText) * 255).toString(16)
    };
    if (color.r.length < 2) color.r = "0" + color.r;
    if (color.g.length < 2) color.g = "0" + color.g;
    if (color.b.length < 2) color.b = "0" + color.b;
    
    let text_output = "";
    text_output += '<h1>Text Values</h1>';
    text_output += '<p>';
    text_output += 'rgb = {color: rgb(' + textColor.r.innerText + ',' + textColor.g.innerText + ',' + textColor.b.innerText + ');}<br>';
    text_output += 'rgba = {color: rgba(' + textColor.r.innerText + ',' + textColor.g.innerText + ',' + textColor.b.innerText + ',' + textColor.a.innerText + ');}<br>';
    text_output += 'hex = #' + color.r + color.g + color.b + color.a + '\n';
    text_output += '</p>';
    text_output += '<hr>';
    text_element.innerHTML = text_output;
}

function update_background_values() {
    let background_element = document.getElementById("background_output");
    let color = {
	r: Number.parseInt(backgroundColor.r.innerText).toString(16),
	g: Number.parseInt(backgroundColor.g.innerText).toString(16),
	b: Number.parseInt(backgroundColor.b.innerText).toString(16),
	a: Math.round(Number.parseFloat(backgroundColor.a.innerText) * 255).toString(16)
    };
    if (color.r.length < 2) color.r = "0" + color.r;
    if (color.g.length < 2) color.g = "0" + color.g;
    if (color.b.length < 2) color.b = "0" + color.b;
    
    let background_output = "";
    background_output += '<h1>Background Values</h1>';
    background_output += '<p>';
    background_output += 'rgb = {background-color: rgb(' + backgroundColor.r.innerText + ',' + backgroundColor.g.innerText + ',' + backgroundColor.b.innerText + ');}<br>';
    background_output += 'rgba = {background-color: rgba(' + backgroundColor.r.innerText + ',' + backgroundColor.g.innerText + ',' + backgroundColor.b.innerText + ',' + backgroundColor.a.innerText + ');}<br>';
    background_output += 'hex = #' + color.r + color.g + color.b + color.a + '\n';
    background_output += '</p>';
    background_output += '<hr>';
    background_element.innerHTML = background_output;
}
