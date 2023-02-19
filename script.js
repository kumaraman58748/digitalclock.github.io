const hour=document.getElementById("hour");
const minute=document.getElementById("minutes");
const second=document.getElementById("seconds");
const ampm=document.getElementById("am");

function updateclock(){
	let h=new Date().getHours();
	let m=new Date().getMinutes();
	let s=new Date().getSeconds();
	let am="AM"

	if(h>12){
		h=h-12;
		am="PM"
	}
	hour.innertext=h;
	minute.innertext=m;
	second.innertext=s;
	

}
updateclock()

