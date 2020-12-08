
fetch('https://nobeldata.herokuapp.com/nobel')
.then(response => response.json())
.then(data => {
    for(var i=0; i < data.length ; i++){
        const li = document.createElement("p");
        li.classList.add("homepageCandidate");
    
        const markup = `
        <a href="/candidate/${i}">
        <div class="contentFrameWrap"><div class="contentFrame">
            
            <div id= "homepageCandidates">
                <img class="entryImg" src='${data[i].imagecode}'>
                <h3>${data[i].firstname} ${data[i].lastname}</h3>
                <p id="homepageShortInfo">${data[i].shortinfo}</p>
            </div>
            
        </div></div></a>
        `;
    
        li.innerHTML = markup;
        console.log(li);
        document.getElementById("homepageCandidate").appendChild(li);
    }
});