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

		// let api = "https://crossorigin.me/https://api.darksky.net/forecast/1246aa267663e22a4e428e4b20f0df5b/" + lat +"," + long;
		//Access weather API
		// console.log(data_init);
		

			$.getJSON(api, (data) => {
				// console.log(data);
				let weatherStatus = data.currently.icon; //get Icon from API related to current weather conditions

				// switch(weatherStatus) {
				// 	case:
				// }

				$("#currentTemp").append("<h4 id='tempData'>Currently<br> "+data.currently.temperature+"</h4>");
				$("#currentConditions").append("<h4>Conditions<br>"+data.currently.summary +"</h4>");
				$("#percipitationChance").append("<h4> Chance of Percipitation<br> " + data.currently.precipProbability +"%" + "</h4>");
				// $(".wind")	
				// 	$("#reveal").on('click',() => { //click button
				// 		data.main.tempData //on click convert temperature to farenheight
				// 	});
				
				// $("#tempData").hover( () => {
				// 	$(this).fadeToggle('slow', () => {

				// 	});
				// });
				const weekly_forecast = (argument) => {
					
				}
				let day_1 = data.daily.data[1];
				console.log(day_1);
				let day_2 = data.daily.data[2];
				console.log(day_2);
				let day_3 = data.daily.data[3];
				console.log(day_3);
				let day_4 = data.daily.data[4];
				console.log(day_4);
				let day_5 = data.daily.data[5];
				console.log(day_5);
			});		
		});
});