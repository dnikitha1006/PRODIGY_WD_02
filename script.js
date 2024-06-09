window.onload = function () {
  var ms = document.querySelector("#milliseconds");
  var sec = document.querySelector("#seconds");
  var min = document.querySelector("#minutes");
  var hr = document.querySelector("#hour");

  var btnStart = document.querySelector("#start");
  var btnStop = document.querySelector("#stop");
  var btnReset = document.querySelector("#reset");
  var btnLap = document.querySelector("#lap");

  var lapsContainer = document.querySelector("#laps");

  var interval;
  var seconds = 0;
  var milliseconds = 0;
  var minutes = 0;
  var hour = 0;

  ms.innerHTML = "00";
  sec.innerHTML = ":00";
  min.innerHTML = ":00";
  hr.innerHTML = "00";

  btnStart.onclick = function() {
      clearInterval(interval);
      interval = setInterval(start, 10);
  } 

  btnStop.onclick = function() {
      clearInterval(interval);
  }

  btnReset.onclick = function() {
      clearInterval(interval);
      milliseconds = 0;
      seconds = 0;
      minutes = 0;
      hour = 0;
      ms.innerHTML = "00";
      sec.innerHTML = ":00";
      min.innerHTML = ":00";
      hr.innerHTML = "00";
      lapsContainer.innerHTML = "";
  }

  btnLap.onclick = function() {
      var lapTime = `${hr.innerHTML}${min.innerHTML}${sec.innerHTML}.${ms.innerHTML}`;
      var lapItem = document.createElement("li");
      lapItem.textContent = lapTime;
      lapsContainer.appendChild(lapItem);
  }

  function start() {
      milliseconds++; 
      
      if(milliseconds < 9){
        ms.innerHTML = "0" + milliseconds;
      } else {
          ms.innerHTML = milliseconds;
      }
      
      if (milliseconds > 99) {
          seconds++;
          sec.innerHTML = seconds < 10 ? ":0" + seconds : ":" + seconds;
          milliseconds = 0;
          ms.innerHTML = "00";
      }

      if (seconds > 59) {
          minutes++;
          min.innerHTML = minutes < 10 ? ":0" + minutes : ":" + minutes;
          seconds = 0;
          sec.innerHTML = ":00";
      }

      if (minutes > 59) {
          hour++;
          hr.innerHTML = hour < 10 ? "0" + hour : hour;
          minutes = 0;
          min.innerHTML = ":00";
      }
  }
}
