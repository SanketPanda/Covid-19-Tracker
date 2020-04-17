var myObj;
var getJSON = function(url,callback)
{
 var https = new XMLHttpRequest();
 https.open('GET',url,true);
 https.onload = function(){
     var status = https.status;
     if(status === 200)
     {
         callback(null,https.response);
     }
     else
     {
         callback(status,https.response);
     }
 };
 https.send();
};

var url = "https://api.covid19india.org/data.json";
getJSON(url,function(err,data)
{
    
    if(err != null)
    {
        alert("Something went wrong! please reload the page");
    }
    else
    {
         myObj = JSON.parse(data);
        console.log(myObj.statewise[4].state);
    }
});

function stateData(countryData,selectedState)
{
    for(let i=0;i<countryData.statewise.length;i++)
    {
        
        if(selectedState === countryData.statewise[i].state)
        {
            console.log(selectedState+"   "+countryData.statewise[i].state);
            console.log("Selected state is"+countryData.statewise[i].confirmed);
        }
    }
}

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    console.log(selected.textContent);
    currentState = selected.textContent;
    console.log(typeof currentState);
    stateData(myObj,currentState);
  });
});