import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import { Rating } from "@material-ui/lab";
import useStyles from './styles'

import mapStyles from './mapStyles'

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)'); {/*will be set False if more than 600px */}
    //const coordinates = {lat:0, lng:0}
    //console.log(coordinates)

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
                onChange={(e) => {
                    console.log(e)
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={(child) => setChildClicked(child)}>
                
                {places?.map((place, i)=>(
                    <div 
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                {
                    !isDesktop ? (
                        <LocationOnOutlined color="primary" fontSize="large"/>
                    ) : (
                        <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                            {place.name}
                        </Typography>

                        <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : null}
                        alt={place.name}/>

                        <Rating size="small" value={Number(place.rating)} readOnly/>
                        </Paper>
                        )
                }
                    </div>
                ))}

                {/**Following code Doesnt work */}
                {console.log(weatherData)}
                {weatherData?.list?.map((data, i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                        height={75}
                        alt=""
                        />
                    </div>
                    ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;