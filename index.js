



async function getData(){
    let res = await fetch('https://fakestoreapi.com/products')
    let data  = await res.json()
    appender(data)
}
getData()


let cart = []
function appender(data){
    let main = document.querySelector('.main')
    data.forEach((x)=>{
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let btn = document.createElement('button')
        let image = document.createElement('img')
        p1.innerHTML = `<b> <i> Title: ${x.title} </i> </b>`
        p2.innerHTML = `<b> <i> Category: ${x.category} </i> </b>`
        p3.innerHTML = `<b> <i> Price: ${x.price} </i> </b>`
        btn.innerHTML = "Add to Cart"
        image.src = x.image
        btn.addEventListener('click',()=>{
            cart.push(x)
            console.log(cart)
            localStorage.setItem('userDetail',JSON.stringify(cart))
        })
        image.style.width = '100px'
        image.style.height = "100px"
        btn.style.background = 'blue'
        btn.style.color = '#fff'
        main.append(image,btn,p1,p2,p3)
    })
}