import React, { useEffect, useMemo, useRef } from "react";
import styles from "../Components/Drivers.module.scss";
import { DriverTableProps, TDriver } from "../types/data";
import Image from "next/image";
import clsx from "clsx";

// Function to calculate distance using the Haversine formula
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180); // Convert degrees to radians
  const dLon = (lon2 - lon1) * (Math.PI / 180); // Convert degrees to radians

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};


const DriversTable: React.FC<DriverTableProps> = ({
  drivers,
  selectedDriver,
}) => {

  const rowRefs = useRef<{ [key: number]: HTMLTableRowElement | null }>({});

  const distances = useMemo(() => {
    return drivers.map((driver) => {
      const driverLatitude = driver.driver_latitude;
      const driverLongitude = driver.driver_longitude;
      const warehouseLatitude = driver.warehouse_latitude;
      const warehouseLongitude = driver.warehouse_longitude;

      return {
        id: driver.id_user,
        distance: calculateDistance(
          warehouseLatitude,
          warehouseLongitude,
          driverLatitude,
          driverLongitude
        ),
      };
    });
  }, [drivers]);

  useEffect(() => {
    if (selectedDriver) {
      const rowRef = rowRefs.current[selectedDriver.id_user];
      if (rowRef) {
        rowRef.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [selectedDriver]);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeaderText}>
        <p>
          Agents <span className={styles.checkedInText}>{drivers.length} Checked In</span>
        </p>
        <select className={styles.select} name="status" id="status">
          <option value="" disabled>
            Any Status
          </option>
          <option value="Ready">Ready</option>
          <option value="Delivering">Delivering</option>
          <option value="Away">Away</option>
          <option value="Returning">Returning</option>
        </select>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Status</th>
            <th>Distance (km)</th>
            <th>Arrival ETA</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver: TDriver) => {
            const driverDistance =
              distances.find((d) => d.id === driver.id_user)?.distance || 0;

            return (
              <tr
                key={driver.id_user}
                ref={(el) => (rowRefs.current[driver.id_user] = el)}
                style={{
                  backgroundColor:
                    selectedDriver?.id_user === driver.id_user
                      ? "lightblue"
                      : "transparent",
                }}
              >
                <td>
                  {
                    <Image
                      src={
                        driver.vehicle_type_code === "car"
                          ? "/car.png"
                          : "/motorcycle.png"
                      }
                      alt="image"
                      width={50}
                      height={50}
                    />
                  }
                </td>

                <td>
                  <p style={{color: 'blue', textAlign: 'start'}}>
                  {driver.full_name}
                  </p>
                </td>
                <td>
                  <p
                    className={clsx({
                      [styles.Ready]: driver.driver_status === "Ready",
                      [styles.Returning]: driver.driver_status === "Returning",
                      [styles.Delivering]: driver.driver_status === "Delivering"
                    })}
                  >
                    {driver.driver_status}
                  </p>
                </td>

                <td>{driverDistance.toFixed(2)} km</td>
                <td>{driver.arrival_eta}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DriversTable;
