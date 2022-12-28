function clock(){
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var am_pm = document.getElementById("am");
  const val=parseInt(h)>=12?'PM':'AM';
  am_pm.innerText=val;
    if (h >=12){
      h = h-12;
    }
    if(h == 0){
      h = 12;
    }
    var hours = document.getElementById("hours");   
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("secs");
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
  }
  setInterval(clock, 1000);

function setAlarm()
{
  let text = document.getElementsByClassName("set_alarm")[0];
    text.innerHTML = "Alarm Set";
      var time = document.getElementById("Time1").value;
      var hours = new Date().getHours();
      var time1 = document.getElementById("Time2").value;
      var time2 = document.getElementById("Time3").value;
      var time3 = document.getElementById("Time4").value;
      if (time >= hours || time <= hours) {
        document.getElementById("images").style.backgroundImage =
          "url(morning.png)";
        document.getElementById("note").innerHTML =
          "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("g_msg").innerHTML = "GOOD MORNING!!";
      }
      if (time1 >= hours ||  time1 <= hours) {
        document.getElementById("images").style.backgroundImage =
          "url(afternoon.jpg)";
        document.getElementById("note").innerHTML =
          "LETS HAVE SOME LUNCH !!";
        document.getElementById("g_msg").innerHTML = "GOOD AFTERNOON!!";
      }
      if (time2 >= hours || time2 <= hours) {
        document.getElementById("images").style.backgroundImage =
          "url(evening.png)";
        document.getElementById("note").innerHTML =
          "STOP YAWNING,GET SOME TEA..ITS JUST EVENING";
        document.getElementById("g_msg").innerHTML = "GOOD EVENING!!";
      }
      if (time3 >= hours || time3 >= hours) {
        document.getElementById("images").style.backgroundImage =
          "url(night.png)";
        document.getElementById("note").innerHTML =
          "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("g_msg").innerHTML = "GOOD NIGHT!!";
      }
      
  document.getElementById("wake_text").innerHTML= document.getElementById('Time1').value +" "+"AM";
  document.getElementById("lunch_text").innerHTML= document.getElementById('Time2').value +" "+"PM";
  document.getElementById("nap_text").innerHTML= document.getElementById('Time3').value +" "+"PM";
  document.getElementById("night_text").innerHTML= document.getElementById('Time4').value +" "+"PM";
}

