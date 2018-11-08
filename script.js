var req = new XMLHttpRequest();
req.open('GET','https://api.sunrise-sunset.org/json?lat=37.7749&lng=-122.4194', true);
req.send();
console.log('response: ', req.response);

// req.onload = function() {
//   var response = req.response;
//   var parsed = JSON.parse(response);
//
//   var students = parsed.students;
//   var studentDiv = document.getElementById('students');
//
//   var divContent = '';
//   for (var i=0; i < students.length; i++) {
//     divContent += students[i] + "<br>";
//   }
//   studentDiv.innerHTML = divContent;
// }

req.onload = function() {
  var response = req.response;
  var parsedResponse = JSON.parse(response);

  var sunsetDiv = document.getElementById('sunset');
  sunsetDiv.innerHTML = parsedResponse.results.sunset;

}
