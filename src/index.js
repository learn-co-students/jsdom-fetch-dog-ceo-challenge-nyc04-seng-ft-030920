console.log('%c HI', 'color: firebrick')

let dogImageBox = document.querySelector('#dog-image-container')
let dogBreedList = document.querySelector('#dog-breeds')
let breedLetterSelect = document.querySelector('#breed-dropdown')
let breedObject = {}

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(r => r.json())
    .then((imageArray) => {
        imageArray.message.forEach((singleDog) => {
            addDogImage(singleDog)
        })
    }) 

function addDogImage(dogImage) {
    let dogPic = document.createElement('img')
    dogPic.src = dogImage
    dogPic.style.height = "200px";
    dogImageBox.append(dogPic)
}

fetch("https://dog.ceo/api/breeds/list/all")
    .then(r => r.json())
    .then((breedArray) => {
        for (const key in breedArray.message) {
            addDogBreed(key)
        }
    }) 

function addDogBreed(breed) {
    let dogBreed = document.createElement('li');
    dogBreed.innerText = breed;
    if (!breedObject[breed[0]]) {
        breedObject[breed[0]] = []
    }
    breedObject[breed[0]].push(dogBreed);
    dogBreed.style.display = "none";
    dogBreedList.append(dogBreed)

    dogBreed.addEventListener("click", () => {
        dogBreed.style.color = "green";
    })
}

breedLetterSelect.addEventListener("change", (evt) => {
    resetDisplay()
    let startLetter = evt.target.value
    if (startLetter !== "default") {
        for (const breed of breedObject[startLetter]) {
            breed.style.display = "block";
        }
    }
})

function resetDisplay() {
    for (const letter in breedObject) {
        for (const breed of breedObject[letter]) {
            breed.style.display = "none";
        }
    }
}
