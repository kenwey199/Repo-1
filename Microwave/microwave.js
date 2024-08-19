let microwave = false;

function starbtn() {

    if (microwave == false) {
        microwave = true;
        alert("الميكروويف شغال يمكنك ادخال الوقت");

        console.log("الميكروويف شغال يمكنك ادخال الوقت");
    } else {
        microwave = false;
        alert("ميكرو ويف مغلق");
        console, log("ميكرو ويف مغلق");
    }
}


function Timer() {
    if (microwave == true) {
        let Time = prompt("ادخل الوقت");
        Time = parseInt(Time);
        if (isNaN(Time) || Time <= 0 || Time > 250) {
            alert("قم بادخال العدد الصحيح من الثواني ");
        } else {
            console.log(`الوقت المتبقي ${Time}ثانية`);
            setTimeout(function () {
                alert("الطعام جاهز ");
                console.log(`oh My Godo Food is Ready`);
            }
                , Time = 100);
        }
    } else {
        microwave = false;
        alert("tunON microwave first");
    }
}