"use client";

import { MapComponentProps, TDriver, TOrder } from "../types/data";
import { Circle, GoogleMap, Marker, Polygon } from "@react-google-maps/api";
import React, { useRef } from "react";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
};
const defaultMapCenter = {
  lat: 25.198398,
  lng: 55.27807,
};
const defaultMapZoom = 15;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "terrain",
};


const MapComponent: React.FC<MapComponentProps> = ({
  drivers,
  orders,
  onDriverSelect,
  onOrderSelect,
}) => {
  const iconSize = new window.google.maps.Size(60, 60);

  const handleMarkerclick = (driver: TDriver) => {
    if (onDriverSelect) {
      onDriverSelect(driver);
    }
  };

  const handleOrderMarkerClick = (order: TOrder) => {
    if (onOrderSelect) {
      onOrderSelect(order);
    }
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        {drivers.map((driver: TDriver) => (
          <Marker
            key={driver.id_user}
            icon={{
              url:
                driver.vehicle_type_description === "Car"
                  ? "/car.png"
                  : "/motorcycle.png",
              scaledSize: iconSize,
            }}
            position={{
              lat: driver.driver_latitude,
              lng: driver.driver_longitude,
            }}
            onClick={() => {
              handleMarkerclick(driver);
            }}
          />
        ))}
        {orders.map((order) => (
          <Marker
            key={order.order_nr}
            icon={{ url: "/order.png", scaledSize: iconSize }}
            position={{
              lat: order.delivery_address.lat,
              lng: order.delivery_address.lng,
            }}
            onClick={() => handleOrderMarkerClick(order)}
          />
        ))}
        <Circle
          center={defaultMapCenter}
          options={{
            strokeColor: 'lightblue',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.35,
            visible: true,
            radius: 1100,
            zIndex: 1,
          }}
        />
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
