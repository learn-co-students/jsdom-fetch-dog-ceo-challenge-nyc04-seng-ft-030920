
let dogContainer = document.getElementById("dog-image-container");
let dogUL = document.querySelector("#dog-breeds")
let dropDown = document.getElementById('breed-dropdown')


console.log(dogContainer)
console.log('%c HI', 'color: firebrick')


let button = document.getElementById("click-me")


dogUL.addEventListener('click' , function(event) {
     
     event.target.style.color = 'green'


})
button.addEventListener("click", function() {
    
  fetch("https://dog.ceo/api/breeds/image/random/4")
 .then(r => r.json())
 .then((response) => {
    response.message.forEach(element => {
     let img = document.createElement("img");
      img.src = element
      img.alt = "dogs"
      img.style.height = "200px"
      img.style.width = "200px"
      dogContainer.appendChild(img)
    
      });

    
    
     
     
   })


})



fetch('https://dog.ceo/api/breeds/list/all').then(r => r.json())
.then((response) => {

//   console.log(response)
//  for(property in response.message){
//      console.log(property)
//  }
  values = Object.keys(response.message)
  console.log(values)

   values.forEach((element) => {
    let li = document.createElement("li")
    li.append(element)

    dogUL.appendChild(li)

  })

  

})

dropDown.addEventListener('change', (event) => {
   makeFetch()
   .then(res => {

    let dogsBreedArr = Object.keys(res.message)

    let filteredArray = dogsBreedArr.filter(breed => {
         return breed.startsWith(event.target.value)

    })
   dogUL.innerHTML = ""

   filteredArray.forEach((breed) => {
    dogUL.innerHTML += `<li data-info="breed"> ${breed} </li>`
   })
    

    console.log(event.target.value)

    })
})


function makeFetch(){
  
    return fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json())


}




