$(document).ready(function(){
        var links = document.getElementsByTagName("a");
        for (i=0;i<links.length;i++) {
		safe_text = "SAFE"
		unsafe_text = "UNSAFE"

		try {
			target_domain = links[i].href.split("https://").pop().split("http://").pop().match(/[^\/]*\//)[0];
			target_domain = target_domain.substring(0, target_domain.length - 1);
		} catch(err) {
			console.log("An error occured");
		}

		domain = window.location.hostname;

		if(target_domain == domain){
			safe_text += ", internal";
			links[i].title = safe_text;
		} else {
			safe_text += ", external";
			unsafe_text += ", external";
			links[i].title = safe_text;
		}	
		
		// Check for international characters
		for(j=0; j < target_domain.length; j++){
			if(target_domain[j] > '\u007E'){
                                unsafe_text += ", international characters";
				links[i].title = unsafe_text;
                                break;
			}
		}
				
		// Checks for percent encoding
                for(j=0; j < target_domain.length; j++){
                       if(target_domain[j] == "%"){
                                unsafe_text += ", percent encoding";
				links[i].title = unsafe_text;
                                break;
                        }
                }
		
                $(links[i]).tooltip();
        }
});
