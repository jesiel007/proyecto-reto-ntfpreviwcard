export function createCard(){
    const card=document.createElement("div")
card.className="card"

const app=document.querySelector("#app")
app.appendChild(card)

const card__head=document.createElement("div")
card__head.className="card__head"
card.appendChild(card__head)

const card__product_img=document.createElement("div")
card__product_img.className="card__product-img"
card__head.appendChild(card__product_img)

const img1=document.createElement("img")
img1.src="./imegenes/image-equilibrium.jpg"
card__product_img.appendChild(img1)

const card__body=document.createElement("div")
card__body.className="card__body"
card.appendChild(card__body)

const a=document.createElement("a")
a.href="#"
card__body.appendChild(a)

const card__title=document.createElement("h3")
card__title.className="card__title"
card__title.textContent="Equilibrium #3429"
a.appendChild(card__title)

const card__text=document.createElement("p")
card__text.className="card__text"
card__text.textContent="Our Equilibrium collection promotes balance and calm."
card__body.appendChild(card__text)

const wrapper=document.createElement("div")
wrapper.className="wrapper"
card__body.appendChild(wrapper)

const card__price=document.createElement("div")
card__price.className="card__price"
wrapper.appendChild(card__price)

const img2=document.createElement("img")
img2.src="./imegenes/icon-ethereum.svg"
img2.className="card__icon"
card__price.appendChild(img2)

const span1=document.createElement("span")
span1.textContent="0.041 ETH"
card__price.appendChild(span1)

const card__countdown=document.createElement("div")
card__countdown.className="card__countdown"
wrapper.appendChild(card__countdown)

const img3=document.createElement("img")
img3.src="./imegenes/icon-clock.svg"
img3.className="card__icon"
card__countdown.appendChild(img3)

const span2=document.createElement("span")
span2.textContent="3 days left"
card__countdown.appendChild(span2)

const card__footer=document.createElement("div")
card__footer.className="card__footer"
card.appendChild(card__footer)

const img4=document.createElement("img")
img4.src="./imegenes/image-avatar.png"
img4.className="card__author-img"
card__footer.appendChild(img4)

const card__author_name=document.createElement("p")
card__author_name.className="card__author-name"
card__author_name.textContent="Creation of"
card__footer.appendChild(card__author_name)

const a2=document.createElement("a")
a2.href="#"
a2.textContent=" Jules Wyvern"
card__author_name.appendChild(a2)





}