

let inputRub = document.querySelector("#rub"),
    inputUsd = document.querySelector("#usd");


inputRub.addEventListener("input", ()=>{
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, password); pattern
    request.open("GET","js/current.json");
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener("readystatechange", ()=>{
         if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            let data = JSON.parse(request.response);
            //inputUsd.value = +inputRub.value / data.current.usd;
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            //inputUsd.value = Math.floor(+inputRub.value / data.current.usd);
            
         } else {
            inputUsd.value = "Error";
         }
    });

    //Свойства XMLHTTPRequest
    //status
    //statusText
    //response
    //readyState

    //События XMLHTTPRequest
    //
});    
