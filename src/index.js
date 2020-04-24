let breeds = []

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
})

// challenge 1: render random dog images

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(results => {
        results.message.forEach(image => renderImages(image))
    })
}

function renderImages(url) {
    let dogContainer = document.querySelector('div#dog-image-container')
    let image = document.createElement('img')

    image.src = url

    dogContainer.appendChild(image)
}

// garbage code

// let dogs = document.querySelector('div#dog-image-container')
// let orderedList = document.createElement('ol')
// dog.appendChild(orderedList)

// function renderImages(url) {
//     let listItem = document.createElement('li')
//     listItem.innerHTML = `<img src="${url}">`
//     orderedList.appendChild(listItem)
// }

// challenge 2: load all the dog breeds in an unordered list

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(results => {
            breeds = Object.keys(results.message)
    })
}

// function renderBreeds(url) {
//     let unorderedList = document.createElement('ul')
//     let breed = document.createElement('li')
//     breed.value = url

//     unorderedList.appendChild(breed)
// }