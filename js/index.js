$(document).ready(function(){

	let long;
	let lat;
	let currentCity;
	let currentState;
	let country;

	var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var a = new Date('01/03/2017');
	weekday[a.getDay()]; //get the day of the week

		$.getJSON("https://crossorigin.me/http://ip-api.com/json", (data_init) => { //access RESTFUL geo location API & set lattitude.longitude
			lat = data_init.lat;
			long = data_init.lon;
			currentCity = data_init.city;
			currentState = data_init.region;
			country = data_init.country;
					$("#cityState").append("<h2>"+currentCity + "," + currentState + "<br>" + country + "</h2>");

		let api = "https://crossorigin.me/https://api.darksky.net/forecast/1246aa267663e22a4e428e4b20f0df5b/" + lat +"," + long;	
			//Access weather API
		// console.log(data_init);
		

			$.getJSON(api, (data) => {
				console.log(data);
				
				// switch(weatherStatus) {
				// 	case:
				// }

				$("#currentTemp").append("<h4 id='tempData'>Currently<br> "+data.currently.temperature+"</h4>");
				$("#currentConditions").append("<h4>Conditions<br>"+data.currently.summary +"</h4>");
				$("#percipitationChance").append("<h4> Chance of Percipitation<br> " + data.currently.precipProbability +"%" + "</h4>");
				// 	$("#reveal").on('click',() => { //click button
				// 		data.main.tempData //on click convert temperature to farenheight
				// 	});
					for (var i = 0; i < 6; i++) { //loop over the object's next 5 days
						const weekly_forecast = data.daily.data;
						$('#day_'+[i]).append("<h2>"+weekly_forecast[i].apparentTemperatureMax + "<br></h2><P>It Worked</p>");

						// console.log(weekly_forecast[i]);				//select the variable corresponding to the value of [i] ie. (if i = 3 variable selected should be day_3)
															//append a <h2> within that div containing the day and <p> containing the high and low temperature for the day
					}
				// let day_1 = data.daily.data[1];
				// console.log(day_1);
			});		
		});
});