class Episode {

	constructor( title, duration, hasBeenWatched ) {
		this.title = title;
		this.duration = duration;
		this.hasBeenWatched = hasBeenWatched;
	}
}

let firstEpisode = new Episode( "Le langage C", 360, true );
let secondEpisode = new Episode( "Le langage Python", 600, false );
let thirdEpisode = new Episode( "Le langage PHP", 450, true );


let langages = new Array( firstEpisode, secondEpisode, thirdEpisode );

langages.forEach( (episode, index) => {
	console.log(" ============== Episode N° " + (index+1) + " ============"  );
	console.log("                   Titre: " + episode.title);
	console.log("                   Duration: " + episode.duration + " min");
	episode.hasBeenWatched? console.log("                   Déjà regardé: "): console.log("                   Non regarde: ");
} )