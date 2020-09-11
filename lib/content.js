
let imgs= document.getElementsByTagName('img');

  async function runLoop () {
    for (const imgElt of imgs){
      imgsrc=imgElt.src;
//    await new Promise( resolve => setTimeout( resolve, 4000) )
      if(imgElt.src==='')
        continue;
      if(imgElt.src.includes('gif'))
        continue;
      var link = 'https://jl09ro02z3.execute-api.ap-south-1.amazonaws.com/dev/pred';
//    var link = 'https://nsfw-web-api.herokuapp.com/pred';      
//    var link = 'https://nsfw-web-api.herokuapp.com/pred?text=' + imgsrc;
//    var link = 'http://127.0.0.1:5000/pred';
//    var link = 'http://127.0.0.1:5000/pred?text=' + imgsrc;
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
//      console.log(data);
        // var s = JSON.stringify(response);
        // var data = JSON.parse(s);
        // console.log(response.body);
        var sexy = parseFloat(data['Sexy']);
        var porn =parseFloat(data['Porn']);
        var hentai=parseFloat(data['Hentai']);
        var neutral=parseFloat(data['Neutral']);
        var drawing=parseFloat(data['Drawing']);
//      console.log(imgsrc);
//      console.log(data)
        if(((sexy>0.2 || porn>0.2) && neutral<0.5) || (hentai>0.2 && drawing <0.5) ){
          // let file="../../assets/puppy.jpg";
          // let url =chrome.extension.getURL(file);
          // imgElt.src=url;
//          console.log(imgsrc);
          console.log(data);
          imgElt.style.filter='blur(10px)';
          console.log('blurred');
        }}
      catch(err) {
//    console.log(link);
      console.log(err);
      }
    }}
  runLoop();

