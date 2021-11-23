import {accData} from "./accData.js";
class Accordion {
    constructor(parent, data) {
        this.data = data;
        this.parent = parent;
    }

    init() {
        this.selectors = {
            ctx: ['js-wrap'],
            accordionContainer: ['accordion__wrap', 'js-accordion-wrap'],
            button: ['js-accordion-button'],
            contentWrap: ['js-content-wrap'],
            content: ['js-content-text'],
        }
        // this.stateClasses = {
        //     accActive: ['accordion__wrap--active']
        // }

        this.ctx = this.createCtx();
        this.createComponent();
        
    }

    createCtx() {
        let ctx = document.createElement("section");
        ctx.classList.add(this.selectors.ctx);
        document.querySelector(this.parent).append(ctx);
        return ctx;
    }

    createComponent() {
        this.createEl();
        this.handleButton();
    }

    createEl() {
        accData.items.forEach((el) =>
        {
            let container = document.createElement('div');
            container.classList.add(...this.selectors.accordionContainer);
            let innerHtml = `<button class='accordion__button js-accordion-button'>${el.title}</button>
                                <div class='accordion__content-wrap js-content-wrap'>
                                    <p class="accordion__content-text js-content-text">${el.content}</p>
                                </div>`    
           container.innerHTML = innerHtml;
            this.ctx.append(container);
            // console.log(container);
        })  
    }

    handleButton() {
        let button = this.ctx.querySelectorAll('.'+this.selectors.button);
        //console.log(button);
        button.forEach((el) => {
            el.addEventListener("click", this.handleClick.bind(this));
        })
        //console.log(this);
    }

    handleClick(e) {
        let clicked = e.target;
        // console.log(clicked);
        let contentWrap = clicked.closest('.js-accordion-wrap').querySelector('.'+this.selectors.contentWrap);
        console.log(contentWrap);
        if(contentWrap.classList.contains("active")) {
            //console.log(!contentWrap.style.height);
            contentWrap.classList.remove("active");
            contentWrap.style.height = null;
            //console.log(contentWrap.style.height);

        }
        else {
            let active = this.ctx.querySelectorAll("."+this.selectors.contentWrap);
            this.removeActive(active);
            this.addHeight(contentWrap);
        }
    }
    
    removeActive(el) {
        el.forEach(el => {
            el.classList.remove("active");
            el.style.height = null;
        })
    }

    addHeight(el) {
        el.classList.add("active");
        el.style.height = el.scrollHeight + "px";
    }
    
  
}



function createAccordion() {
    let Accordionn = new Accordion(".main", accData);
    Accordionn.init();
}

createAccordion(); 
createAccordion(); 