const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogImageContainer = document.getElementById("dog-image-container")
const breedsList = document.getElementById("dog-breeds")
const dropdown = document.getElementById("breed-dropdown")

fetch(imgUrl)
.then(r => r.json())
.then((dogs) => {
  forEachDog(dogs)
})

function forEachDog(dogs) {
  dogs.message.forEach((dog) => {
    renderDogImages(dog)
  })
}

function renderDogImages(dog) {
  let image = document.createElement("img")
  image.src = dog
  dogImageContainer.append(image)
}

fetch(breedUrl)
.then(r => r.json())
.then((breeds) => {
  forEachBreed(breeds)
  breedSelector(breeds)
})

function forEachBreed(breeds) {
  Object.keys(breeds.message).forEach((breed) => {
    renderBreeds(breed)
  })
}

function renderBreeds(breed) {
  let listItem = document.createElement("li")
  listItem.innerText = breed
  breedsList.append(listItem)

  listItem.addEventListener("click", (event) => {
    event.target.style.color = "green"
  })
}

function breedSelector(breeds) {
  let allBreeds = Object.keys(breeds.message)
  let arr = []
  
  dropdown.addEventListener("change", (event) => {
    arr = []
    allBreeds.filter((breed) => {
      if (breed.startsWith(event.target.value)) {
        arr.push(breed)
      }
    })
    
    let child = breedsList.lastElementChild

    while (child) {
        breedsList.removeChild(child)
        child = breedsList.lastElementChild
    }

    arr.forEach((breed) => {
      renderBreeds(breed)
    })
  })
}