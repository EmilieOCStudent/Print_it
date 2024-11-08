const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let flechesDuSlide = document.querySelectorAll(".arrow")
console.log(flechesDuSlide)


for (let i = 0; i < flechesDuSlide.length; i++) {
    console.log(flechesDuSlide[i])
}


let imageActuelle = 0
let imageSlide = document.querySelector(".banner-img")
let tagline = document.querySelector("#texteBanniere")
let bulletPoints = document.querySelectorAll(".dot")
console.log(bulletPoints)
for (let y = 0; y < bulletPoints.length; y++) {
    console.log(bulletPoints[y])
}



let flecheGauche = flechesDuSlide[0]
flecheGauche.addEventListener("click", function (){
	let i=imageActuelle-1
	if(i<0){i=3}
	imageSlide.src = slides[i]["image"]
	tagline.innerHTML = slides[i]["tagLine"]
	bulletPoints[i].classList.add("dot_selected")
	bulletPoints[imageActuelle].classList.remove("dot_selected")
	imageActuelle=i
	console.log("Flèche gauche cliquée")
})



let flecheDroite = flechesDuSlide[1]
flecheDroite.addEventListener("click", function () {
	let i=imageActuelle+1
	if(i>3){i=0}
	imageSlide.src = slides[i]["image"]
	tagline.innerHTML = slides[i]["tagLine"]
	bulletPoints[i].classList.add("dot_selected")
	bulletPoints[imageActuelle].classList.remove("dot_selected")
	imageActuelle=i
	console.log("Flèche droite cliquée")
})


