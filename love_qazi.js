const search_box = document.querySelector('#search');
const color_container = document.querySelector('.container');

const color_names = ['green','yellow','blue','orange','purple','red','blue','brown','black','cyan','crimson','violet',
    "#000000",
    "#00008B",
    "#0000EE",
    "#003EFF",
    "#00611C",
    "#00688B",
    "#008000",
    "#008B00",
    "#009900",
    "#00AF33",
    "#00C5CD",
    "#00CD00",
    "#00CED1",
    "#00EE76",
    "#00FA9A",
    "#00FF66",
    "#00FFCC",
    "#0147FA",
    "#0276FD",
    "#050505",
    "#05EDFF",
    "#0A0A0A",
    "#0D0D0D",
    "#0EBFE9",
    "#104E8B",
    "#121212",
    "#1464F4",
    "#174038",
    "#1A1A1A",
    "#1C1C1C",
    "#1DA237",
    "#20B2AA",
    "#213D30",
    "#22316C",
    "#236B8E",
    "#24D330",
    "#27408B",
    "#28AE7B",
    "#2A8E82",
    "#2C5197",
    "#2E2E2E",
    "#2E5090",
    "#2F2F4F",
    "#2F4F4F",
    "#303030",
    "#31B94D",
    "#324F17",
    "#329555",
    "#32CD32",
    "#3300FF",
    "#337147",
    "#33FF33",
    "#353F3E",
    "#362819",
    "#36DBCA",
    "#380474",
    "#388E8E",
    "#397D02",
    "#3A5894",
    "#3A66A7",
    "#3B4990",
    "#3B6AA0",
    "#3D3D3D",
    "#3D5B43",
    "#3E6B4F",
    "#3E7A5E",
    "#3F6826",
    "#40664D",
    "#4169E1",
    "#42426F",
    "#42647F",
    "#435D36",
    "#43CD80",
    "#457371",
    "#45C3B8",
    "#473C8B",
    "#483D8B",
    "#4876FF",
    "#4973AB",
    "#49E20E",
    "#4A7023",
    "#4A777A",
    "#4BB74C",
    "#4CBB17",
    "#4D6B50",
    "#4D7865",
    "#4EEE94",
    "#4F4F4F",
    "#506987",
    "#50A6C2",
    "#5190ED",
    "#526F35",
    "#53868B",
    "#54632C",
    "#551011",
    "#551A8B",
    "#55AE3A",
    "#577A3A",
    "#595959",
    "#5971AD",
    "#5A6351",
    "#5B9C64",
    "#5C4033",
    "#5D478B",
    "#5DFC0A",
    "#5E2D79",
    "#5F755E",
    "#603311",
    "#608341",
    "#616161",
    "#629632",
    "#636F57",
    "#63D1F4",
    "#65909A",
    "#6600FF",
    "#6666FF",
    "#668E86",
    "#66CDAA",
    "#67E6EC",
    "#687C97",
    "#688571",
    "#6959CD",
    "#698B22",
    "#699864",
    "#6B238E",
    "#6B8E23",
    "#6D9BF1",
    "#6E8B3D",
    "#6F7285",
    "#708090",
    "#70DBDB",
    "#71C671",
    "#734A12",
    "#73B1B7",
    "#754C78",
    "#75A1D0",
    "#777733",
    "#77896C",
    "#78AB46",
    "#79CDCD",
    "#7A7A7A",
    "#7AC5CD",
    "#7B7922",
    "#7CCD7C",
    "#7D7D7D",
    "#7EB6FF",
    "#7F7F7F",
    "#7FFF00",
    "#800080",
    "#808069",
    "#808A87",
    "#828282",
    "#838B83",
    "#83F52C",
    "#855E42",
    "#859C27",
    "#871F78",
    "#878787",
    "#87CEFF",
    "#8A2BE2",
    "#8A8A8A",
    "#8B008B",
    "#8B1C62",
    "#8B2500",
    "#8B3A62",
    "#8B4513",
    "#8B4789",
    "#8B5A00",
    "#8B636C",
    "#8B6914",
    "#8B7500",
    "#8B7B8B",
    "#8B7E66",
    "#8B8386",
    "#8B8878",
    "#8B8B00",
    "#8BA446",
    "#8C7853",
    "#8DB6CD",
    "#8E236B",
    "#8E8E38",
    "#8F8F8F",
    "#8FBC8F",
    "#90FEFB",
    "#919191",
    "#9370DB",
    "#949494",
    "#96C8A2",
    "#97FFFF",
    "#98FB98",
    "#9932CC",
    "#999999",
    "#9A32CD",
    "#9AFF9A",
    "#9BCD9B",
    "#9C9C9C",
    "#9CCB19",
    "#9D8851",
    "#9E9E9E",
    "#9F79EE",
    "#A020F0",
    "#A1A1A1",
    "#A2BC13",
    "#A2CD5A",
    "#A46582",
    "#A52A2A",
    "#A67D3D",
    "#A6D785",
    "#A8A8A8",
    "#A9ACB6",
    "#AA5303",
    "#AAAAFF",
    "#ABABAB",
    "#ADD8E6",
    "#AEBB51",
    "#AF4035",
    "#B03060",
    "#B0C4DE",
    "#B13E0F",
    "#B272A6",
    "#B2DFEE",
    "#B3C95A",
    "#B4CDCD",
    "#B5509C",
    "#B62084",
    "#B6AFA9",
    "#B7C8B6",
    "#B8860B",
    "#BA55D3",
    "#BB2A3C",
    "#BC8F8F",
    "#BCED91",
    "#BDB76B",
    "#BE2625",
    "#BF3EFF",
    "#BFEFFF",
    "#C0D9D9",
    "#C1CDCD",
    "#C2C2C2",
    "#C4C4C4",
    "#C65D57",
    "#C6E2FF",
    "#C75D4D",
    "#C77826",
    "#C8F526",
    "#CAE1FF",
    "#CC00FF",
    "#CC3299",
    "#CC7F32",
    "#CCCCCC",
    "#CD0000",
    "#CD2626",
    "#CD3333",
    "#CD5555",
    "#CD6090",
    "#CD6839",
    "#CD7054",
    "#CD8500",
    "#CD919E",
    "#CD9B1D",
    "#CDAB2D",
    "#CDB38B",
    "#CDB7B5",
    "#CDC0B0",
    "#CDC673",
    "#CDC9C9",
    "#CDCDC1",
    "#CDE472",
    "#CFCFCF",
    "#D02090",
    "#D0FAEE",
    "#D1D1D1",
    "#D2691E",
    "#D3D3D3",
    "#D4318C",
    "#D4D4D4",
    "#D66F62",
    "#D8BFD8",
    "#D9D919",
    "#DA70D6",
    "#DB2645",
    "#DB70DB",
    "#DBDB70",
    "#DBFEF8",
    "#DCA2CD",
    "#DDA0DD",
    "#DEDEDE",
    "#E04006",
    "#E0D873",
    "#E0EEE0",
    "#E18E2E",
    "#E3170D",
    "#E33638",
    "#E38217",
    "#E3E3E3",
    "#E5E5E5",
    "#E6E8FA",
    "#E8C782",
    "#E9967A",
    "#EAB5C5",
    "#EBC79E",
    "#ECC3BF",
    "#EDC393",
    "#EE0000",
    "#EE2C2C",
    "#EE3B3B",
    "#EE6363",
    "#EE7600",
    "#EE799F",
    "#EE82EE",
    "#EE9A00",
    "#EEA9B8",
    "#EEB422",
    "#EEC900",
    "#EED2EE",
    "#EED6AF",
    "#EEDD82",
    "#EEE5DE",
    "#EEE8CD",
    "#EEEB8D",
    "#EEEEE0",
    "#F0E68C",
    "#F0FFF0",
    "#F2F2F2",
    "#F4F776",
    "#F5DEB3",
    "#F5FFFA",
    "#F6A8B6",
    "#F7B3DA",
    "#F8F8FF",
    "#FA9A50",
    "#FAFAD2",
    "#FBDB0C",
    "#FCB514",
    "#FCDC3B",
    "#FCFFF0",
    "#FEE5AC",
    "#FEF1B5",
    "#FF0066",
    "#FF00CC",
    "#FF030D",
    "#FF2400",
    "#FF3333",
    "#FF3E96",
    "#FF5333",
    "#FF6347",
    "#FF69B4",
    "#FF6EC7",
    "#FF7722",
    "#FF7F24",
    "#FF8247",
    "#FF8600",
    "#FF92BB",
    "#FFA07A",
    "#FFA812",
    "#FFADB9",
    "#FFB5C5",
    "#FFBBFF",
    "#FFC1C1",
    "#FFCC99",
    "#FFD700",
    "#FFE1FF",
    "#FFE4C4",
    "#FFE7BA",
    "#FFEFD5",
    "#FFF5EE",
    "#FFFACD",
    "#FFFCCF",
    "#FFFFAA",
    "#FFFFF0"
]


