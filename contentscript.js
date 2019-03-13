$(document).ready(function(){
        var links = document.getElementsByTagName("a");
        for (i=0;i<links.length;i++) {
                links[i].title = "safe";
                console.log(links[i].href);
                for(j=0; j < links[i].href.length; j++){
                        if(links[i].href[j] == "%"){
                                links[i].title = "unsafe";
                                break;
                        }
                }
                $(links[i]).tooltip();
        }
});
