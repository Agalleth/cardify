let gallery = document.getElementsByClassName('gallery');
let elementsGallery = gallery[0]['childNodes'];
let imagesArray = [];
for (let i in elementsGallery) {
  if (i % 2 == 1) {
    imagesArray.push(elementsGallery[i]);
  }
}
$('#gallery').empty();
let templateString = '';
for (let content in imagesArray) {
  let altText = imagesArray[content].alt;
  let srcText = imagesArray[content].currentSrc;
  templateString +=  `<figure class="cardify-figure">
                        <img src="${srcText}" alt="${altText}">
                        <figcaption class="style-figcaption">${altText}</figcaption>
                    </figure>`;
  console.log(srcText);
}
let father = document.querySelector('#gallery');
father.innerHTML = templateString;
