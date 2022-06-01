
    let api_key ="AIzaSyBZvGDguYJ89xttbl3DAiL0tCTYc0lOpMg"


    async function getdata(){
        let typed= document.getElementById("search").value
    let url= 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q='+typed+'&key='+api_key

    
        try{
    let res = await fetch(url)
    let data = await res.json()

    //console.log(data.items)
    append(data.items)
    }
    catch(err){
    console.log(err)
    }
    
   }

  
let append = (data) =>{
    let container= document.getElementById("container")
    container.innerHTML=null
    
  // data.forEach((el) => { el.id.videoId/ el.snippet.title
  data.forEach(({ id: { videoId }, snippet: { title ,thumb} }) => {
    


   let div = document.createElement("div");
  
   
   let  h3= document.createElement("h3")
     h3.innerText=title

   let iframe = document.createElement("iframe")
   iframe.src="https://www.youtube.com/embed/"+videoId  
     div.append(iframe,h3)

     let video = {
            title,
            videoId,
          };
      
          div.onclick = () => {
            playVideo(video);
          };
     container.append(div)


  })        
        
}
  let playVideo = (video) =>
  {
    localStorage.setItem("video",JSON.stringify(video));
    window.location.href="video.html"
  }

