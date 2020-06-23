const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImageContainer = document.getElementById("dog-image-container")

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