import { NextResponse } from "next/server";

const ordersList = [
    {
        "order_nr": "IAEE7V002RPZ93X4JS",
        "order_status": "Created",
        "awb_nr": 'PDB229477A',
        "delivery_address": {
            "lat": 25.1923,
            "lng": 55.2749,
            "contact_name": "joud zouzou"
        },
        "estimated_pickup_at": "2024-07-31T00:36:12",
        "estimated_delivery_at": null,
        "timezone": "+04:00",
        "country_code": "ae",
        "warehouse_code": "W00000002A"
    },
    {
        "order_nr": "IAEE7V002RPZ93X4JT",
        "order_status": "Fulfilled",
        "awb_nr": "PCB234777A",
        "delivery_address": {
            "lat": 25.1970,
            "lng": 55.2750,
            "city": "Dubai",
            "address": "Test in the morning, 672F+2F - Dubai",
            "contact_name": "Yasser Yasser",
            "country_code": "ae",
            "contact_phone_number": "+971-58-5069665"
        },
        "estimated_pickup_at": "2024-10-28T08:43:44",
        "estimated_delivery_at": null,
        "timezone": "+04:00",
        "country_code": "ae",
        "warehouse_code": "W00000002A"
    },
    {
        "order_nr": "IAEE7V002RPZ93X4JU",
        "order_status": "Arrived",
        "awb_nr": 'PMG234997N',
        "delivery_address": {
            "lat": 25.1925,
            "lng": 55.2722,
            "city": "Dubai",
            "address": "Test in the morning, 672F+2F - Dubai",
            "contact_name": "Yasser Yasser",
            "country_code": "ae",
            "contact_phone_number": "+971-58-5069665"
        },
        "estimated_pickup_at": "2024-10-28T08:43:44",
        "estimated_delivery_at": null,
        "timezone": "+04:00",
        "country_code": "ae",
        "warehouse_code": "W00000002A"
    },
    {
        "order_nr": "IAEE7V002RPZ93X4JV1",
        "order_status": "Undelivered",
        "awb_nr": 'PER234445M',
        "delivery_address": {
            "lat": 25.1975,
            "lng": 55.2722,
            "city": "Dubai",
            "address": "Test in the morning, 672F+2F - Dubai",
            "contact_name": "Yasser Yasser",
            "country_code": "ae",
            "contact_phone_number": "+971-58-5069665"
        },
        "estimated_pickup_at": "2024-10-28T08:43:44",
        "estimated_delivery_at": null,
        "timezone": "+04:00",
        "country_code": "ae",
        "warehouse_code": "W00000002A"
    },
    {
        "order_nr": "IAEE7V002RPZ93X4JT2",
        "order_status": "Fulfilled",
        "awb_nr": "PDB229478B",
        "delivery_address": {
            "lat": 25.1976,
            "lng": 55.2801,
            "contact_name": "Sara Ahmed"
        },
        "estimated_pickup_at": "2024-08-01T10:22:30",
        "estimated_delivery_at": "2024-08-03T14:45:00",
        "timezone": "+04:00",
        "country_code": "ae",
        "warehouse_code": "W00000003B"
    },
    {
        "order_nr": "IAEE7V002RPZ93X4JU2",
        "order_status": "Arrived",
        "awb_nr": "PDB229479C",
        "delivery_address": {
            "lat": 25.1989,
            "lng": 55.2721,
            "contact_name": "Omar Al-Mansoori"
        },
        "estimated_pickup_at": "2024-08-02T12:15:45",
        "estimated_delivery_at": "2024-08-04T16:30:00",
        "timezone": "+04:00",
        "country_code": "ae",
        "warehouse_code": "W00000004C"
    },
    {
        "order_nr": "IAEE7V002RPZ93X4JV3",
        "order_status": "Undelivered",
        "awb_nr": "PDB229480D",
        "delivery_address": {
            "lat": 25.1905,
            "lng": 55.2753,
            "contact_name": "Fatima Al-Sheikh"
        },
        "estimated_pickup_at": "2024-08-03T09:05:20",
        "estimated_delivery_at": null,
        "timezone": "+04:00",
        "country_code": "ae",
        "warehouse_code": "W00000005D"
    },
    {
        "order_nr": "IAEE7V002RPZ93X4JW1",
        "order_status": "Fulfilled",
        "awb_nr": "PDB229481E",
        "delivery_address": {
            "lat": 25.2021,
            "lng": 55.2712,
            "contact_name": "Mohammed Tariq"
        },
        "estimated_pickup_at": "2024-08-04T14:20:55",
        "estimated_delivery_at": "2024-08-06T18:00:00",
        "timezone": "+04:00",
        "country_code": "ae",
        "warehouse_code": "W00000006E"
    },
    {
        "order_nr": "IAEE7V002RPZ93X4KZ1",
        "order_status": "Arrived",
        "awb_nr": "PDB229482F",
        "delivery_address": {
            "lat": 25.1917,
            "lng": 55.2798,
            "contact_name": "Layla Ali"
        },
        "estimated_pickup_at": "2024-08-05T11:35:40",
        "estimated_delivery_at": "2024-08-07T13:25:00",
        "timezone": "+04:00",
        "country_code": "ae",
        "warehouse_code": "W00000007F"
    }
];



export async function GET() {
    return NextResponse.json(ordersList);
}
