const active = document.querySelector('.active');
 
const desligarFuncoesForaDoInput = document.createElement('div');
desligarFuncoesForaDoInput.id = 'fundoOff';
document.body.appendChild(desligarFuncoesForaDoInput);

const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu-burguer');

menu.addEventListener('click', () => {
    menu.classList.add('active');
    desligarFuncoesForaDoInput.style.display = "block"
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    desligarFuncoesForaDoInput.style.display = "none"
})

/*Lightbox*/
const closeLightboxImg = document.querySelector('#closeLightboxImg').addEventListener('click', () => {
    lightbox.classList.remove('active')
})
const lightbox = document.getElementById('lightbox');

const mainImage = document.querySelector('.main-image-div-normal');
const image = document.querySelector('.imagem-principal');
mainImage.addEventListener('click', () => {
    lightbox.classList.add('active')
})

const subImageDiv = document.querySelectorAll('.sub-image-div');

const subImagesLightbox = document.querySelectorAll('.sub-image-lightbox');

const mainImageDiv = document.querySelector('.main-image-div');

subImagesLightbox.forEach(subImg => {
    subImg.addEventListener('click', () => {
        mainImageDiv.innerHTML = `
        <img src="${subImg.src}" alt="Imagem principal">
        `
    })
})

subImageDiv.forEach(subImgDiv => {
    subImgDiv.addEventListener('click', () => {
        const itemDestaque = document.querySelector('.featured-item-lightbox');
        itemDestaque.classList.remove('featured-item-lightbox');
        subImageDiv[0].classList.remove('featured-item-lightbox')
        subImgDiv.classList.add('featured-item-lightbox');
    })
})

/*Sub-images*/
const subImages = document.querySelectorAll('.sub-image');
subImages.forEach(subImg => {
    subImg.addEventListener('click', () => {
        const itemDestaque = document.querySelector('.featured-item');
        itemDestaque.classList.remove('featured-item');
        subImageDiv[0].classList.remove('featured-item')
        subImg.classList.add('featured-item');
    })
})

const subImagesNormal = document.querySelectorAll('.normal-image');

subImagesNormal.forEach(subImg => {
    subImg.addEventListener('click', () => {
        mainImage.innerHTML = 
        `
        <img src="${subImg.src}" alt="Imagem principal" class="imagem-principal">
        `
    })
})
/*setas*/
const imagensSlide = document.querySelectorAll('.sub-image');
const setaEsquerda = document.querySelectorAll('.left');
const setaDireita = document.querySelectorAll('.right');
const ligado = document.querySelector('.ligado')
let slideAtual = 0;

setaEsquerda.forEach(item => {
    item.addEventListener('click', () => {
        hideSlider();
        if(slideAtual === 0){
            slideAtual = imagensSlide.length - 1
        } else {
            slideAtual--
        }
        showSlider();
    })
})

setaDireita.forEach(item => {
    item.addEventListener('click', () => {
        hideSlider();
        if(slideAtual === imagensSlide.length - 1) {
            slideAtual = 0
        } else {
            slideAtual++
        }
        showSlider();
    })
})

function hideSlider() {
    imagensSlide.forEach(item => {
        item.classList.remove('ligado');
    })
}

function showSlider() {
    imagensSlide[slideAtual].classList.add('ligado')
}

/*cart add and remove*/
const removerItem = document.getElementById('removeOneProductBtn');
const adicionarItem = document.getElementById('addOneProductBtn');
const quantidadehtml = document.getElementById('productQuantityToAdd');
let itensNoCarrinho = 0;

removerItem.addEventListener('click', () => {
    if(itensNoCarrinho === 0){
        return;
    }else{
    itensNoCarrinho--;
    }
    showInHtml();
})

adicionarItem.addEventListener('click', () => {
    if(itensNoCarrinho === 10){
        return;
    }else{
    itensNoCarrinho++;
    }
    showInHtml();
})

function showInHtml(){
    quantidadehtml.innerHTML = itensNoCarrinho
}

/*Cart*/
const cart = document.getElementById('cartBtn');
const cartActive = document.querySelector('.cart-active');
const productsOnCart = document.querySelector('.products-on-cart')

cart.addEventListener('click', () => {
    cartActive.classList.toggle('active');
})

const botaoAdicionarParaCarrinho = document.getElementById('addToCart');
const numeroCarrinho = document.querySelector('.cart-notification')

botaoAdicionarParaCarrinho.addEventListener('click', () => {
    if(itensNoCarrinho === 0){
        carrinhoVazio();
        numeroCarrinhoEsconder();
    }else{
        adicionarAoCarrinho();
        numeroCarrinho.style.visibility = "visible";
        numeroCarrinho.innerHTML = `<p>${itensNoCarrinho}</p>`;
    }
})

function carrinhoVazio(){
    productsOnCart.innerHTML = "Your cart is empty.";
    quantidadehtml.innerHTML = 0;
    numeroCarrinhoEsconder();
    itensNoCarrinho = 0;
}

function adicionarAoCarrinho(){
    productsOnCart.innerHTML = 
    `<div class="productOnCart">
        <img src="./src/images/image-product-1-thumbnail.jpg" alt="imagem do produto">
        <div class="productOnCartInfo">
            <h6>Fall Limited Edition Sneakers</h6>
            <p>$125.00 x ${itensNoCarrinho} <span class="totalPriceCart">$${itensNoCarrinho * 125}</span></p>
        </div>
        <img src="./src/images/icon-delete.svg" alt="icone deletar" id="deletarProdutoDoCarrinho" onclick="carrinhoVazio()">
    </div>
    <a href="#" class="checkoutBtn" onclick="window.location.reload();">Checkout</a>`
}

function numeroCarrinhoEsconder(){
    numeroCarrinho.style.visibility = "hidden";
}