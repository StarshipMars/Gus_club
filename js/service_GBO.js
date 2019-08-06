          // ---------- Поиск в header -----------//

let searchForm = document.querySelector(`.form_search`);
    searchForm.addEventListener(`click`, showField);

    function showField(event){
    	//console.log(this);
      document.querySelector(`.zoom`).remove();
      let value = ``;
      value += `<input type="text" class="active_search">`;
      value += `<input type="submit" class="send">`;
      this.innerHTML = value;
      this.classList.add(`active`);

      let currentForm = this;

      searchForm.removeEventListener(`click`, showField);

      let input = document.querySelector(`.active_search`);

      input.addEventListener(`blur`, function(event){
          currentForm.innerHTML = ``;
          currentForm.classList.remove(`active`);
          let addElem = `<a href="#" class="zoom"><img src="img/search.png" alt=""></a>`;
          currentForm.innerHTML = addElem;
          searchForm.addEventListener(`click`, showField);
      });
    }



    //--------------- Форма - "Желаете получить бесплатную консультацию" -------------//

let buttons = document.querySelectorAll(`.btn_order`);
 for(let i = 0; i < buttons.length; i++){
 	buttons[i].addEventListener(`click`, showForm);
 }


 function showForm(event){
    let preview = document.querySelector(`.preview`);
    preview.classList.add(`preview_shown`);

    preview.addEventListener(`click`, function(event){
          if(event.target.classList.contains(`preview`) || event.target.classList.contains(`cross`)){
             this.classList.remove(`preview_shown`);
          }
    });
    

 }

    //----------- Подставление количества цилиндров и соответствующего текста в форму-------//

let arrows = document.querySelectorAll(`.arrow_left`);
let sumCylinders = document.querySelector(`.generation_to`);
let currentText = document.querySelector(`.describe`);

  for(let i = 0; i < arrows.length; i++){
  arrows[i].addEventListener(`click`, pasteData);
}

  function pasteData(event){
     let currentArrow = event.target.dataset.number;
     sumCylinders.innerHTML =``;
     currentText.innerHTML = ``;
     let previewTwo = document.querySelector(`.preview_2`);
     previewTwo.classList.add(`preview_shown`);

      previewTwo.addEventListener(`click`, function(event){
         if(event.target.classList.contains(`preview_2`) || event.target.classList.contains(`cross`)){
             this.classList.remove(`preview_shown`);
          }
      });

     fetch(`info.json`).then(function(response){
          return response.json();
     }).then(function(obj){
        sumCylinders.innerHTML = obj[currentArrow]['title'];
        currentText.innerHTML = obj[currentArrow]['text'];
           //console.log(obj);
     }).catch(function(error){
         console.error(`Something went wrong with retrieving the data !`);
         //console.error(error);
     });
  }