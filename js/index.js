$(document).ready(function(){

	let long;
	let lat;
	let currentCity;
	let currentState;
	let country;

		$.getJSON("https://cors-anywhere.herokuapp.com/http://ip-api.com/json", (data_init) => { //access RESTFUL geo location API & set lattitude.longitude
			lat = data_init.lat;
			long = data_init.lon;
			currentCity = data_init.city;
			currentState = data_init.region;
			country = data_init.country;
					$("#cityState").append("<h1>"+currentCity + "," + currentState + "</h1>");

		let api = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/{INSERT API KEY HERE}/" + lat +"," + long;	
			//Access weather API
		// console.log(data_init);
		

			$.getJSON(api, (data) => {
				console.log(data);
				
				const weatherStatus = data.currently.summary.toLowerCase();
				// const statusChecker = weatherStatus.toLowerCase();

					if (weatherStatus.includes('overcast')) { //Change the backgorund according to the current weather forecast
						$('body').css("background-image", "url(css/graphics/overcast.jpg)");
					} else if (weatherStatus.includes('cloudy')) { 
						$('body').css("background-image", "url(css/graphics/cloudy.jpg)");
					} else if (weatherStatus.includes('sunny')) {
						$('body').css("background-image", "url(css/graphics/sunshine.jpg)");
					} else if (weatherStatus.includes('fog')) {
						$('body').css("background-image", "url(css/graphics/fog.jpg)");
					} else if (weatherStatus.includes('rain')) {
						$('body').css("background-image", "url(css/graphics/rain.jpg)");
					}
					else {
						$('body').css("background-image", "url(css/graphics/clear_sky.jpg)");	
					}
				
				$("#currentTemp").append("<h4 id='tempData'>Currently:<br> "+ Math.round(data.currently.temperature)+"&#8457</h4>");
				$("#currentConditions").append("<h4>Conditions:<br>"+ weatherStatus +"</h4>");
				$("#percipitationChance").append("<h4> Chance of Percipitation:<br> " + data.currently.precipProbability +"%" + "</h4>");
				// 	$("#reveal").on('click',() => { //click button
				// 		data.main.tempData //on click convert temperature to farenheight
				// 	});

				const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; //array for days of the week
				const weekly_forecast = data.daily.data;
				let today = moment().format('D MMM, YYYY');//Format the date in the form Day / Month / Year from moment.js library

					for (var i = 1; i <= 5; i++) { //Begin loop - loop over the object's next 5 days
						const forecast = weekly_forecast[i];
						
						$('#day_'+[i]).append("<h3> HI: "+Math.round(forecast.apparentTemperatureMax) + "&#8457 LO: "+ Math.round(forecast.apparentTemperatureMin) +  "&#8457</h3><br><P>" + weekly_forecast[i].summary + "</p>"); //append a <h2> within that div containing the day and <p> containing the high and low temperature for the day
							
							//Get the day of the week...
						const todaysDate = new Date(today); //parse current date
						const nextDay = todaysDate.getDay(); //(get the day of the week)

						let forecastDay = (nextDay + i) % 7; // wrap around end of week
						$("#weekDay").append("<h2>"+weekday[forecastDay]+"</h2>"); //append the current day of the week in the H2
					}
			});		
		});
});
