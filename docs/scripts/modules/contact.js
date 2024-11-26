export const contact = () => {
    const closeBtn = document.querySelector('#contact__close'),
        overlay = document.querySelector('.overlay'),
        modal = document.querySelector('.submit__form'),
        headerBtn = document.querySelector('.header__btn'),
        submitBtn = document.querySelector('.form__submit-btn'),
        phoneInput = document.querySelector('#input__phone'),
        successModal = document.querySelector('.form__success'),
        formContent = document.querySelector('.form__content'),
        successClose = document.querySelector('#success__close'),
        successBtn = document.querySelector('.success__btn'),
        heroBtn = document.querySelector('.hero__btn'),
        burgerBtn = document.querySelector('.burger__btn')

    headerBtn.addEventListener('click', () => {
        document.body.style.overflow = "hidden"
        modal.classList.add('active')
        successModal.classList.remove('active')
        formContent.classList.add('active')
    })
    heroBtn.addEventListener('click', () => {
        document.body.style.overflow = "hidden"
        modal.classList.add('active')
        successModal.classList.remove('active')
        formContent.classList.add('active')
    })
    burgerBtn.addEventListener('click', () => {
        document.body.style.overflow = "hidden"
        modal.classList.add('active')
        successModal.classList.remove('active')
        formContent.classList.add('active')
    })

    closeBtn.addEventListener('click', () => {
        document.body.style.overflow = "auto"
        modal.classList.remove('active')
        formContent.classList.remove('active')
    })
    overlay.addEventListener('click', () => {
        document.body.style.overflow = "auto"
        modal.classList.remove('active')
        formContent.classList.remove('active')
    })
    successClose.addEventListener('click', () => {
        document.body.style.overflow = "auto"
        modal.classList.remove('active')
        formContent.classList.remove('active')
    })
    successBtn.addEventListener('click', () => {
        document.body.style.overflow = "auto"
        modal.classList.remove('active')
        formContent.classList.remove('active')
    })

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const res = checkError()
        if(res == true){
            return
        }

        formContent.classList.remove('active')
        successModal.classList.add('active')
    })

    const prefixNumber = (str) => {
        if (str === "7") {
            return "7 ("
        }
        if (str === "8") {
            return "8 ("
        }
        if (str === "9") {
            return "7 (9"
        }
        return "7 ("
      }
      
      phoneInput.addEventListener("input", (e) => {
        const value = phoneInput.value.replace(/\D+/g, "")
        const numberLength = 11
      
        let result;
        if (phoneInput.value.includes("+8") || phoneInput.value[0] === "8") {
            result = ""
        } else {
            result = "+"
        }
      
        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
                case 0:
                    result += prefixNumber(value[i]);
                    continue;
                case 4:
                    result += ") "
                    break;
                case 7:
                    result += "-"
                    break;
                case 9:
                    result += "-"
                    break;
                default:
                    break;
          }
          result += value[i]
        }
        phoneInput.value = result
      })
    function checkError(){
        const inputs = document.querySelectorAll('.required'),
        allErr = document.querySelector('#all__err')
        let catchErr = false
        
        inputs.forEach(input => {
            const inputValue = input.querySelector('input')
            if(!inputValue || inputValue.value.trim() == ""){
                input.nextElementSibling.classList.add('active')
                input.classList.add('inp__err')
                allErr.classList.add('active')
                catchErr = true
            }
            else{
                input.nextElementSibling.classList.remove('active')
                input.classList.remove('inp__err')
                allErr.classList.remove('active')
            }
        })

        return catchErr
    }
}