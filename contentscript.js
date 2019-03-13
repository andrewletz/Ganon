$(document).ready(function(){
        var links = document.getElementsByTagName("a");
        for (i=0;i<links.length;i++) {
                links[i].title = "safe";

		try {
			target_domain = links[i].href.split("https://").pop().split("http://").pop().match(/[^\/]*\//)[0];
			target_domain = target_domain.substring(0, target_domain.length - 1);
		} catch(err) {
			console.log("You done fucked");
		}

		domain = window.location.hostname;
		
		// Check for international characters
		for(j=0; j < target_domain.length; j++){
			if(target_domain[j] > '\u007E'){
                                links[i].title = "unsafe";
                                break;
			}
		}
				
		// Checks for percent encoding
                for(j=0; j < target_domain.length; j++){
                       if(target_domain[j] == "%"){
                                links[i].title = "unsafe";
                                break;
                        }
                }
		
		if(target_domain != domain){
			links[i].title = "unsafe";
		}

                $(links[i]).tooltip();
        }
});
