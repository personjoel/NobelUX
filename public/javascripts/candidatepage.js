dummyData = [
    {id: 1, name: "Alan Turing", shortinfo:"Hej mitt namn e james frih och jag gillar Alan Turing.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}, 
    {id: 2, name: "James Frih", shortinfo:"Hej mitt namn e james frih och jag gillar mig själv.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 3, name: "Albin Korell", shortinfo:"Hej mitt namn e james frih och jag gillar James Frih.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}]

var url = window.location.pathname;
var id = url.substring(url.lastIndexOf('/') + 1);
console.log(id);


document.getElementById("candidatePageName").innerHTML= dummyData[id].name;
//document.getElementById("candidatePageShortDesc").innerHTML= dummyData[id].shortinfo;
document.getElementById("candidatePageLifeDesc").innerHTML= dummyData[id].liv;
document.getElementById("candidatePageWorkDesc").innerHTML= dummyData[id].liv;

/**
fetch(`https://nobeldata.herokuapp.com/nobel/${id}`)
.then(response => response.json())
.then(data => {
    document.getElementById("candidatePageName").innerHTML= data.firstname + ' ' + data.lastname;
    document.getElementById("candidatePageShortDesc").innerHTML= data.shortinfo;
    document.getElementById("candidatePageLifeDesc").innerHTML= data.liv;
    document.getElementById("candidatePageWorkDesc").innerHTML= data.accomplished;
});
*/

