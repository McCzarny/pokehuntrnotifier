var notfiedPokemons = {};
if (Notification.permission !== "granted"){Notification.requestPermission();}

var scanFunction = function(){
var filter = ["Spearow","Zubat","Psyduck","Sentret","Marill","Shellder","Rattata","Aipom","Murkrow","Natu","Krabby","Pidgey","Wooper","Caterpie","Hoppip","Furret","Swinub","Hoothoot","Bellsprout","Mr. Mime","Paras","Xatu","Gastly","Oddish","Jynx","Horsea","Nidoran♂", "Weedle","Seel","Drowzee", "Spinarak", "Nidoran♀","Sneasel","Pidgeotto","Shuppet","Duskull","Misdreavus","Cubone","Hypno","Houndour","Fearow"];
$('.pokemon').each(function(i, obj) {
	var pokemon_name = obj.firstElementChild.innerText;
	var enc_id = obj.getAttribute("data-encounter");
	if (!(enc_id in notfiedPokemons) && !filter.includes(pokemon_name))
	{
		notfiedPokemons[enc_id] = "val";
		var notification = new Notification('Pokemon found', {
		  body: pokemon_name,
		  icon: "https://img.pokemondb.net/artwork/" + pokemon_name.toLowerCase() + ".jpg"
		});
	}
});

document.getElementById("scan").click()
};

window.setInterval(scanFunction, 300000);
scanFunction();
