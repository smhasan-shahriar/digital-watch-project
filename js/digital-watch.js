const countNowField = document.getElementById('countdown');
let intervalId; 

const countStart = (stopButton) => {
    let countNow = parseInt(countNowField.innerText);
    intervalId = setInterval(() => {
        countNowField.innerText = countNow++;
    }, 1000)



}

const countStop = () => {
    console.log(intervalId);
    clearInterval(intervalId);

}

const countReset = () => {
    countStop();
    countNowField.innerText = 0; 
}



