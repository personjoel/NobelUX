var dummyData = [
    {name: "Alan Turing", info:"Hej mitt namn e james frih och jag gillar Alan Turing."}, 
    {name: "James Frih", info:"Hej mitt namn e james frih och jag gillar mig själv."},
    {name: "Albin Korell", info:"Hej mitt namn e james frih och jag gillar James Frih."}]

for(var i=0; i < dummyData.length ; i++){
    const li = document.createElement("p");
    li.classList.add("homepageCandidate");

    const markup = `
    <a href="/candidate" >
      <div id= "homepageCandidates">
          <p>${dummyData[i].name} </p>
          <p>${dummyData[i].info}</p>
      </div></a>
    `;
   
    li.innerHTML = markup;
    console.log(li);
    document.getElementById("homepageCandidate").appendChild(li);
 }