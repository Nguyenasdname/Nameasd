let currentIndex = 0;
const items = document.querySelectorAll('.items')
const totalItems = items.length;
const btnLeft = document.querySelector('.button-left')
const btnRight = document.querySelector('.button-right')

function showItem(index) {
    const listItems = document.querySelector('.list-items')
    const offset = index * -100; // Tính toán offset cho từng item
    listItems.style.transform = `translateX(${offset}%)`
    document.querySelector('.action').classList.remove('action');
    document.querySelector('.item-check-' + (index + 1)).classList.add('action');
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems
    showItem(currentIndex)
}

function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems
    showItem(currentIndex)
}

let handleEven = setInterval(nextItem, 5000);


btnRight.addEventListener('click',()=>{
    clearInterval(handleEven)
    nextItem()
    handleEven = setInterval(nextItem, 5000)
})

btnLeft.addEventListener('click' ,()=>{
    clearInterval(handleEven)
    prevItem()
    handleEven = setInterval(nextItem, 5000)
})