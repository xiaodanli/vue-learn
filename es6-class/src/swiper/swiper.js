class Swiper{
    constructor(wrap,options){
        this.container = this.getDom(wrap);
        this.wrapper = this.getDom('.swiper-wrapper',this.container);
        this.slides = Array.from(this.wrapper.children);
        this.default = {
            init:0,
            direction:'horizontal',
            autoplay:false
        }
        this.options = Object.assign({},this.default,options);
        this.init();
    }

    init(){
        this.setStyle();
        this.options.pagination && this.pagination();
        this.options.navigation && this.navigation();
        this.options.autoplay && this.autoplay();
    }

    autoplay(){
        // this.move()
        this.container.onmouseenter = () => {
            clearInterval(this.timer);
        }
        this.container.onmouseleave = () => {
            this.autoplay();
        }
        this.timer = setInterval(this.nextEvent.bind(this),this.options.autoplay);
    }

    navigation(){
        let {preEl,nextEl} = this.options.navigation;

        this.preEl = this.getDom(preEl,this.container);
        this.nextEl = this.getDom(nextEl,this.container);

        this.preEl.style.display = 'block';
        this.nextEl.style.display = 'block';

        this.preEl.onclick = () => {
            this.options.init--;
            this.options.init = this.options.init < 0 ? this.length-1 : this.options.init;
            this.move();
        }

        this.nextEl.onclick = this.nextEvent.bind(this);
    }

    nextEvent(){
        this.options.init++;
        this.options.init = this.options.init > this.length - 1 ? 0 : this.options.init;
        this.move();
    }

    move(){
        let style = this.options.direction === 'horizontal' ? 'marginLeft' : 'marginTop';
        let direc = this.options.direction === 'horizontal' ? 'w' : 'h';
        this.wrapper.style.transition = 'all .3s';
        this.wrapper.style[style] = `-${this[direc] * this.options.init}px`;
    }

    pagination(){
        this.pagination = this.getDom(this.options.pagination.el,this.container);
        for(let i = 0;i < this.length;i++){
            let li = document.createElement('li');
            this.pagination.appendChild(li);
            if(i === 0){
                li.classList.add('active');
            }
        }
    }

    setStyle(){
        console.log("======")
        this.w = this.container.offsetWidth;
        this.h = this.container.offsetHeight;
        
        this.slides.forEach((item) => {
            item.style.width = `${this.w}px`;
            item.style.height = `${this.h}px`;
        })

        this.length = this.slides.length;

        if(this.options.direction === 'horizontal'){
            this.wrapper.style.width = `${this.w*this.length}px`;
            this.wrapper.style.h = `${this.h}px`;
            this.slides.forEach(item => {
                item.style.float = 'left';
            })
        }else{
            this.wrapper.style.width = `${this.w}px`;
            this.wrapper.style.h = `${this.h*this.length}px`;
            this.slides.forEach(item => {
                item.style.float = 'none';
            })
        }
    }

    getDom(eleCls,parent){
        return typeof eleCls === 'object' ? eleCls : (parent||document).querySelector(eleCls);
    }
}

new Swiper('.swiper-container',{
    navigation: {
        preEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next'
    },
    pagination:{
        el:'.swiper-pagination'
    },
    autoplay:2000,
    direction:'vertical'   
})