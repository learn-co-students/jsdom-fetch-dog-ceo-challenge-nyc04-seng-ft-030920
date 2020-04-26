// challenge 1: render random dog images

const dogImagesUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogBreedsUrl = 'https://dog.ceo/api/breeds/list/all'
const dropdown = document.getElementById('breed-dropdown')
const dogContainer = document.getElementById('dog-image-container')
const unorderedList = document.getElementById('dog-breeds')

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

        updateDogBreeds(breeds)
        breedSelectListener()
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
    event.target.style.color = 'yellow'
}

// challenge 4: filter out dog breeds by their first letter with the dropdown menu

function updateDogBreeds (breeds) {
    removeChildren(unorderedList);
    breeds.forEach(breed => loadBreeds(breed));
  }
  
function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function breedSelectListener() {
    dropdown.addEventListener('change', function (event) {
      selectBreed(event.target.value);
    });
}

function selectBreed(letter) {
    updateDogBreeds(breeds.filter(breed =>
        breed.startsWith(letter))
    );
}