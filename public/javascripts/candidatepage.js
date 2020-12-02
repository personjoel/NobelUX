var url = window.location.pathname;
var id = url.substring(url.lastIndexOf('/') + 1);
console.log(id);

fetch(`https://nobeldata.herokuapp.com/nobel/${id}`)
.then(response => response.json())
.then(data => {
    document.getElementById("testImg").src = data.imagecode;
    document.getElementById("candidatePageName").innerHTML= data.firstname + ' ' + data.lastname;
    document.getElementById("candidatePageShortDesc").innerHTML= data.shortinfo;
    document.getElementById("candidatePageLifeDesc").innerHTML= data.liv;
    document.getElementById("candidatePageWorkDesc").innerHTML= data.accomplished;
});


