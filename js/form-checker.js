class formChecker{
	constructor(sSelector){
     this.form = document.querySelector(sSelector);
     this.textfields = this.form.querySelectorAll(`.b-textfield`);
     this.errorMessage = this.form.querySelector(`.b-form__message`);
     console.log(this.textfields);

     for (let i = 0; i < this.textfields.length; i++){
     	this.textfields[i].addEventListener(`blur`, this.checkTextfield.bind(this));
         }

     this.form.addEventListener(`submit`, this.checkTextfieldsList.bind(this));  
     

	}

	checkTextfield(event, textfield){
      let currentTextfield = textfield ? textfield : event.target,
          currentTextfieldVal = currentTextfield.value,
          regexlist = {
          "name"        : "^[A-Za-zA-Яа-я\\-\\.,\s]{1,10}$",
          "email"       : "^[a-z0-9\\.\\-_]+@[a-z0-9\\-]+\\.[a-z]{2,8}(\\.[a-z]{2,8})?$",
          "tel"         : "^\\+38 ([0-9]{3} ){2}[0-9]{2} [0-9]{2}$",
          "description" : "^.+$"
        },
          currentTextfieldName = currentTextfield.getAttribute(`name`),
          currentRegExp = new RegExp(regexlist[currentTextfieldName]),
          isTextfieldError = ! currentRegExp.test(currentTextfieldVal);
         
          currentTextfield.classList.toggle(`b-textfield_error`, isTextfieldError);
          return isTextfieldError;
	   }

     checkTextfieldsList(event){
        event.preventDefault();
        
        let isFormError = false;
        let arr = [];
          [].slice.call(this.textfields).forEach(function(item, index){
               arr.push(item);
            });
           
          for(let elem of arr){  
          let currentTextfield = elem,
          isTextfieldError = this.checkTextfield(null, currentTextfield);
            if(isTextfieldError){
               isFormError = true;
             }
           }

           if(isFormError){
               this.errorMessage.classList.add(`b-form__message_error`);
           }
           else{
               this.errorMessage.classList.remove(`b-form__message_error`);
           }
          
     }
}
