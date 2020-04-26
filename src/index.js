// challenge 1: render random dog images

const dogImagesUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogBreedsUrl = 'https://dog.ceo/api/breeds/list/all'
const dropdown = document.getElementById('breed-dropdown')
const dogContainer = document.getElementById('dog-image-container')
let unorderedList = document.createElement('ul')
dogContainer.appendChild(unorderedList)

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
        breeds.forEach(breed => loadBreeds(breed))
        chooseDogBreed()
        dogBreedByLetter(breeds)
    })

function loadBreeds(breed) {
    let listItem = document.createElement('li')
    listItem.innerText = breed
    listItem.style.cursor = 'pointer'
    unorderedList.appendChild(listItem)

    // challenge 3: change the text color every time a dog breed gets clicked on
    listItem.addEventListener("click", changeColor)
}

function changeColor(event) {
    console.log(event.target)
    event.target.style.color = 'yellow'
}

// challenge 4: filter out dog breeds by their first letter with the dropdown menu
// how can i only show the dogs that start with the letter that's selected in the dropdown? 
// remove the children of the unorderedList?
// then add the filtered breed names back to the list?

function chooseDogBreed() {
    dropdown.addEventListener("change", (event) => {
        if (event.target.value === 'a') {
            console.log(dogA)
        } else {

        }
    })
}

function dogBreedByLetter(breeds) {
    dogA = []
    dogB = []
    dogC = []
    dogD = []

    breeds.forEach(breed => {
        if (breed[0] === 'a') {
            dogA.push(breed)
        } else if (breed[0] === 'b') {
            dogB.push(breed)
        } else if (breed[0] === 'c') {
            dogC.push(breed)
        } else if (breed[0] === 'd') {
            dogD.push(breed)
        }
    })
    // console.log(dogA, dogB, dogC, dogD)
}