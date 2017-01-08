$(document).ready(function(){

	let long;
	let lat;
	let currentCity;
	let currentState;
	let country;



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
				// console.log(data);
				
				// switch(weatherStatus) {
				// 	case:
				// }

				$("#currentTemp").append("<h4 id='tempData'>Currently<br> "+data.currently.temperature+"&#8457</h4>");
				$("#currentConditions").append("<h4>Conditions<br>"+data.currently.summary +"</h4>");
				$("#percipitationChance").append("<h4> Chance of Percipitation<br> " + data.currently.precipProbability +"%" + "</h4>");
				// 	$("#reveal").on('click',() => { //click button
				// 		data.main.tempData //on click convert temperature to farenheight
				// 	});
					for (var i = 0; i < 6; i++) { //Begin loop - loop over the object's next 5 days
						const weekly_forecast = data.daily.data;
						let today = moment().format('D MMM, YYYY');//Format the date in the form Day / Month / Year from moment.js library
						const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

						$('#day_'+[i]).append("<h3>"+weekly_forecast[i].apparentTemperatureMax + "<br></h3><P>" + weekly_forecast[i].summary + "</p>"); //append a <h2> within that div containing the day and <p> containing the high and low temperature for the day
							//Get the day of the week...
						let a = new Date(today); //parse current date
						let nextDay = weekday[a.getDay()+i]; //(get the day of the week)
						let dayData = $("#weekDay > h2").eq(i).data('fday'); //accessthe data-attribute of each H2 within #weekday
						$("#weekDay").append("<h2>"+weekday[a.getDay()+i+1]+"</h2>");

						// if (dayData = [i]) {	//if the data attribute of the H2 element === i
						// 	(weekday[i]);	//append the current day of the week in the H2
						// }

						console.log(dayData);

							//
					}
			});		
		});
});