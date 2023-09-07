const endDate = '11/15/2023 02:47:00';
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate).getTime();   
    const now = Date.now();  
    const diff = (end - now) / 1000;

    if(diff < 0) return;

    // convert in to days:
    inputs[0].value=Math.floor((diff/3600)/24);
    inputs[1].value=Math.floor(diff/3600) % 24;
    inputs[2].value=Math.floor(diff/60) % 60;
    inputs[3].value=Math.floor(diff) % 60;
  
    
}
// initial call
clock()


/**
 * 1 day=24hrs
 * 1hr=60 minutes
 * 60 min=3600 seconds
 */

setInterval(
    () => {
        clock()
    },
    1000
)