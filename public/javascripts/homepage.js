var dummyData = [
    {id: 1, name: "Kathleen Booth", shortinfo:"Hej mitt namn e james frih och jag gillar Alan Turing.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}, 
    {id: 2, name: "Richard Stallman", shortinfo:"Hej mitt namn e james frih och jag gillar mig själv.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 3, name: "Margaret Hamilton", shortinfo:"Hej mitt namn e james frih och jag gillar James Frih.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 4, name: "Alan Turing", shortinfo:"Hej mitt namn e james frih och jag gillar Alan Turing.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}, 
    {id: 5, name: "James Frih", shortinfo:"Hej mitt namn e james frih och jag gillar mig själv.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 6, name: "Gustav Nice", shortinfo:"Hej mitt namn e james frih och jag gillar James Frih.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 7, name: "James Frih", shortinfo:"Hej mitt namn e james frih och jag gillar mig själv.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 8, name: "Gustav Nice", shortinfo:"Hej mitt namn e james frih och jag gillar James Frih.", liv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
]

for(var i=0; i < dummyData.length ; i++){
    const li = document.createElement("p");
    li.classList.add("homepageCandidate");

    const markup = `
    <a href="/candidate/${i}">
<<<<<<< HEAD
    <div class="contentFrameWrap"><div class="contentFrame">
        <div id= "homepageCandidates">
            <img class="entryImg" src='images/test.png'>
            <h3>${dummyData[i].name}</h3>
            <p>${dummyData[i].shortinfo}</p>
        </div>
        
    </div></div></a>
=======
        <div class="contentFrameWrap"><div class="contentFrame">
            <div id= "homepageCandidates">
                <img class="entryImg" src='images/test.png'>
                <h3>${dummyData[i].name}</h3>
                <p class="shortInfo">${dummyData[i].shortinfo}</p>
                <p class="furtherInfo">Klicka för att rösta</p>
            </div>
        </div></div>
    </a>
>>>>>>> f1b85d31f749749d4d0b9cb20e1425cc33aad099
    `;
    
    //<button type="button" class="btnVote" id="${i}">Vote</button>

    li.innerHTML = markup;
    console.log(li);
    document.getElementById("homepageCandidate").appendChild(li);
}

/**
fetch('https://nobeldata.herokuapp.com/nobel')
.then(response => response.json())
.then(data => {
    for(var i=0; i < data.length ; i++){
        const li = document.createElement("p");
        li.classList.add("homepageCandidate");
    
        const markup = `
        <div class="contentFrameWrap"><div class="contentFrame">
            <a href="/candidate/${i}">
            <div id= "homepageCandidates">
                <img class="entryImg" src='images/test.png'>
                <h3>${data[i].firstname} ${data[i].lastname}</h3>
                <p>${data[i].shortinfo}</p>
                <p class="info">Klicka för att rösta</p>
            </div></a>
            
        </div></div>
        `;
        
        //<button type="button" class="btnVote" id="${i}">Vote</button>
    
        li.innerHTML = markup;
        console.log(li);
        document.getElementById("homepageCandidate").appendChild(li);
    }
});
*/

