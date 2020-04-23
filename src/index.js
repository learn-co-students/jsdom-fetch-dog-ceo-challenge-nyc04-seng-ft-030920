console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    let dogUL = document.querySelector("#dog-breeds")

    // challenge 1

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(handleImageAppending)

    // challenge 2

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(response => {
        let dogBreedsArr = Object.keys(response.message)
        dogBreedsArr.forEach(addLiToDOM)
    })

    // challenge 3

    dogUL.addEventListener("click", (evt) => {
        if (evt.target.dataset.info === "breed") {
            evt.target.style.color = "blue"
        }
    })

    // challenge 4
    let dogSelect = document.querySelector("#breed-dropdown")
    dogSelect.addEventListener("change", (evt) => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(res => {
            let dogBreedsArr = Object.keys(res.message)
            let filteredArray = dogBreedsArr.filter(breed => {
                return breed.startsWith(evt.target.value)
            })
            dogUL.innerHTML = ""
            filteredArray.forEach(addLI)

        })
    })
    //DOM content loaded
})

// helper methods

function addLiToDOM(breed){
    let dogUL = document.querySelector("#dog-breeds")
    dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
}

function handleImageAppending(jsonObject){
    let dogImageContainer = document.getElementById('dog-image-container')
    let arrOfDogURLs = jsonObject.message
    arrOfDogURLs.forEach(url => {
        dogImageContainer.innerHTML += makeImageTagString(url)
    })
}

function makeImageTagString(url){
    return `<img src="${url}"/>`
}

function addLI(breed){
    let dogUL = document.querySelector("#dog-breeds")
    dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
  }
  