const countdown= () => {
    const countDate= new Date('December 15, 2022 00:00:00').getTime();
    const now=new Date().getTime();
    const gap= countDate - now;

    //Setting the unit of time
    const second= 1000;
    const minute= 60* second;
    const hour= 60* minute;
    const day =24 * hour
    
    //Calculation
    const countdownday= Math.floor(gap/day); 
    const countdownhour= Math.floor((gap%day)/hour);
    const countdownminute= Math.floor((gap%hour)/minute);
    const countdownsecond= Math.floor((gap%minute)/second);

    //Inserting in the HTML
    document.querySelector(".day h3").innerText=countdownday;
    document.querySelector(".hour h3").innerText=countdownhour;
    document.querySelector(".minute h3").innerText=countdownminute;
    document.querySelector(".second h3").innerText=countdownsecond;

    
}

setInterval(countdown, 1000); 