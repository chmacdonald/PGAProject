
var apiKey ="863721f8386e48f9a1aaa441ca2761d8"
//Load existing TodDos and display them
function getGeo(courseName, cityName, stateName){
  var xmlhttps =  new XMLHttpRequest();
	xmlhttps.onreadystatechange = function() {
		// wait for readyState = 4 && 200 response
		 if (this.readyState == 4 && this.status == 200) {
              console.log("It Worked");
              var todos = JSON.parse(this.responseText);
              console.log(todos.results[0].geometry.lat);
              //if todos.compentes state tag == true or if state == true then 
              var i;
            //console.log(todos);
              for(i=0;i<todos.length; i++){
                //console.log(todos[i]);
              }
		 }
		 else if (this.readyState == 4) {
			 // this.status !==200 then error from server
			  console.log(this.responseText);
		 }
	}
xmlhttps.open("GET","https://api.opencagedata.com/geocode/v1/json?q=Annapolis&key=" + apiKey,true);
//xmlhttps.setRequestHeader("x-api-key", apiKey);
xmlhttps.send();
};
