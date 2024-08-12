import { NextResponse } from "next/server";

const driversList = [
    {
        "id_user": 34,
        "full_name": "Dima Arafat",
        "driver_status": "Ready",
        "warehouse_latitude": 25.198398,
        "warehouse_longitude": 55.27807,
        "driver_latitude": 25.2041478,
        "driver_longitude": 55.2777267,
        "timezone": "+04:00",
        "vehicle_code": "car_toyota_rush_ae",
        "vehicle_name": "Toyota Rush",
        "vehicle_type_code": "car",
        "vehicle_type_description": "Car",
        "arrival_eta": "2024-08-10T15:30:00"
    },
    {
        "id_user": 32,
        "full_name": "Esraa Sherif",
        "driver_status": "Returning",
        "warehouse_latitude": 25.198398,
        "warehouse_longitude": 55.23405,
        "driver_latitude": 25.1941478,
        "driver_longitude": 55.2702267,
        "timezone": "+04:00",
        "vehicle_code": "motorcycle_normal_ae",
        "vehicle_name": "Standard Motorcycle",
        "vehicle_type_code": "motorcycle",
        "vehicle_type_description": "Motorcycle",
        "arrival_eta": "2024-08-10T16:00:00"
    },
    {
        "id_user": 21,
        "full_name": "Anup Samyal",
        "driver_status": "Delivering",
        "warehouse_latitude": 25.198398,
        "warehouse_longitude": 55.27807,
        "driver_latitude": 25.1971478,
        "driver_longitude": 55.2707267,
        "timezone": "+04:00",
        "vehicle_code": "motorcycle_normal_ae",
        "vehicle_name": "Standard Motorcycle",
        "vehicle_type_code": "motorcycle",
        "vehicle_type_description": "Motorcycle",
        "arrival_eta": "2024-08-10T17:30:00"
    },
    {
        "id_user": 24,
        "full_name": "Ola Sameh",
        "driver_status": "Ready",
        "warehouse_latitude": 25.198398,
        "warehouse_longitude": 55.27807,
        "driver_latitude": 25.1947478,
        "driver_longitude": 55.2685267,
        "timezone": "+04:00",
        "vehicle_code": "car_toyota_rush_ae",
        "vehicle_name": "Toyota Rush",
        "vehicle_type_code": "car",
        "vehicle_type_description": "Car",
        "arrival_eta": "2024-08-10T18:00:00"
    },
    {
        "id_user": 25,
        "full_name": "Hassan Ali",
        "driver_status": "Returning",
        "warehouse_latitude": 25.199000,
        "warehouse_longitude": 55.279000,
        "driver_latitude": 25.195500,
        "driver_longitude": 55.270000,
        "timezone": "+04:00",
        "vehicle_code": "moto_honda_cbr_ae",
        "vehicle_name": "Honda CBR",
        "vehicle_type_code": "moto",
        "vehicle_type_description": "Motorcycle",
        "arrival_eta": "2024-08-10T19:15:00"
    },
    {
        "id_user": 26,
        "full_name": "Sarah El-Sayed",
        "driver_status": "Delivering",
        "warehouse_latitude": 25.200000,
        "warehouse_longitude": 55.280000,
        "driver_latitude": 25.196500,
        "driver_longitude": 55.270500,
        "timezone": "+04:00",
        "vehicle_code": "car_nissan_xterra_ae",
        "vehicle_name": "Nissan Xterra",
        "vehicle_type_code": "car",
        "vehicle_type_description": "Car",
        "arrival_eta": "2024-08-10T20:30:00"
    },
    {
        "id_user": 27,
        "full_name": "Amir Kassem",
        "driver_status": "Returning",
        "warehouse_latitude": 25.200500,
        "warehouse_longitude": 55.280500,
        "driver_latitude": 25.197000,
        "driver_longitude": 55.270500,
        "timezone": "+04:00",
        "vehicle_code": "moto_yamaha_yzf_ae",
        "vehicle_name": "Yamaha YZF",
        "vehicle_type_code": "moto",
        "vehicle_type_description": "Motorcycle",
        "arrival_eta": "2024-08-10T21:00:00"
    }
];




export async function GET() {
    return NextResponse.json(driversList);
}