function autocomplete(inp, arr) {
	var currentFocus;
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		closeAllLists();
		if (!val) { return false; }
		currentFocus = -1;
		a = document.createElement("DIV");
		a.style.height = "140px";
		a.style.overflow = "auto";
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		document.querySelector('.autocomplete').appendChild(a);
		for (i = 0; i < arr.length; i++) {
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

				b = document.createElement("DIV");
				b.setAttribute("class", "autocomplete-item");
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				b.addEventListener("click", function(e) {
					inp.value = document.querySelector('.autocomplete-item input').value;
					closeAllLists();
				});
				a.appendChild(b);
			}
		}

	});
	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
			currentFocus++;
			addActive(x);
		} else if (e.keyCode == 38) {
			currentFocus--;
			addActive(x);
		} else if (e.keyCode == 13) {
			e.preventDefault();
			if (currentFocus > -1) {
				if (x) x[currentFocus].click();
			}
		}
	});
	function addActive(x) {
		if (!x) return false;
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}

function appendColors() {
	let timer,
	timeoutVal = 1000;

	const typer = document.getElementById('search');

	typer.addEventListener('keypress', handleKeyPress);
	typer.addEventListener('keyup', handleKeyUp);

	function handleKeyUp(e) {
		window.clearTimeout(timer);
		timer = window.setTimeout(() => {

			removeAllChildNodes(color_container);

			const input = document.querySelector('.autocomplete-item input');

			if (input == null) {
				defaultColors();
			}

			else {
				const color_child = document.createElement('DIV');
				color_child.style.background = input.value;
				color_child.style.borderRadius = "25px";
				color_child.setAttribute("class","color_child");
				color_container.appendChild(color_child);
			}
			

		}, timeoutVal);
	}

	function handleKeyPress(e) {
		window.clearTimeout(timer);
	}

}

appendColors();

function defaultColors() {
	for (var i = 0; i < color_names.length; i++) {
		const color_child = document.createElement('DIV');
		color_child.style.background = color_names[i];
		color_container.appendChild(color_child);
	}
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

defaultColors();

//don't show all the colors at the start
	
	let nodes = [ ...color_container.childNodes ]

	for(let i = 8; i < nodes.length; i++) {
		nodes[i].style.display = 'none';
	}

function showAllColors() {
	document.querySelector('.more_items').style.display = 'none';
	for(let i = 8; i < nodes.length; i++) {
		nodes[i].style.display = 'block';
	}
}

autocomplete(search_box,color_names)
