const pageHeight = document.body.clientHeight - window.innerHeight;
const circle = document.querySelector('.progress');
const svg = document.querySelector('svg');

document.addEventListener('scroll',function(){
  let scrollPos =  window.scrollY 
  
	
  if(!scrollPos) svg.style.opacity = 0;
  if(scrollPos) svg.style.opacity = 1;

	
  let darshOffset = 300 - scrollPos/pageHeight * (300 - 100);

	
  circle.style.setProperty('--dashOffset', darshOffset);
})
			