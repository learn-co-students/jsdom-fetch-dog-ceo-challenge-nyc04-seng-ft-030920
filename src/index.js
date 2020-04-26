// challenge 1: render random dog images

const dogImagesUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogContainer = document.querySelector('div#dog-image-container')

fetch(dogImagesUrl)
    .then(r => r.json())
    .then((dogs) => {
        dogs.message.forEach((dog) => {
            loadDogs(dog)
    })
})

function loadDogs(dog) {
    let dogImage = document.createElement('img')
    dogImage.src = dog
    dogContainer.appendChild(dogImage)
}

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