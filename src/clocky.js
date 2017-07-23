window.onload = function() {

  var startTime = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = twelveHourTime(h);
    document.getElementById('clock-display').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }

  var checkTime = (x) => {
    if (x < 10) {
      x = "0" + x;    
    }
    return x;
  }

  var twelveHourTime = (x) => {
    if (x > 12) {
      x = x - 12;
    }
    return x;
  }

  startTime();

}