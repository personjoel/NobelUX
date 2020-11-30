fetch(`https://nobeldata.herokuapp.com/nobel/4`)
.then(response => response.json())
.then(data => {
    document.getElementById("name").innerHTML= data.firstname + ' ' + data.lastname;
    document.getElementById("content").innerHTML= data.shortinfo;
    var img = document.createElement('img');
    img.src = 'images/test.png';
    document.getElementById('mainContent').appendChild(img);
});