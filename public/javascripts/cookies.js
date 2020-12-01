window.onload = checkCookie;

function disableButton() {
    var x = document.getElementsByClassName('btnVote');
    for (var i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function myFunction() {
    
    var url = window.location.pathname;
    var idCandidate = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);

    var list = document.getElementsByClassName("btnVote");
    console.log(list);

    for (var i = 0; i < 3; i++) {
        console.log(list[i]);
        list[i].addEventListener('click', function(e) {
            
            e.preventDefault();
            
            if (document.cookie == 'hasVoted=false') {
                disableButton();
                
                var url = 'https://nobeldata.herokuapp.com/vote/' + idCandidate;

                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send();
                
                setCookie('hasVoted', 'true', 7);
                console.log(document.cookie);
            }
        });
        
    };
    
}



function checkCookie() {
    var hasVoted = getCookie('hasVoted');
    if (hasVoted != '') {
        if (hasVoted == 'true') {
            disableButton();
        } 
        
        console.log(document.cookie);
    } 
    else {
      setCookie('hasVoted', 'false', 7);
      console.log(document.cookie);

      
    }

    myFunction();


}