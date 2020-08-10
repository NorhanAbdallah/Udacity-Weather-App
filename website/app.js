// Personal API Key for OpenWeatherMap API
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const key = '&appid=06a7265ac5dad259c438c4ecf9817120';
// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', generateTemp);

/* Function called by event listener */
function generateTemp (e){
    let zipCode = document.getElementById('zip').value;
    getTemperatureData(url,key, zipCode);
}

// let tempData = []
/* Function to GET Web API Data*/
const getTemperatureData = async (baseUrl,mainKey, contry) =>{

    const response = await fetch(baseUrl+contry+mainKey).then(res => {
     res.json().then(data => {
        
         var date = new Date();

         try{
             tempData = {
                 temperature: data.main.temp,
                 date: date.getDate(),
                 userResponse: document.getElementById('feelings').value
             }
             postData('/all', tempData)
         }
         catch(err) {
             console.log("error", err)
         }
     })

    })
}
/* Function to POST data */
const postData = async (url = '', data={}) =>{
    const response = await fetch (url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body:  JSON.stringify(data)
    })
    .then(data => updateUI('/all'))
}


const updateUI = async(url='') => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
        document.getElementById("date").innerHTML = allData[0].date;
        document.getElementById("temp").innerHTML = allData[0].temperature;
        document.getElementById("content").innerHTML = allData[0].userResponse;
    }
    catch(error) {
        console.log("error", error)
    }
}  