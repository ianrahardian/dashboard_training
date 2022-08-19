const PATH = "https://bankindonesia-backend.herokuapp.com/api"

const sentiment = {};

const loading = document.getElementById("loading");
const sentimentChart = document.getElementById("chart");

//Options for period : monthly, quarterly, semester, yearly
fetch(`${PATH}/facebook/sentiment-overview/monthly/`)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        sentiment["Facebook"] = response;
    })

fetch(`${PATH}/instagram/sentiment-overview/monthly/`)
    .then((response) => {
    return response.json();
    })
    .then((response) => {
        sentiment["Instagram"] = response;
    })
    .then((response) =>{
        const labels = [
            'POSITIVE',
            'NEUTRAL',
            'NEGATIVE',
            ];
            
        const data = {
        labels: labels,
        datasets: [{
            label: 'Facebook',
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(255, 99, 132)',
            data: sentiment.Facebook,
        },
        {
            label: 'Instagram',
            backgroundColor: 'rgb(255, 200, 1)',
            borderColor: 'rgb(255, 99, 132)',
            data: sentiment.Instagram,
        }
        ]
        };
        
        const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title:{
                    display: true,
                    text: "Comments Sentiment by Platform"
                }
            }
            
        }
        };
        
        
        const myChart = new Chart(
            document.getElementById('sentimentAnalysis'),
            config
        );

        loading.classList.add("d-none");
        chart.classList.remove("d-none");
                    
    })
    

    
