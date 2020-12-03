var resultId;

/**get JSON for votes */
fetch(`https://votenobleapi.herokuapp.com/vote`)
.then(response => response.json())
.then(data => {
    var res = Math.max.apply(Math, data.map(function(o) { return o.votes; }))
    var obj = data.find(function(o){ return o.votes == res; });

    var sum = 0;

    for(var i = 0; i < data.length; i++) {
        sum += data[i].votes;
    }

    data.splice(obj.id, 1);

    var percentage = (res / sum) * 100;

    document.getElementById("votesPercent").innerHTML = 'Med ' + Math.round(percentage) + '% av rösterna';

    resultId = obj.id;

    getWinner(resultId, data, sum);
});

/**get candidate with the most votes */
function getWinner(resultId, voteData, sum) {
    fetch(`https://nobeldata.herokuapp.com/nobel/${resultId}`)
    .then(response => response.json())
    .then(data => {
    document.getElementById("name").innerHTML= data.firstname + ' ' + data.lastname;
    document.getElementById("content").innerHTML= data.shortinfo;
    var img = document.getElementById('imgCandidate');
    img.src = data.imagecode;
    
    getLosers(voteData, sum);
    });


}

function getLosers(voteData, sum) {

    var unsortedData = Object.assign({}, voteData)

    voteData.sort(function(a, b){
        return b.votes-a.votes;
    });

    console.log(voteData);

    let promises = [];
    for (var i = 1; i <= voteData.length; i++) {
        promises.push(fetch('https://nobeldata.herokuapp.com/nobel/' + voteData[i - 1].id));
    }
    
    Promise.all(promises)
    .then(files =>{
        files.forEach(file=>{
            console.log(file);
            process(file.json());
        });
    });

   

    function process(prom) {

        setTimeout(myFunction, 10);

        function myFunction() {
            prom.then(data=>{

                if (data.id == 7) {
                    var percentage = (unsortedData[data.id - 1].votes / sum) * 100;
                } else {
                    var percentage = (unsortedData[data.id].votes / sum) * 100;
                }
                
                
                
                const li = document.createElement("p");
                    li.classList.add("entries");
            
                    const markup = `
                    <div class="contentFrameWrap"><div class="contentFrame">
                        <img class="entryImg" src='${data.imagecode}'>
                        <div id= "homepageCandidates">
                        <h3>${data.firstname} ${data.lastname}</h3>
                        <p>${Math.round(percentage * 10) / 10}%</p>
                        </div>
                    
                    </div></div>
                    `;
            
                    li.innerHTML = markup;
                    console.log(li);
                    document.getElementById("entries").appendChild(li);
            });
        }
        
    }
}

//<p>${Math.round(percentage * 10) / 10}%</p>
//<img class="entryImg" src='${data.imagecode}'>

/**
async function getLosersApi(voteData, i) {
    const response = await fetch(`https://nobeldata.herokuapp.com/nobel/${voteData[i].id}`);
    return await response.json();
}
*/

/**
async function getLosersApi(voteData, sum, i) {
    await fetch(`https://nobeldata.herokuapp.com/nobel/${voteData[i].id}`)
        .then(response => response.json())
        .then(data => {
            const li = document.createElement("p");
            li.classList.add("entries");
    
            const markup = `
            <div class="contentFrameWrap"><div class="contentFrame">
            
                <div id= "homepageCandidates">
                    <img class="entryImg" src='${data.imagecode}'>
                    <h3>${data.firstname} ${data.lastname}</h3>
                </div>
            
            </div></div>
            `;
    
            li.innerHTML = markup;
            console.log(li);
            document.getElementById("entries").appendChild(li);

            Promise.resolve();
        });
}
*/

