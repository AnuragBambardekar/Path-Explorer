# Path Explorer - Google Maps Travel Companion using React.js 

Geolocation, Google Maps API & Google Places API, fetching API data based on the location, data filtering

## About Project
I followed the tutorial by Adrian Hajdin of JavaScript Mastery YouTube channel to simultaneously implement and learn about React.js, Material UI and using API's. <br>
The project uses 3 API's to show the nearby hotels, restaurants and attractions. The application launches with the geolocation of the user (provided, location access is granted to the Browser.) <br>
There are filters, such as Ratings [All, 3.0+, 4.0+, 4.5+] and Type of search parameter [Hotels, Restaurants and Attractions] to refine and present the results accordingly. <br>
User can also pinch and zoom the Map and results will be populated as defined by the filter criteria set. <br>
User can view the details of the restaurants and hotels on the DetailCard present on the page, and a link is provided too such that the TripAdvisor page of the restaurant or hotel can be visited. <br>
Lastly, there is a search field on the Navigation bar, which allows the user to search for places on the entire Earth. This is using the Places API to fetch the various places on Earth. <br>

**The code in the repository, if being used, needs to be modified such that Weather API keys are added in the index.js file under api folder, and the Google Maps API keys are added under the index.html file under public folder. Also, Travel Advisor API keys will be required.**

**Resources that I used:** <br>
- API Service by https://openweathermap.org/ to fetch Weather Data, I was able to fetch the weather data, but was unable to populate the weather icons on the webpage.
- API Service by RapidAPI - Travel Advisor API https://rapidapi.com/apidojo/api/travel-advisor/
- API Service by Google Maps https://console.cloud.google.com/
- Maps JavaScript API
- Places API
- www.snazzymaps.com to change the map skin/theme
- www.netlify.com to deploy the application

**Learning Outcomes:** <br>
- Advanced React Best Practices, such as folder & file structure, hooks, and refs
- Creating a User Interface using Material UI
- Working with Google Maps API
- fetching data from unlimited sources using RapidAPI

## Screenshots & Demo
![Google Cloud](/Images/GoogleCloudAPI.png?raw=true "Google Cloud")
![Path Explorer](/Images/PathExplorer.png?raw=true "Path Explorer")

**Search different places all over Earth:** <br>

https://user-images.githubusercontent.com/104393371/210278433-28d59a43-f2f4-4f63-b630-e1b709ff2908.mp4

**Project Demo:** <br>

https://user-images.githubusercontent.com/104393371/210278436-9e2bb776-4c4d-485a-b18b-b9546d58d9a1.mp4


## Hosting
**Deployed the application on netlify hosting service:** https://path-explorer-bamba.netlify.app/  [might disable/change link later due to limited API requests]<br>

**Deployment Process:** <br>
- npm run build
- Copy/Upload the build folder onto the netlify website.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## References and Sources
- https://www.youtube.com/watch?v=UKdQjQX1Pko - JavaScript Mastery YouTube Channel - Build and Deploy a Google Maps Travel Companion Application | React.js <br>
- https://github.com/adrianhajdin/project_travel_advisor
