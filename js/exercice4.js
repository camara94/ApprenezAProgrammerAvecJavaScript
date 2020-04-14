class Stylo {
	constructor( type, couleur ) {
		this.type = type;
		this.couleur = couleur;
	}
};

let stylos = [];

firstStylo = new Stylo("Stylo à bille", "Bleu");
secondStylo = new Stylo("Stylo à feutre", "Jaune");
thirdStylo = new Stylo("Stylo à bille", "rouge");
fourthStylo = new Stylo("Stylo à ancre", "Gold");

//Ajouter un élément dans un tableau à travers son index
stylos[0] = firstStylo;
// Ajouter un élément à la fin d'un tableau en JS
stylos.push( secondStylo );
// Ajouter un ou plusieurs éléments au début d'un tableau en JS
stylos.unshift( fourthStylo, thirdStylo );
//Supprier un élément à la fin du tableau en JS
stylos.pop();
//Supprier un élément à la début du tableau en JS
stylos.shift();
// Transformer un tableau en chaine de caractère
let t = stylos.join(";");
// Transformer une chaine en tableau
let o = t.split(";");

console.log(o);

stylos.forEach( ( stylo, index ) => {
	console.log(" ======== Stylo N° " + (index + 1));
	console.log("             Type Stylo: " + stylo.type );
	console.log("             Couleur Stylo: " + stylo.couleur );
} );



// Maps et Sets

let per = new Map([
					["camara", 25],
					["Conde", 23],
					["sakouvogui", 20],
			]);


//console.log(per[camara]);