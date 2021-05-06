

// setInterval(()=>{
// let d=new Date();
// let hours=d.getHours();
// let min=d.getMinutes();
// let seconds=d.getSeconds();

// let hoursRotate=30*hours+min/2;
// let minRotate=6*min
// let secRotate=6*seconds


// h.syle.transform=`rotate(${hoursRotate}deg)`
// m.style.transform=`rotate(${minRotate}deg)`
// s.style.transform=`rotate(${secRotate}deg)`

// },1000)

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);