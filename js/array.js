class Personne {

	constructor( nom, prenom, age ) {
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
	}
};

let mother = new Personne("Camara", "Mawatta", 50);
let father = new Personne("Camara", "Kalil", 56);
let firstSister = new Personne("Camara", "Makoura", 32);
let firstBrother = new Personne("Camara", "Mohamed", 30);
let secondSister = new Personne("Camara", "Fatoumata", 28);
let secondBrother = new Personne("Camara", "Moussa", 27);
let me = new Personne("Camara", "Laby Damaro", 25);

let myFamily = new Array(
						father, 
						mother, 
						firstSister, 
						firstBrother, 
						secondSister, 
						secondBrother, 
						me
					);

myFamily.forEach( (personne, index) => {

	switch( index ) {
		case 0: {
			console.log(" ============= Père ============= ");
			console.log("    Nom: " + personne.nom);
			console.log("    Prénom: " + personne.prenom);
			console.log("    Age: " + personne.age);
		}; break;
		case 1: {
			console.log(" ============= Mère ============= ");
			console.log("    Nom: " + personne.nom);
			console.log("    Prénom: " + personne.prenom);
			console.log("    Age: " + personne.age);
		}; break;
		case 2: {
			console.log(" ============= Première Fille ============= ");
			console.log("    Nom: " + personne.nom);
			console.log("    Prénom: " + personne.prenom);
			console.log("    Age: " + personne.age);
		}; break;
		case 3: {
			console.log(" ============= Premier Garçon ============= ");
			console.log("    Nom: " + personne.nom);
			console.log("    Prénom: " + personne.prenom);
			console.log("    Age: " + personne.age);
		}; break;
		case 4: {
			console.log(" ============= deuxième Fille ============= ");
			console.log("    Nom: " + personne.nom);
			console.log("    Prénom: " + personne.prenom);
			console.log("    Age: " + personne.age);
		}; break;
		case 5: {
			console.log(" ============= deuxième Garçon ============= ");
			console.log("    Nom: " + personne.nom);
			console.log("    Prénom: " + personne.prenom);
			console.log("    Age: " + personne.age);
		}; break;
		case 6: {
			console.log(" ============= Le Benjamin de la famille ============= ");
			console.log("    Nom: " + personne.nom);
			console.log("    Prénom: " + personne.prenom);
			console.log("    Age: " + personne.age);
		}; break;
	}

} );