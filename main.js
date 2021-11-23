import { accData } from "./accData.js";
console.log(accData);

let accordion = document.querySelector('.accordion');
accordion.innerHTML = accData.mainTitle;

class Accordion {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
     createAccordion() {
        // let mainWrapper = createElement({
        //     classes: ["main-wrapper"]
        // })
        let accordionWrapper = createElement(
            {
                classes: ["accordion__wrapper"]
            }
        )
    
        let accTitle = createElement( {
            classes: ["accordion__title"],
            text: this.title
             }
        )
    
        let accContentWrap = createElement(
            {
                classes: ["accordion__content"],
            }
        )
        
        let accContent = createElement (
            {
                tag: "p",
                text: this.content
            }
        )
    
    
    
        accContentWrap.append(accContent);
        accordionWrapper.append(accTitle);
        accordion.append(accordionWrapper);
        accordion.append(accContentWrap);
        
    
    }
    
    
}

//static metoda 
// da li mogu objekti da budu u konstruktoru

function createElement(args) {
    let obj = {
        tag: "div",
        classes: ["default"],
        text: "",
        attributes: {
            ...args.attributes
        },
        ...args
    }
    let element = document.createElement(obj.tag);
    element.classList.add(...obj.classes);
    createAttributes(element, obj.attributes);
    element.innerText = obj.text;
    return element;
}

function createAttributes(element, attribute) {
  for(let key in attribute) {
      element.setAttribute(key, attribute[key]);
  }
}



accData.items.forEach((el) => {
    let x = new Accordion(el.title, el.content).createAccordion();
}) 

accData.items.forEach((el) => {
    let y = new Accordion(el.title, el.content).createAccordion();
}) 


let wrapper = document.querySelectorAll('.accordion__wrapper');
console.log(wrapper);


for(let i = 0; i < wrapper.length; i++) {
    wrapper[i].addEventListener('click',function () {
       
        let accordion__wrapper = this.nextElementSibling;
        if (accordion__wrapper.style.height){
            accordion__wrapper.style.height = null;
        } else {
          let active = document.querySelectorAll(".accordion__wrapper.active");
          console.log(active);
          for(let j = 0; j < active.length; j++){
            active[j].classList.remove("active");
            active[j].nextElementSibling.style.height = null;
          }
          this.classList.toggle("active");
          console.log(this);
          accordion__wrapper.style.height = accordion__wrapper.scrollHeight + "px";
        }
       
        // this.classList.toggle('active');

    })
}

//forEach!!!!!!
//resuable funkcije



// wrapper.forEach((el) => {
//     el.addEventListener('click', function () {
//         this.classList.toggle('active');
//     })
// })

// let a = "Andjela";
// let b = "Dara";
// let c = `<p>${a}</p>
//          <div>${b}</div>`

//          console.log(c);