function displayNameFunct() {
    var cName = document.getElementById("client_name").value;
    document.getElementById("say_hello").innerHTML = "Hi there, " + cName + "!";
}

function displayTime() {
    var today = new Date();
    var h = today.getHours();
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());

    document.getElementById("dispTime").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(displayTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function ageCalc() {
    var inputedAge = document.getElementById("client_age").value;
    var dob = new Date(inputedAge);
    document.getElementById("ageDisp").innerHTML = "Based on your birth date, you are " + ~~((Date.now() - dob) / (31557600000)) + " years old.";
}

function genDescription() {
    var inCity = document.getElementById("city").value;
    var inFav = selectionOccupation(document.getElementById("selAnimal"));
    var inOcup = selectionOccupation(document.getElementById("selOccup"));
    var inFood = checkboxSelection(document.getElementsByName("food"));
    var inGen = checkboxSelection(document.getElementsByName("gender"));

    document.getElementById("dispDescrip").innerHTML = "This is what I got from your selections. You love "+inCity+" and you are a/an "+inOcup+" of gender: "+inGen+". Your fav animals are "+inFav+" and your fav food is "+inFood+". Nice to meet you!";
}

function selectionOccupation(e) {
    var val = e.options[e.selectedIndex].value;
    var inTxt = e.options[e.selectedIndex].text;
    return inTxt;
}

function checkboxSelection(checkB) {
    var selectedItems = "";

    for (var i = 0; i < checkB.length; i++) {
        if (checkB[i].checked == true) {
            selectedItems += checkB[i].value + " ";
        }
    }

    return selectedItems;
}