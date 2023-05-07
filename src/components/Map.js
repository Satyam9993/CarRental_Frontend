import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
const REACT_APP_MAP = process.env.REACT_APP_MAP;
mapboxgl.accessToken = REACT_APP_MAP;

const Map = () => {
    const mapContainerRef = useRef(null);
    const [lng, setLng] = useState(75.8577);
    const [lat, setLat] = useState(22.7196);
    const [zoom, setZoom] = useState(12);
    const [marker, setMarker] = useState(null);
    const [locationInfo, setLocationInfo] = useState(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
            maxBounds: [
                [75.578315, 22.145434], // Southwest coordinates
                [76.307008, 23.002773], // Northeast coordinates
            ],
        });

        
        // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Add search box to the map
        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            placeholder: 'Search for a location in Indore',
            countries: 'in',
            bbox: [75.578315, 22.145434, 76.307008, 23.002773], // bounding box for Indore city
        });
        map.addControl(geocoder);

        // Add marker on map click
        map.on('click', async (e) => {
            const { lng, lat } = e.lngLat;
            setLng(lng);
            setLat(lat);
            if (marker) {
                marker.remove();
            }
            const newMarker = new mapboxgl.Marker({ color: '#f44336' })
                .setLngLat([lng, lat])
                .addTo(map);
            setMarker(newMarker);

            // Reverse geocode the clicked coordinates
            const geocoderRes = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}&types=address`
            );
            const geocoderData = await geocoderRes.json();
            const address = geocoderData.features[0].place_name;
            setLocationInfo({ lng, lat, address });
        });

        return () => map.remove();
    }, [lng, lat, zoom, marker]);

    return (
        <div className="w-full h-[500px]">
            <div className="flex w-full bg-white text-black p-4">
                <h2 className="text-xl font-bold mb-2">Location Info</h2>
                {locationInfo ? (
                    <>
                        <p>Longitude: {locationInfo.lng}</p>
                        <p>Latitude: {locationInfo.lat}</p>
                        <p>Address: {locationInfo.address}</p>
                    </>
                ) : (
                    <p>Click on the map to select a location</p>
                )}
            </div>
            <div className="w-full h-full" ref={mapContainerRef} />
        </div>)
};

export default Map;
