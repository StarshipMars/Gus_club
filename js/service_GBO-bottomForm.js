  window.onload = function(){

  window.addEventListener(`scroll`, scrollToBottom);

  let previewThree = document.querySelector(`.preview_3`);
  let bottomForm = document.querySelector(`.form_3`);

  function scrollToBottom(){

  let scroll = window.scrollY;
  let scrolled = window.pageYOffset;

  	if(scroll > 3900){
   showBottomForm();
     }
 

    function showBottomForm(){
 	    previewThree.classList.add(`preview_shown`);
 	    bottomForm.classList.add(`appear-form3`);
     }

    previewThree.addEventListener(`click`, function(event){
      if(event.target.classList.contains(`preview_3`) || event.target.classList.contains(`cross`)){
        this.classList.remove(`preview_shown`);
        window.removeEventListener(`scroll`, scrollToBottom);
      }
    });
  }

  let orderRing = document.querySelector(`.order_ring`);

   orderRing.addEventListener(`click`, function(event){
      //let previewThree = document.querySelector(`.preview_3`);
      previewThree.classList.add(`preview_shown`);
   });
}


  
  

  

 
