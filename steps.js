var count = 0;
var date = "";
var name = "";
var step1 = function(){
  var t = document.getElementById('button1');
  var paragraph1 = document.getElementById("Intro1");
  paragraph1.innerHTML = "Remind me. What's your name?";
  var paragraph2 = document.getElementById("Intro2")
  paragraph2.innerHTML = '';
  var paragraph3 = document.getElementById("Intro3")
  paragraph3.innerHTML = '';
  t.innerHTML="";
  //var button = document.getElementById("button1");
  var form = document.getElementById("textform");
  form.style.display = "block";
  t.style.display = "none"
  var button2 = document.getElementById("button2");
  button2.style.display = "block";
}

var step2 = function () {
  var name1 = document.getElementById('textform1').value;
  name = name1;
  var button2 = document.getElementById("button2");
  button2.style.display = "none";
  var form = document.getElementById("textform");
  form.style.display = "none";
  var paragraph1 = document.getElementById("Intro1");
  paragraph1.innerHTML = "Now "+name1+", which one of these two is your significant other?";
  // var image1 = document.getElementById("image1");
  // var image2 = document.getElementById("image2");
  // image1.style.display ="block";
  // image2.style.display ="block";
  var images = document.getElementById("row");
  row.style.display ="block";
  var form1 = document.getElementById("form");
  form1.style.display="block";
}

var step3 = function(){
  var form = document.getElementById("form");
  form.style.display="none";
  var ans = document.querySelector('input[name="type"]:checked').value;
  if (ans=="Alex") {
    date = "Alex";
  }
  if (ans=="David") {
    date = "David";
  }
  var images = document.getElementById("row");
  images.style.display ="none";
  var paragraph1 = document.getElementById("Intro1");
  paragraph1.innerHTML = "";
  var q1 = document.getElementById("question1");
  q1.style.display="block";
}

var step4 = function(){
  var q1 = document.getElementById("question1");
  q1.style.display="none";
  var ans = document.querySelector('input[name="type"]:checked').value;

  if (ans=="student for cs major") {
    count = count+1;
  }

  var q2 = document.getElementById("question2");
  q2.style.display="block";

}

var step5 = function(){
  var q2 = document.getElementById("question2");
  q2.style.display="none";
  var ans = document.querySelector('input[name="type"]:checked').value;
  if (ans=="24 hours") {
    count = count+1;
  }
  if(date=="Alex"){
    var q31 = document.getElementById("question31");
    q31.style.display="block";
    var images = document.getElementById("changeAlex");
    images.style.display ="block";
  }
  else{
    var q32 = document.getElementById("question32");
    q32.style.display="block";
    var images = document.getElementById("changeDavid");
    images.style.display ="block";
  }

}

var step6 = function(){
  if(date=="Alex"){
    var q31 = document.getElementById("question31");
    q31.style.display="none";
    var q4 = document.getElementById("question4");
    var images = document.getElementById("changeAlex");
    images.style.display ="none";
    q4.style.display="block";
    if (ans=="necklace") {
      count=count+1;
    }

  }
  if(date=="David"){
    var q32 = document.getElementById("question32");
    q32.style.display="none";
    var q4 = document.getElementById("question4");
    q4.style.display="block";
    var images = document.getElementById("changeDavid");
    images.style.display ="none";
    if (ans=="haircut") {
      count=count+1;
    }
  }
  // var q4 = document.getElementById("question4");
  // q4.style.display="block";
}

var step7 = function(){
  var q4 = document.getElementById("question4");
  q4.style.display="none";
  var ans = document.querySelector('input[name="type"]:checked').value;
  if(date=="Alex"){
    var images = document.getElementById("happyAlex");
    images.style.display ="block";
  }
  if(date=="David"){
    var images = document.getElementById("happyDavid");
    images.style.display ="block";
  }
  if (ans=="split") {
    count = count+1;
  }
  var paragraph1 = document.getElementById("Intro1");
  if (count==0) {
    paragraph1.innerHTML = name+", I guess you passed :)";
  }
  else if (count==1) {
    paragraph1.innerHTML = "Don't talk to me for a week.";
  }
  else if (count==2) {
    paragraph1.innerHTML = "I can deal with your dumbness for a little.";
  }
  else if(count==3){
    paragraph1.innerHTML = ":) Almost perfect, you're great.";
  }
  else if (count==4) {
    paragraph1.innerHTML = "WILL YOU MARRY ME? <3";
  }

}
