var server_echo;
var json = {
  json: JSON.stringify({
    a: 1,
    b: 2,
  }),
  delay: 3,
};
fetch("/echo/", {
  method: "post",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
  body:
    "json=" +
    encodeURIComponent(JSON.stringify(json.json)) +
    "&delay=" +
    json.delay,
})
  .then(function (response) {
    server_echo = response.json().echo;
    return response.json();
  })
  .then(function (result) {
    alert(result);
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });
server_echo.forEach((element) => console.log(element));

/* 
 Major Issues:
 - server_echo is assigned the value of response.json().echo which should be undefined as response.json is a Promise and doesn't hold the value yet.
 - Content-Type property is set to 'post' whereas it should be POST.


 Minor Issues:
 - Naming an key same as the object name is a bad convention.
 - json.json is strigified twice which could be an issue if the server is configured to parse it twice.

 */
