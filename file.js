 
 document.getElementById('loginButton').addEventListener('click',
  function(){

  		document.querySelector('.bg-modal').style.display = 'flex';

  });

 document.querySelector('.close').addEventListener('click',
 	function(){

 		document.querySelector('.bg-modal').style.display = 'none';
 	});