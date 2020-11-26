var dummyData = [
    {id: 1, name: "Alan Turing", shortinfo:"Hej mitt namn e james frih och jag gillar Alan Turing.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}, 
    {id: 2, name: "James Frih", shortinfo:"Hej mitt namn e james frih och jag gillar mig själv.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 3, name: "Albin Korell", shortinfo:"Hej mitt namn e james frih och jag gillar James Frih.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}]

for(var i=0; i < dummyData.length ; i++){
    const li = document.createElement("p");
    li.classList.add("homepageCandidate");

    const markup = `
    <div class="contentFrameWrap"><div class="contentFrame">
        <a href="/candidate/${i}">
        <div id= "homepageCandidates">
            <p>${dummyData[i].name}</p>
            <p>${dummyData[i].shortinfo}</p>
        </div></a>
        <button type="button" class="btnVote" id="${i}">Vote</button>
    </div></div>
    `;
   
    li.innerHTML = markup;
    console.log(li);
    document.getElementById("homepageCandidate").appendChild(li);
}