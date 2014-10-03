function save(){
		var fieldValue1 = document.getElementById('PostHeading').value;
		localStorage.setItem('Heading', fieldValue1);
	};

$('document').ready(function(){
		
	console.log("We are live!");
	$('#ButtonPost').click(function(){
		console.log('waddup'); 
		window.location.href='index.html';
	}); 

	$('#refresh').click(function(){ 
	
	console.log(localStorage.getItem('Heading'));
	$('#ContentItemsHome').animate({height: "+=150px"}); 
	$('#ContentItemsHome').append("<div id='BlogSnippet'><img src ='Images/tumblr_inline_nbyfyx3TaW1rvzuyz.jpg' id='BlogPicture2'><div id='SummaryHeader'><center><h2 class='headers'>"+localStorage.getItem('Heading')+"</h2></center></div></div> ");  
	$('#ContentBlockHome').animate({height: "+=150px"});
});
}); 


