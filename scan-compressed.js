var notfiedPokemons={};"granted"!==Notification.permission&&Notification.requestPermission();var scanFunction=function(){var e=["Spearow","Zubat","Psyduck","Sentret","Marill","Shellder","Rattata","Aipom","Murkrow","Natu","Krabby","Pidgey","Wooper","Caterpie","Hoppip","Furret","Swinub","Hoothoot","Bellsprout","Mr. Mime","Paras","Xatu","Gastly","Oddish","Jynx","Horsea","Nidoran♂","Weedle","Seel","Drowzee","Spinarak","Nidoran♀","Sneasel","Pidgeotto","Shuppet","Duskull","Misdreavus","Cubone","Hypno","Houndour","Fearow"];$(".pokemon").each(function(o,n){var t=n.firstElementChild.innerText,i=n.getAttribute("data-encounter");if(!(i in notfiedPokemons||e.includes(t))){notfiedPokemons[i]="val";new Notification("Pokemon found",{body:t,icon:"https://img.pokemondb.net/artwork/"+t.toLowerCase()+".jpg"})}}),document.getElementById("scan").click()};window.setInterval(scanFunction,3e5),scanFunction();
