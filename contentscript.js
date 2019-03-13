$(document).ready(function(){
        var links = document.getElementsByTagName("a");
        for (i=0;i<links.length;i++) {
                links[i].title = "safe";

		target_domain = links[i].href.split("https://").pop().split("http://").pop().match(/[^\/]*\//)
		domain = window.location.hostname;

		// Check for international characters
		for(j=0; j < links[i].href.length; j++){
			if(links[i].href[j] > '\u007E'){
                                links[i].title = "unsafe";
                                break;
			}
		}
				
		// Checks for percent encoding
                for(j=0; j < links[i].href.length; j++){
                        if(links[i].href[j] == "%"){
                                links[i].title = "unsafe";
                                break;
                        }
                }

		console.log(target_domain)
		console.log(domain)

                $(links[i]).tooltip();
        }
});
