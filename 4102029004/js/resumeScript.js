function show(){
	var name = document.forms['resume']['username'].value;
	var birthday = document.forms['resume']['birthday'].value;
	var gender = document.forms['resume']['gender'].value;
	var note = document.forms['resume']['note'].value;
	var hobby = "";
	for (i=0; i<document.forms['resume']['hobby'].length; i++){
		if (document.forms['resume']['hobby'][i].checked){
			hobby += document.forms['resume']['hobby'][i].value + " ";
		}
	}
	if (name == "" || birthday == "") {
		alert("Name and birthday must be filled out");
		return false;
	}
			
	var tableName = document.getElementById("tableName");
	var tableBirthday = document.getElementById("tableBirthday");
	var tableGender = document.getElementById("tableGender");
	var tableHobby = document.getElementById("tableHobby");
	var tableNote = document.getElementById("tableNote");
	tableName.innerHTML = name;
	tableBirthday.innerHTML = birthday;
	tableGender.innerHTML = gender;
	tableHobby.innerHTML = hobby;
	tableNote.innerHTML = note;
}
