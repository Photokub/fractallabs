const itemsAnimated = document.querySelectorAll('.title , .text , .button' )

window.addEventListener('scroll' , animOnScroll)
function animOnScroll() {
    for (i = 0; i < itemsAnimated.length; i++) {
        const animItem = itemsAnimated[i];
        const animItemHeight = animItem.offsetHeight;    // высота объекта
        const animItemOffset = offset(animItem).top;   //позиция относительно верха старницы
        const animStart = 4;  //коэфициент регулировки момента старта анимации

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart
        }

        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
            animItem.classList.add("appearance-active")
        } else {
            animItem.classList.remove("appearance-active")
        }
    }

    function offset(el) {  //кроссбрауузерно получает значение сверху и слева
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft,}
    }
}


