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
    /**
    $(".btnVote").on('click', function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        console.log('funka jävla äckel skit')
        if (document.cookie == 'hasVoted=false') {
            disableButton();
            setCookie('hasVoted', 'true', 7);
            console.log(document.cookie);
        }
    });
    */
    
    var list = document.getElementsByClassName("btnVote");
    console.log(list);

    for (var i = 0; i < 3; i++) {
        console.log(list[i]);
        list[i].addEventListener('click', function(e) {
            
            e.preventDefault();
            
            if (document.cookie == 'hasVoted=false') {
                disableButton();
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