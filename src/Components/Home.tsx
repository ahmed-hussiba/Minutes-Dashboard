"use client";
import React, { useEffect, useReducer, useState } from "react";
import { MapProvider } from "../Providers/map-provider";
import { MapComponent } from "./map";
import AsideBar from "./AsideBar";
import styles from "./Home.module.scss";
import DriversTable from "./DriversTable";
import OrdersTable from "./OrdersTable";
import { TDriver, TOrder } from '../types/data';
import { TOptions } from "i18next";
import useDrivers from "../Services/Drivers";
import useOrders from "../Services/Orders";


function reducer(state, action) {
  switch (action.type) {
    case "set_drivers":
      return {
        ...state,
        drivers: action.drivers,
      };
    case "set_orders":
      return {
        ...state,
        orders: action.orders,
      };
    case "get_drivers":
      return {
        ...state,
        drivers: state.drivers,
      };
    case "get_orders":
      return {
        ...state,
        orders: state.orders,
      };
    default:
      return state;
  }
}


const HomeComponent = () => {
  const [state, dispatch] = useReducer(reducer, { drivers: [], orders: [] });
  const [selectedDriver, setSelectedDriver] = useState<TDriver>()
  const [selectedOrder, setSelectedOrder] = useState<TOrder>()

  const {driversData} = useDrivers();
  const {ordersData} = useOrders()

  useEffect(() => {
    dispatch({ type: "set_drivers", drivers: driversData });
    dispatch({ type: "set_orders", orders: ordersData });

  }, [driversData, ordersData]);


  const handleDriverSelect = (driver:TDriver) => {
    setSelectedDriver(driver);
  }

  const handleOrderSelect = (order: TOrder) => {
    setSelectedOrder(order)
  }

  if(!state.drivers || !state.orders) return <p>Loading...</p>
  return (
    <div className={styles.mainContainer}>
      <div className={styles.bodyContainer}>
        <AsideBar />
        <div className={styles.mapContainer}>
          <MapProvider>
            <MapComponent  drivers={state.drivers} orders={state.orders}  onDriverSelect={handleDriverSelect}  onOrderSelect={handleOrderSelect}/>
          </MapProvider>
        </div>
      </div>
      <div className={styles.tablesContainer}>
        <OrdersTable orders={state.orders} selectedOrder={selectedOrder}/>
        <DriversTable drivers={state.drivers} selectedDriver = {selectedDriver}/>
      </div>
    </div>
  );
};

export default HomeComponent;
