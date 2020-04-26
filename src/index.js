// challenge 1: render random dog images

const dogImagesUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogBreedsUrl = 'https://dog.ceo/api/breeds/list/all'
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

fetch(dogBreedsUrl)
    .then(r => r.json())
    .then((breeds) => {
        breeds = Object.keys(breeds.message)
        loadBreeds(breeds)
    })

function loadBreeds(breeds) {
    let unorderedList = document.createElement('ul')
    dogContainer.appendChild(unorderedList)

    breeds.forEach((breedName) => {
        let listItem = document.createElement('li')
        listItem.innerText = breedName
        unorderedList.appendChild(listItem)
    })
}