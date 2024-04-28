let closer = document.querySelector('#closer')
let navbar = document.querySelector('.navbar')
let cart = document.querySelector('.shopping-cart')
let login = document.querySelector('.login-form')
let searchForm = document.querySelector('.header .search-form')



closer.addEventListener('click' , function () {
    closer.style.display = 'none'
    navbar.classList.remove('active')
    cart.classList.remove('active')
    login.classList.remove('active')
})


document.querySelector('#menu-btn').addEventListener('click' , function () {
    closer.style.display = 'block'
    navbar.classList.toggle('active')
})



document.querySelector('#cart-btn').addEventListener('click' , function () {
    closer.style.display = 'block'
    cart.classList.toggle('active')
})


document.querySelector('#login-btn').addEventListener('click' , function () {
    closer.style.display = 'block';
    login.classList.toggle('active')
})


document.querySelector('#search-btn').addEventListener('click' , function () {
    searchForm.classList.toggle('active')
})

window.addEventListener('scroll' , function () {
    searchForm.classList.remove('active')
})






let slides = document.querySelectorAll('.home .slides-container .slide')
let index = 0

console.log(slides);

function next() {
    slides[index].classList.remove('active')
    index++
    if (index > slides.length - 1) {
        index = 0
    }
    slides[index].classList.add('active')

}


function prev() {
    slides[index].classList.remove('active')
    index-- 
    if (index < 0) {
        index = slides.length - 1
    } 
    slides[index].classList.add('active')
}





////////////// shop page ////////////


let products = [
    {id: 1 , name: 'Modern Furniture' , price: 140 , count: 1 , img: 'img/vecteezy_blue-fabric-armchair-soft-brown-cushion-with-wooden-armrest_11794198_991-min.png'},
    {id: 2 , name: 'Modern Furniture' , price: 200 , count: 1 , img: 'img/image-from-rawpixel-id-12160326-original-min.png'},
    {id: 3 , name: 'Modern Furniture' , price: 150 , count: 1 , img: 'img/Lovepik_com-401659042-sofa-chair.png'},
    {id: 4 , name: 'Modern Furniture' , price: 240 , count: 1 , img: 'img/image-from-rawpixel-id-12162994-original-min.png'},
    {id: 5 , name: 'Modern Furniture' , price: 180 , count: 1 , img: 'img/—Pngtree—single comfort noise style sofa_4372281.png'},
    {id: 6 , name: 'Modern Furniture' , price: 140 , count: 1 , img: 'img/Lovepik_com-401659042-sofa-chair.png'},
    {id: 7 , name: 'Modern Furniture' , price: 130 , count: 1 , img: 'img/—Pngtree—home pink single sofa chair_4430495.png'},
    {id: 8 , name: 'Modern Furniture' , price: 170 , count: 1 , img: 'img/image-from-rawpixel-id-12135859-original (1)-min.png'},
]


let BasketArr = []


let container = document.querySelector('.products .box-container')
let shopCart = document.querySelector('.shopping-cart')
let total = document.querySelector('.total')


let frog = document.createDocumentFragment() 


products.forEach(function(item) {
    let div = document.createElement("div");
    div.className += "box";

    let icon = document.createElement('div')
    icon.classList.add('icons')
    let a1 = document.createElement('a')
    a1.setAttribute('href' , '#')
    a1.className = 'fas fa-shopping-cart'
    a1.addEventListener('click' , function() {
        addToBasket(item.id)
    })

    let a2 = document.createElement('a')
    a2.setAttribute('href' , '#')
    a2.className = 'far fa-heart'
    
    let a3 = document.createElement('a')
    a3.setAttribute('href' , '#')
    a3.className = 'fas fa-eye'

    icon.append(a1,a2,a3)

    let image = document.createElement('div')
    image.classList.add('image')

    let img = document.createElement('img')
    img.setAttribute('src' , item.img)

    image.append(img)


    let content = document.createElement('div')
    content.classList.add('content')

    let price = document.createElement('div')
    price.classList.add('price')
    price.innerHTML = `$${item.price}`

    let h3 = document.createElement('h3')
    h3.innerHTML = item.name

    let stars = document.createElement('div')
    stars.classList.add('stars')

    let i1 = document.createElement('i')
    i1.className = 'fas fa-star'
    let i2 = document.createElement('i')
    i2.className = 'fas fa-star'
    let i3 = document.createElement('i')
    i3.className = 'fas fa-star'
    let i4 = document.createElement('i')
    i4.className = 'fas fa-star'
    let i5 = document.createElement('i')
    i5.className = 'fas fa-star'
    let span = document.createElement('span')
    span.innerHTML = '(50)'
    
    stars.append(i1,i2,i3,i4,i5,span)

    content.append(price,h3,stars)

    div.append(icon , image , content)
    frog.append(div)
    
})
container.append(frog)


  
function addToBasket(id){

    let check = BasketArr.find(function(item){
        return item.id === id
    })

    let FindItem =  products.find(function(item) {
           return item.id === id
       })


    if (check){
        check.count++
    } else {

        BasketArr.push(FindItem)
    }




    createBasket(BasketArr)

}


let frog2 = document.createDocumentFragment()



function createBasket(BasketArr) {
    shopCart.innerHTML = ''
    BasketArr.forEach(function(item){
        let box = document.createElement('div')
        box.classList.add('box')

        let i = document.createElement('i')
        i.className = 'fas fa-trash-alt'
        i.addEventListener('click' , function() {
            removeFromBasket(item.id)
        })

        let img = document.createElement('img')
        img.setAttribute('src' , item.img)

        let content = document.createElement('div')
        content.classList.add('content')
        let h3 = document.createElement('h3')
        h3.innerHTML = item.name

        let span1 = document.createElement('span')
        span1.classList.add('quantity')

        let input = document.createElement('input')
        input.setAttribute('type' , 'number')
        input.setAttribute('min' , item.count)
        input.value = item.count
        input.addEventListener('change' , function () {
            changeCount(item.id , input.value)
        })
        span1.append(input)

        let span2 = document.createElement('span')
        span2.classList.add('multiply')
        span2.innerHTML = 'x'

        let span3 = document.createElement('span')
        span3.classList.add('price')
        span3.innerHTML = `$${item.price}`

        content.append(h3,span1,span2,span3)
        box.append(i,img,content)


        frog2.append(box)

    })

    let h3Total = document.createElement('h3')
    h3Total.classList.add('total')
    h3Total.style.bottom = '0'
    let spanTotal = document.createElement('span')
    spanTotal.innerHTML = '$00'
    h3Total.append(spanTotal)

    let btn = document.createElement('a')
    btn.classList.add('btn')
    btn.style.bottom = '0'
    btn.setAttribute('href' , '#')
    btn.innerHTML = 'checkout cart'
    shopCart.append(frog2,h3Total,btn)

    price(BasketArr)

}


function price(BasketArr , spanTotal) {

    let result = 0
    let totalSpan = document.querySelector('.total span')

    BasketArr.forEach(function(item) {
        result += item.price * item.count
        totalSpan.innerHTML = `$${result}`
    })

}


function removeFromBasket(id) {
  let remove = BasketArr.findIndex(function(item){
        return item.id === id
    })
    BasketArr.forEach(function(item){
        if(item.id === id) {
            item.count = '1'
        }
    })
    BasketArr.splice(remove , '1')
    createBasket(BasketArr)
}

function  changeCount(id , inputValue ) {
  BasketArr.forEach(function(item){
    if(item.id === id){
        item.count = inputValue
    }
  })
  price(BasketArr)
}