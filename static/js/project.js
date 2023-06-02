const boxes=document.querySelectorAll('.projectbox');

window.addEventListener('scroll',()=>{
    const triggle=window.innerHeight*0.8;
    boxes.forEach((item)=>{
        const boxTop=item.getBoundingClientRect().top;

        if(boxTop<triggle){
            boxTop.classList.add('show')
        }else{
            boxTop.classList.remove('show')
        }
    })
})