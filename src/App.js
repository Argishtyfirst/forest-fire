import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

const FireComponent = ({ text }) => <div>{text}</div>;

const mapData = {
  center: {
    lat: 40.408712,
    lng: 44.455204
  },
  zoom: 11
};
const App = ()=>{
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCbYNuN7cVZ_-hD5LSMXMWEUK5Da3wwm9s"}}
          defaultCenter={mapData.center}
          defaultZoom={mapData.zoom}
          distanceToMouse={()=>{}}
          yesIWantToUseGoogleMapApiInternals
        >
            <FireComponent 
            text="fire here" 
            lat={40.408712}
            lng={44.455204}
            />
          </GoogleMapReact>
      </div>
    );
}
 
export default App;
