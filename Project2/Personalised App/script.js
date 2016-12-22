
(function(){
	answerSubmit();

	})();


function reset()
{
	document.getElementById("question1").setAttribute('class','');
	document.getElementById("question2").setAttribute('class','hide');
	document.getElementById("question3").setAttribute('class','hide');
	document.getElementById("question4").setAttribute('class','hide');
}

function answerSubmit()
{
	var buttonClick =document.getElementsByTagName("BUTTON");
	
	for(var i=0; i<buttonClick.length;i++)
	{
		buttonClick[i].addEventListener('click',function(e){
			e.preventDefault();
			var ans =this.parentNode.children[1].value;
			var ques=this.getAttribute('data-ques');
			localStorage.setItem(ques,ans);
			if(ans.trim()!=='')
			{	
				console.log(ques);
				switch(ques)
				{

					case "question1": 
					this.parentNode.children[0].setAttribute('class','ques text-center moveLeft');
					this.parentNode.children[1].setAttribute('class','form-control moveRight');
					this.setAttribute('style','opacity:0');
					nextQues(ques);
					break;
					case "question2":
					this.parentNode.parentNode.setAttribute('class','flipUp');
					nextQues(ques);
					break;
					case "question3":
					document.getElementById("survey").setAttribute('style','perspective:none');
					this.parentNode.parentNode.setAttribute('class','fadeDown');
					this.setAttribute('style','opacity:0');
					nextQues(ques);
					break;
					case "question4":
					this.parentNode.parentNode.setAttribute('class','faceFade');
					this.setAttribute('style','opacity:0');
					nextQues(ques);
					break;
				}
			}

			else
			{
				alert("Please enter a value");
			}
	
			
			
			},false);
	};
	
};

function nextQues(ques)
{ setTimeout(function(){
	var next = ques.substring(ques.length-1,ques.length);
	next*=1;
	if(next<=3)
	{
		document.getElementById("question"+(next)).setAttribute('class','hide');
		next+=1;
		console.log(next);
		next="question"+next;
		console.log(next);
		document.getElementById(next).setAttribute('class','');
	}
	else if(next==4)
	{
		document.getElementById("question"+(next)).setAttribute('class','hide');
		displayCard();	
	}
	},300)
}

function displayCard()
{
	document.getElementById("surveyResult").setAttribute('class','');
}