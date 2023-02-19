const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("Minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function updateclock(){
	let h=new Date().getHours();
	let m=new Date().getMinutes();
	let s=new Date().getSeconds();
	let ampm="AM"

	if(h>12){
		h=h-12;
		ampm="PM";
	}
	hourEl.innerHTML=h;
	minuteEl.innerHTML=m;
	secondEl.innerHTML=s;
    ampmEl.innerHTML=ampm;
    setTimeout(() => {
     updateclock()
    }, 1000);
	

}
updateclock();

