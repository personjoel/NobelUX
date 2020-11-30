/**
var resultId;

fetch(`https://nobeldata.herokuapp.com/vote`)
.then(response => response.json())
.then(data => {
    console.log(data);
    var res = Math.max.apply(Math, data.map(function(o) { return o.votes; }))
    var obj = data.find(function(o){ return o.votes == res; })
    
    resultId = obj.id;

    console.log(resultId);

    myFunction(resultId);
});

function myFunction(resultId) {
    fetch(`https://nobeldata.herokuapp.com/nobel/${resultId}`)
    .then(response => response.json())
    .then(data => {
    document.getElementById("name").innerHTML= data.firstname + ' ' + data.lastname;
    document.getElementById("content").innerHTML= data.shortinfo;
    var img = document.getElementById('imgCandidate');
    img.src = 'images/test.png';
    });
}
*/

fetch(`https://nobeldata.herokuapp.com/nobel/4`)
.then(response => response.json())
.then(data => {
document.getElementById("name").innerHTML= data.firstname + ' ' + data.lastname;
document.getElementById("content").innerHTML= data.shortinfo;
var img = document.getElementById('imgCandidate');
img.src = 'images/test.png';
});
