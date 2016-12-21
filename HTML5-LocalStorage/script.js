function storeData(price,name)
{
	localStorage.setItem("name",name);
	localStorage.setItem("price",price);

};

function showStoreData()
{	var start =document.querySelector("#showList");
	var li="";
   
for(name in localStorage)
{
	if(name=="name")
	{

	 li +="<li>"+name+":  "+ localStorage.getItem(name)+"</li>" ;

	}
	else if(name=="price")
	{

	 li +="<li> price:  "+ localStorage.getItem(name)+"</li>" ;

	};
};
start.innerHTML="<ul>"+li+"</ul>";

}

window.load=
showStoreData();

	