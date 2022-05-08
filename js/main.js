document.querySelector('button').addEventListener('click', getNasa)

function getNasa(){
    let date = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=tHptlbZkjhuFPLoHyWQTk4pe3Tbe3GLBTHKY8EU1&date=${date}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      if(data.media_type === 'image'){
        document.querySelector('img').src = data.url
      }else if(data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
      }else{
          alert('Unsupported Media Type')
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}