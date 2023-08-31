const countNowField = document.getElementById('seconds');
const countMinuteField = document.getElementById('minutes');
const countHourField = document.getElementById('hours');
let intervalIdSecond; 
let intervalIdMinute; 
let intervalIdHour; 

const countStart = (stopButton) => {
    let countNow = parseInt(countNowField.innerText);
    let countMinute = parseInt(countMinuteField.innerText);
    let countHour= parseInt(countHourField.innerText);
    intervalIdSecond = setInterval(() => {
        countNowField.innerText = ++countNow;
        if(countNow > 9){
            document.getElementById('prefix-sec').classList.add('hidden');
        }
        else{
            document.getElementById('prefix-sec').classList.remove('hidden');
        }

        if(countNow === 59){
            countNow = 0;
        }
    }, 10)
    intervalIdMinute = setInterval(()=>{
        countMinuteField.innerText = ++countMinute;
        if(countMinute > 9){
            document.getElementById('prefix-min').classList.add('hidden');
        }
        else{
            document.getElementById('prefix-min').classList.remove('hidden');
        }

        if(countMinute === 59){
            countMinute = 0;
        }
    }, 600)
    intervalIdHour = setInterval(()=>{
        countHourField.innerText = ++countHour;
        if(countHour > 9){
            document.getElementById('prefix-hour').classList.add('hidden');
        }
        else{
            document.getElementById('prefix-hour').classList.remove('hidden');
        }

        if(countHour === 23){
            countHour = 0;
        }
    }, 36000)
    



}

const countStop = () => {
    clearInterval(intervalIdSecond);
    clearInterval(intervalIdMinute);
    clearInterval(intervalIdHour);

}

const countReset = () => {
    countStop();
    countNowField.innerText = 0; 
    countMinuteField.innerText = 0; 
    countHourField.innerText = 0; 
    document.getElementById('prefix-sec').classList.remove('hidden');
    document.getElementById('prefix-min').classList.remove('hidden');
    document.getElementById('prefix-hour').classList.remove('hidden');
}



