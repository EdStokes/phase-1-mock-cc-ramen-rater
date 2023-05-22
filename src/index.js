const ramenAPI = `http://localhost:3000/ramens`;
const ramenMenuDiv = element('ramen-menu');

fetch(ramenAPI)
    .then(res => res.json())
    .then(renderRamens);

function renderRamens(ramens) {
    ramens.forEach(renderRamen);
}

function renderRamen(ramen) {
    const ramenImageElement = document.createElement('img');
    ramenImageElement.src = ramen.image;
    ramenMenuDiv.append(ramenImageElement);
    ramenImageElement.addEventListener('click', () => ramenClickHandler(ramen)) 
}

function ramenClickHandler(ramen) {
    element('detail-image').src = ramen.image;
    element('detail-name').textContent = ramen.name;
    element('detail-resturant').textContent = ramen.restaurant;
    element('rating-display').textContent = ramen.rating;
    element('comment-display').textContent = ramen.comment;
}

function element(id) {
    return document.getElementById(id);
}

element('new-ramen').addEventListener('submit', newRamenHandler);

function newRamenHandler(event) {
    event.preventDefault();

    const newRamen = {
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value,
        comment: event.target[`new-comment`].value
    }
    
    renderRamen(newRamen);
    event.target.reset();
    

}


