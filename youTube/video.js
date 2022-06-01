var videodata = JSON.parse(localStorage.getItem("video"))
let Title= videodata.title
let id = videodata.videoId
//let title= 
    let box= document.getElementById("box")
 let iframe= document.createElement("iframe")
 iframe.src="https://www.youtube.com/embed/"+id
 let p1= document.createElement("p")
 p1.innerText=Title;
 box.append(iframe,p1)
