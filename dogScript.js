let DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".imgs");


function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
      .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
      })
      .then(function(processedResponse) {
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Sevimli Köpek";
        img.width = 580; img.height = 400;
        
        doggos.appendChild(img);
});}

function clearDiv(){
    var div = document.querySelector(".imgs");
    while(div.firstChild != null){
    div.removeChild(div.firstChild);
}
}

document.querySelector(".ekle").addEventListener("click", function(){
    const breed  = document.querySelector(".breed").value;
    switch(breed) {
        case "Random" : 
            DOG_URL = "https://dog.ceo/api/breeds/image/random";
            break;
        case "Affenpinscher" :
            DOG_URL = "https://dog.ceo/api/breed/affenpinscher/images/random";
            break;
            case "African" :
                DOG_URL = "https://dog.ceo/api/breed/african/images/random";
                break;
            case "Pembroke" :
                DOG_URL = "https://dog.ceo/api/breed/pembroke/images/random";
                break;
            case "Germanshepherd" :
                DOG_URL = "https://dog.ceo/api/breed/germanshepherd/images/random";
                break;
            case "Shiba" :
                DOG_URL = "https://dog.ceo/api/breed/shiba/images/random";
                break;
    }
    const promise = fetch(DOG_URL);
    addNewDoggo();

});
document.querySelector(".temizle").addEventListener("click", clearDiv);





