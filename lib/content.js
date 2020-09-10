//chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
//if(message.txt=="Hello")
//{
//replace(sender, sendResponse);
//}
//});
//function replace(sender, sendResponse){
let imgs= document.getElementsByTagName('img');
//let imgs= document.getElementsByTagName('img');
  async function runLoop () {
    for (const imgElt of imgs){
      imgsrc=imgElt.src;
      // await new Promise( resolve => setTimeout( resolve, 4000) )
      if(imgElt.src==='')
        continue;
      if(imgElt.src.includes('gif'))
        continue;
      // if(imgsrc.includes(';')){
      //   imgsrc=imgsrc.replace(';','/');
      // }
      // if(imgElt.src.includes('base64')){
      // console.log(imgElt.src)
      // 
      var link = 'https://jl09ro02z3.execute-api.ap-south-1.amazonaws.com/dev/pred';
//        var link = 'https://nsfw-web-api.herokuapp.com/pred';      
// var link = 'https://nsfw-web-api.herokuapp.com/pred?text=' + imgsrc;
      // var link = 'http://127.0.0.1:5000/pred';
      //  var link = 'http://127.0.0.1:5000/pred?text=' + imgsrc;
      try {

        ////////////////////////////  POST request:///////////////////
        const formdata = new FormData();
        formdata.append('text', imgsrc);
        let response = await fetch(link, {
          method: 'POST',
          body:formdata
          // headers: {
          //    'Accept': 'application/json',
          //    'Content-Type': 'application/json'
          //   }
        });

        ///////////////////////////   'GET' request://///////////////
        // let response = await fetch(link);
        let data = await response.json();
//        console.log(data);
        // var s = JSON.stringify(response);
        // var data = JSON.parse(s);
        // console.log(response.body);
        var sexy = parseFloat(data['Sexy']);
        var porn =parseFloat(data['Porn']);
        var hentai=parseFloat(data['Hentai']);
        var neutral=parseFloat(data['Neutral']);
        var drawing=parseFloat(data['Drawing']);
        // console.log(imgsrc);
        // console.log(data)
        if((sexy>0.2 || porn>0.2 || hentai>0.2) && (neutral<0.5) ){
          // let file="../../assets/puppy.jpg";
          // let url =chrome.extension.getURL(file);
          // imgElt.src=url;
          console.log(imgsrc);
          console.log(data);
          imgElt.style.filter='blur(10px)';
          console.log('blurred');
        }}
      catch(err) {
        // console.log(link);
        console.log(err);
      }
    }}
  runLoop();
