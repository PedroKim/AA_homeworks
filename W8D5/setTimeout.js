// Simple setTimeout
setTimeout(function() {
  alert("HAMMERTIME");
}, 5000);

// Timeout Plus Closure
function hammerTime(time) {
  setTimeout(function() {
    alert(`${time} is hammertime!`);
  }, time);
}