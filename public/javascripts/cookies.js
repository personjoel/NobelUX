checkCookie();

var x = document.getElementsByClassName('btnVote');
var i;
for (i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function() {
    
        if (document.cookie == 'hasVoted=false') {
            disableButton(true);
            setCookie('hasVoted', 'true', 7);
            console.log(document.cookie);
        } else if (document.cookie == 'hasVoted=true') {
            disableButton(false);
            setCookie('hasVoted', 'false', 7);
            console.log(document.cookie);
        }
        
    });
}

function disableButton(status) {
    var x = document.getElementsByClassName('btnVote');
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].disabled = status;
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

function checkCookie() {
    var hasVoted = getCookie('hasVoted');
    if (hasVoted != '') {
        if (hasVoted == 'true') {
            disableButton(true);
        } else if (hasVoted == 'false') {
            disableButton(false);
        }
        
        console.log(document.cookie);
    } 
    else {
      setCookie('hasVoted', 'false', 7);
      console.log(document.cookie);

      
    }
}