//}
//switch (message){
//case "image1":
//async function runLoop () {
//    for (const imgElt of imgs){
//        imgsrc=imgElt.src;
//        // await new Promise( resolve => setTimeout( resolve, 4000) )
//        if(imgElt.src=="")
//        continue;
//        if(imgElt.src.includes('gif'))
//        continue;
//        if(imgsrc.includes(';')){
//        imgsrc=imgsrc.replace(';','/');
//        }
//        // if(imgElt.src.includes('base64')){
//            // console.log(imgElt.src)
//        // }
//        // var link = 'https://hy1al8aeg7.execute-api.ap-south-1.amazonaws.com/dev/upload?text=' + imgsrc;
//        var link = 'http://127.0.0.1:5000/upload?text=' + imgElt.src;
//        try {
//        let response = await fetch(link);
//        let data = await response.json();
//        var sexy = parseFloat(data.Sexy);
//        var porn =parseFloat(data.Porn);
//        var hentai=parseFloat(data.Hentai);
//        var neutral=parseFloat(data.Neutral);
//        var drawing=parseFloat(data.Drawing);
//        // console.log(data)
//        if((sexy>0.3 || porn>0.15 || hentai>0.1) && (neutral<0.7) && (drawing<0.7)){
//            // let file="../../assets/kitten.jpg";
//            // let url =chrome.extension.getURL(file);
//            // imgElt.src=url;
//            console.log(data);
//            console.log(link);
//            var temp_text='NSFW: ';
//            var pred = document.createElement('div');
//            pred.textContent = temp_text+data;
//            pred.style.backgroundColor = 'purple';
//            pred.style.borderRadius = '10px';
//            pred.style.color = 'white';
//            pred.style.padding = '10px';
//            imgElt.appendChild(pred);
//            // imgElt.style.filter='blur(10px)';
//            console.log("replaced");
//        }}
//        catch(err) {
//            console.log(err);
//        }
//        // getnsfwscore(imgElt);
//    }}
//    runLoop();
//break;
//case "image2":
//async function runLoop2 () {
//    for (const imgElt of imgs){
//        imgsrc=imgElt.src;
//        // await new Promise( resolve => setTimeout( resolve, 4000) )
//        if(imgElt.src=="")
//        continue;
//        if(imgElt.src.includes('gif'))
//        continue;
//        if(imgsrc.includes(';')){
//        imgsrc=imgsrc.replace(';','/');
//        }
//        // if(imgElt.src.includes('base64')){
//            // console.log(imgElt.src)
//        // }
//        var link = 'https://hy1al8aeg7.execute-api.ap-south-1.amazonaws.com/dev/upload?text=' + imgsrc;
//        // var link = 'http://127.0.0.1:5000/upload?text=' + imgElt.src;
//        try {
//        let response = await fetch(link);
//        let data = await response.json();
//        var sexy = parseFloat(data.Sexy);
//        var porn =parseFloat(data.Porn);
//        var hentai=parseFloat(data.Hentai);
//        var neutral=parseFloat(data.Neutral);
//        var drawing=parseFloat(data.Drawing);
//        // console.log(data)
//        if((sexy>0.3 || porn>0.15 || hentai>0.1) && (neutral<0.65) && (drawing<0.5)){
//            let file="../../assets/puppy.jpg";
//            let url =chrome.extension.getURL(file);
//            imgElt.src=url;
//            console.log(data);
//            // imgElt.style.filter='blur(10px)';
//            console.log("replaced");
//        }}
//        catch(err) {
//            console.log(err);
//        }
//        // getnsfwscore(imgElt);
//    }}
//    runLoop2();
//break;
//case "image3":
//async function runLoop3 () {
//    for (const imgElt of imgs){
//        imgsrc=imgElt.src;
//        // await new Promise( resolve => setTimeout( resolve, 4000) )
//        if(imgElt.src=="")
//        continue;
//        if(imgElt.src.includes('gif'))
//        continue;
//        if(imgsrc.includes(';')){
//        imgsrc=imgsrc.replace(';','/');
//        }
//        // if(imgElt.src.includes('base64')){
//            // console.log(imgElt.src)
//        // }
//        // var link = 'https://hy1al8aeg7.execute-api.ap-south-1.amazonaws.com/dev/upload?text=' + imgsrc;
//        var link = 'http://127.0.0.1:5000/upload?text=' + imgElt.src;
//        try {
//        let response = await fetch(link);
//        let data = await response.json();
//        var sexy = parseFloat(data.Sexy);
//        var porn =parseFloat(data.Porn);
//        var hentai=parseFloat(data.Hentai);
//        var neutral=parseFloat(data.Neutral);
//        var drawing=parseFloat(data.Drawing);
//        console.log(data)
//        if((sexy>0.3 || porn>0.15 || hentai>0.1)){
//            // let file="../../assets/puppy.jpg";
//            // let url =chrome.extension.getURL(file);
//            // imgElt.src=url;
//            console.log(data);
//            imgElt.style.filter='blur(10px)';
//            console.log("blurred");
//        }}
//        catch(err) {
//            console.log(err);
//        }
//        // getnsfwscore(imgElt);
//    }}
//    runLoop3();
//break;
//     
// case "image4":
// for (imgElt of imgs){ 
// let file="assets/hotruchi.jpg";
// let url =chrome.extension.getURL(file);
// imgElt.src= url;
// }
// break;
//}
//}
