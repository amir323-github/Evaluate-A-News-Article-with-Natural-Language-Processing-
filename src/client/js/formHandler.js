import{checkTheUrl} from './checkUrl'

async  function handleSubmit(event) {
    event.preventDefault()
    console.log("::: Form Submitted :::")
    // check what text was put into the form field
    let url = document.getElementById('name').value
    if(checkTheUrl(url)){
        try {
        await fetch(`http://localhost:8081/URL?url=${url}`,
    {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
       
    }
        )
        .then(res => res.json())
     .then(function(res) {
        document.getElementById('results').innerHTML = `subjectivity: ${res.subjectivity} `;
        document.getElementById('results1').innerHTML = `agreement:${res.agreement}`;
        document.getElementById('results2').innerHTML = ` confidence: ${res.confidence} `;
        document.getElementById('results3').innerHTML = `irony: ${res.irony}`;
       
     })
    //     const Data = await backendRes.json();
    //   console.log(Data);
    //    const { agreement, subjectivity, confidence, irony } = Data;
     
} catch (error) {
    document.getElementById('results').innerHTML  =
      "Error fetching ";
  }  
           
        

    }else{

        
        document.getElementById('results').innerHTML = "Sorry! incorrect URL"
    }

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.title
    // })
}

export { handleSubmit }
