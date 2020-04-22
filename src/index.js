document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(results => {
        results.message.forEach(image => renderImages(image))
    })
    
    // see the content inside the json object
    // .then(json => console.log(json))
}

function renderImages(url) {
    let div = document.querySelector('div#dog-image-container')
    let list = document.createElement('ol')
    let listItem = document.createElement('li')
    let image = document.createElement('img')

    image.src = url

    div.appendChild(list)
    list.appendChild(listItem)
    listItem.appendChild(image)
}