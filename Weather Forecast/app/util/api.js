import * as React from 'react'
import * as ReactDOM from 'react-dom'
import "babel-polyfill";
import data from  '../util/response'



export function fetchWeather(latitude,longitude){
	const url=window.encodeURI(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
	return fetch(url)
		.then((result)=>result.json())
		.then((data)=>{
			if(!data.current_weather){
				throw new Error(data.message)
			}
			console.log(data.current_weather.temperature)
			return data.current_weather.temperature
		})
}

export function Doctor(city,specialisation,category){

		const url=window.encodeURI(`https://www-latest.practo.com/marketplace-api/dweb/search/provider?results_type=doctor&city=${city}&word=${specialisation}&category=${category}`)
		return fetch(url,{headers:{"Access-Control-Allow-Origin" : "*"}})
			.then((result)=>result.json())
			.then((data)=>{
				if(!data.doctors){
					throw new Error("Data unavailable!")
				}
				console.log("Doctor data", data.doctors)
				return data.doctors.entities
			})
}
export function fetchDoctor(city,specialisation,category){
	console.log(data)
const myPromise = new Promise((resolve) => {
	setTimeout(() => {
	  resolve(data.doctors.entities);
	}, 3000);
  });
  return myPromise;
}