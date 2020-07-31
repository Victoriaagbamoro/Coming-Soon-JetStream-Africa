function myFunc(e){

    e.classList.toggle("show");

    var elem = document.getElementById("navID"),
    Style = window.getComputedStyle(elem),
    right = Style.getPropertyValue("right");

    if(right == "0px"){
        elem.style.right = "-260px";
    }else{
        elem.style.right = "0px";
    }
}

const countdown = document.querySelector('.countdown');

// Set Launch Date
const launchDate = new Date('Aug 4, 2020 10:00:00').getTime();

// Update every second
const intvl = setInterval(() =>{
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Distance from now to the launch date
    const distance = launchDate -now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 *24));
    const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    // Get minute
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // Get seconds
    const seconds = Math.floor((distance % (1000 * 60) / 1000));

    // Display Result
    countdown.innerHTML = `
        <div>${days} <span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    
    `;
    // If launch date passed
    if(distance < 0){ 
        //Stop countdown
        clearInterval(intvl)
        // Style and output text
        countdown.style.color = '#fff';
        countdown.innerHTML = 'Launched!';
    }
    
}, 1000)


