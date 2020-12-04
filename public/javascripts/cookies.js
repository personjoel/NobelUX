window.onload = checkCookie;

function disableButton() {
    var x = document.getElementsByClassName('btnVote');
    for (var i = 0; i < x.length; i++) {
        x[i].style.visibility = 'hidden';
    }
    var x = document.getElementsByClassName('footer');
    for (var i = 0; i < x.length; i++) {
        x[i].style.visibility = 'hidden';
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

    var list = document.getElementsByClassName("btnVote");
    console.log(list);

    for (var i = 0; i < 3; i++) {
        console.log(list[i]);
        list[i].addEventListener('click', function(e) {
            
            e.preventDefault();
            
            if (document.cookie == 'hasVoted=false') {
                disableButton();
                var requestUrl = window.location.origin + '/url/0';

                var urlXhr = new XMLHttpRequest();
                urlXhr.open('GET', requestUrl, true);
                urlXhr.onreadystatechange = function () {
                    
                    if(urlXhr.readyState === XMLHttpRequest.DONE) {
                      var status = urlXhr.status;
                      if (status === 200) {
                        console.log(urlXhr.response)
                        voteFunction(urlXhr.response);
                      }
                    }
                  };
                
                urlXhr.setRequestHeader('Content-Type', 'application/json');
                urlXhr.send();
                
            }
        });
        
    };
    
}

function voteFunction(url) {
    var urlCheck = window.location.pathname;
    var idCandidate = urlCheck.substring(urlCheck.lastIndexOf('/') + 1);
    console.log(id);
    
    console.log(url);

    url = url + idCandidate;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
                    
    if(xhr.readyState === XMLHttpRequest.DONE) {
        var status = xhr.status;
        if (status === 200) {
            setCookie('hasVoted', 'true', 1);
            console.log(document.cookie);
            
            window.location.replace('/submitted')
            }
        }
    };
                
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    
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