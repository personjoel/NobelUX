var resultId;

fetch(`https://nobeldata.herokuapp.com/vote`)
.then(response => response.json())
.then(data => {
    console.log(data);
    var res = Math.max.apply(Math, data.map(function(o) { return o.votes; }))
    var obj = data.find(function(o){ return o.votes == res; });

    var sum = 0;

    for(var i = 0; i < data.length; i++) {
        sum += data[i].votes;
    }

    var percentage = (res / sum) * 100;

    document.getElementById("votesPercent").innerHTML = 'Med ' + Math.round(percentage) + '% av rösterna';

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
