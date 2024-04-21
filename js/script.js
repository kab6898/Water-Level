const waterLevelDisplay = document.getElementById('waterLevel');
    let message=""
    setInterval(()=>{

      fetch("http://localhost:5000/").then((res)=>res.json()).then((data)=>message=data.data)
      
      
      
      
      
      waterLevelDisplay.innerText = message;
    },1000)