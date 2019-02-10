var step1 = function()
{
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
  var button2 = document.getElementById("button2");
  button2.style.display = "none";
  var form = document.getElementById("textform");
  form.style.display = "none";
  var paragraph1 = document.getElementById("Intro1");
  paragraph1.innerHTML = "Now "+name1+", which one of these two is your significant other?";

}
