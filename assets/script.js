const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let flechesDuSlide = document.querySelectorAll(".arrow")
console.log(flechesDuSlide)

for (let i = 0; i < flechesDuSlide.length; i++) {
    console.log(flechesDuSlide[i])
}

let flecheGauche = flechesDuSlide[0]
flecheGauche.addEventListener("click", function () {
	console.log("Flèche gauche cliquée")
})

let flecheDroite = flechesDuSlide[1]
flecheDroite.addEventListener("click", function () {
	console.log("Flèche droite cliquée")
})