//const title = document.querySelector(".card__title");
const titles = document.querySelectorAll(".card__title");
// const letters = title.innerHTML.split("");


// title.innerHTML = "";
// title.style.opacity = 1;



function splitCardTitle(cardTitle) {
    const letters = cardTitle.innerHTML.split("");
    const cardTitleTop = cardTitle.offsetTop;
    cardTitle.innerHTML = "";
    cardTitle.style.opacity = 1;

    const spanArray = letters.map((letter) => {
        const item = document.createElement('span')
        item.classList.add('title__letter')
        item.innerHTML = letter;
        cardTitle.appendChild(item)

        const rect = item.getBoundingClientRect()
        item.style.left = rect.left + 'px';
        item.x = rect.left
        item.style.top = rect.top + 'px';
        item.y = rect.top
        return item
    })

// spanArray.forEach((span)=>{
//     span.style.position="relative";
// })
}

titles.forEach(title => {
    appearTitle(title)
    //splitCardTitle(title);
    //test(title);
    //cardTitleAppear(title);
   // console.log(title);
    //return title;
})

function appearTitle(elem){
    elem.style.opacity = 1;
}



function cardTitleAppear(item) {
    const titleTop = item.offsetTop
    if (window.scrollY >= titleTop) {
        console.log("Работает")
        gsap.to(item, {
            duration: .5,
            opacity: 1,
            top: 100,
            delay: function (i, el) {
                return i * .05
            },
        })
    }
}

function test(item){
    if(window.scrollY >= item.offsetTop){
        console.log( `пройден заголовок ${item}`)
    }
}

window.addEventListener('scroll' , appearTitle )

//window.onscroll = function() {cardTitleAppear()};


// setTimeout(() => {
//     gsap.to('.title__letter', {
//         duration: .5,
//         opacity: 1,
//         top:100,
//         delay: function(i, el){
//            return  i * .05
//     },
//     })
// }, 1000)

