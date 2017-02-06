/* encoding="UTF-8" */
var entry = document.getElementById('entry'),
    change1 = document.getElementsByName('change'),
    firstname = document.getElementById('firstname');

function test1() {
    var error = isNaN(entry.value),
        pattern = new RegExp(/^[0-9]+$/),
        check = entry.value.match(pattern);
    if (entry.value == "") {
        entry.value = 0;
    }
    else if (error == true || check == null) {
        entry.value = 0;
        alert("Please enter numbers.");
    }
    else {
        parseInt(entry.value);
    };
};
function test2() {
    var pattern = new RegExp(/^(?=.*?[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ])[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ+]+$/),
        check = firstname.value;
    if(!pattern.test(check)){
        firstname.value="";
	    alert("Please enter first name (only letters)");
      };
};
function plusminus() {
    if (this.value == '+') {
        entry.value++
    }
    else if (this.value == '-') {
        entry.value--
    };
};
function mal1() {
    var number = document.getElementById('entry').value,
        firstname = document.getElementById("firstname").value.length,
        result = (parseInt(firstname)) * (parseInt(number));
    document.getElementById('result').innerHTML = result;
}

entry.addEventListener('blur', test1);
change1[0].addEventListener('click', plusminus);
change1[1].addEventListener('click', plusminus);
firstname.addEventListener('blur', test2);
document.getElementById('submit').addEventListener('click', mal1);
