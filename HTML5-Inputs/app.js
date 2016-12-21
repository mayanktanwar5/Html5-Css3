
function survey(){
var nameInp = document.getElementById("name-inp");
var emailInp = document.getElementById("email-inp");
var countryInp = document.getElementById("country-inp");
var genderMale = document.getElementById("gender-male");
var genderFemale =document.getElementById("gender-female");
var sportsInterest = document.getElementsByClassName("sports");
var cuisineInterest = document.getElementsByClassName("cuisine");
var goSubmit =document.getElementById("showSubmit");
nameInp.addEventListener("blur",setName,false);
nameInp.addEventListener("change",setName,false);
emailInp.addEventListener("change",setEmail,false);
emailInp.addEventListener("blur",setEmail,false);
countryInp.addEventListener("change",setCountry,false);
genderMale.addEventListener("change",setGender,false);
genderFemale.addEventListener("change",setGender,false);
goSubmit.addEventListener("click",getLocalStorageValues,false);

for(var i=0;i<sportsInterest.length;i++)
{
sportsInterest[i].addEventListener("change",getAllSports,false);
};

for(var i=0;i<cuisineInterest.length;i++)
{
cuisineInterest[i].addEventListener("change",getAllCuisine,false);
};



var selectedCountry = countryInp.options[countryInp.selectedIndex].value;
enableZipCode(selectedCountry);
var zipCode = document.getElementById("zipCode-inp");
zipCode.addEventListener("blur",setZipCode,false);
zipCode.addEventListener("change",setZipCode,false);

var workExp =document.getElementById("workExp");
workExp.addEventListener("change",setWorkExp,false);


};

function setName(e)
{
	console.log(e.target.value);
	localStorage.setItem("name",e.target.value);
};

function setEmail(e)
{
	console.log(localStorage.getItem("name"));
	localStorage.setItem("email",e.target.value);
};

function setCountry(e)
{
	console.log(" country "+ e.target.options[e.target.selectedIndex].value);
	enableZipCode(e.target.options[e.target.selectedIndex].value);
	localStorage.setItem("country",e.target.options[e.target.selectedIndex].value);
};

function enableZipCode(country)
{	

	var zipCode = document.getElementById("zipCode-inp");
	if (country == "US")
	{
		zipCode.disabled =false;
		zipCode.setAttribute("placeholder","ZipCode Format  nnnnn or nnnnn-nnnn");
		zipCode.setAttribute("title","Format  nnnnn or nnnnn-nnnn "); 
		zipCode.setAttribute("pattern" ,"(\\d{5}([\\-]\\d{4})?)");
	}
	else if(country=="Aus")
	{
		zipCode.disabled =false;
		zipCode.setAttribute("placeholder","ZipCode Format  nnnn ");
		zipCode.setAttribute("title","Format  nnnn " );
		zipCode.setAttribute("pattern" ,"[0-9]{4}");
	}
	else if(country=="Brazil")
	{
		zipCode.disabled =false;
		zipCode.setAttribute("placeholder","ZipCode Format   nnnnn-nnn ");
		zipCode.setAttribute("title","Format   nnnnn-nnn " );
		zipCode.setAttribute("pattern" ,"[0-9]{5}[\\-]?[0-9]{3}");
	}	
	else if(country=="Japan")
	{
		zipCode.disabled =false;
		zipCode.setAttribute("placeholder","ZipCode Format   nnnnn-nnn ");
		zipCode.setAttribute("title","Format   nnn-nnnn " );
		zipCode.setAttribute("pattern" ,"\\d{3}-\\d{4}");
	}
	else
	{

	}
};

function setZipCode(e)
{

	localStorage.setItem("zipcode",e.target.value);
};

function setGender(e)
{
	localStorage.setItem("gender",e.target.value);
	console.log(localStorage.getItem("gender"));
};

function setWorkExp(e){
	var workExpValue=document.getElementById("workExpValue");
	workExpValue.value =e.target.value
	localStorage.setItem("workExp",e.target.value);
};

function getAllSports()
{
	var sportsInterest = document.getElementsByClassName("sports");
	var sportsSelected ="";
	for(var i=0;i<sportsInterest.length;i++)
	{
		
	 if(sportsInterest[i].checked==true)
	 {
	 	sportsSelected +=" "+sportsInterest[i].value; 
	 };
    };
    setSportsValue(sportsSelected);
};
function getAllCuisine(){
	var cuisineInterest = document.getElementsByClassName("cuisine");
	var cuisineSelected ="";
	for(var i=0;i<cuisineInterest.length;i++)
	{
		
	 if(cuisineInterest[i].checked==true)
	 {
	 	cuisineSelected +=" "+cuisineInterest[i].value; 
	 };
     };

setCuisineValue(cuisineSelected);
};

function setSportsValue(e){

localStorage.setItem("sports",e);
};
function setCuisineValue(e){

localStorage.setItem("cuisine",e);
};

function getLocalStorageValues(){
	console.log("ghet storag" +localStorage.name +"  " +document.getElementById("viewName"));

document.getElementById("viewName").innerText+= " "+ localStorage.getItem("name");
document.getElementById("viewEmail").innerText+=" "+localStorage.getItem("email");
document.getElementById("viewGender").innerText+=" "+localStorage.getItem("gender");
document.getElementById("viewCountry").innerText+=" "+localStorage.getItem("country");
document.getElementById("viewExperience").innerText+=" "+localStorage.getItem("workExp");
document.getElementById("viewSports").innerText+=" "+localStorage.getItem("sports");
document.getElementById("viewCuisine").innerText+=" "+localStorage.getItem("cuisineSelected");


};

// window.addEventlistener('DOMContenetLoaded',survey,false);
window.addEventListener( 'DOMContentLoaded', survey, false);

