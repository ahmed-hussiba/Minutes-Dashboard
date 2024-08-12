export type TDriver = {
  id_user: number;
  full_name: string;
  driver_status: string;
  warehouse_latitude: number;
  warehouse_longitude: number;
  driver_latitude: number;
  driver_longitude: number;
  timezone: string;
  vehicle_code: string;
  vehicle_name: string;
  vehicle_type_code: string;
  vehicle_type_description: string;
  arrival_eta: string
};

export type TOrder = {
  order_nr: string,
  order_status: string,
  awb_nr: string;
  delivery_address: {
    lat: number;
    lng: number;
    contact_name: string,
  };
  estimated_pickup_at: string,
  estimated_delivery_at: null;
  timezone: string,
  country_code: string,
  warehouse_code: string,
};


export type MapComponentProps = {
  drivers: TDriver[];
  orders: TOrder[];
  onDriverSelect: (driver: TDriver) => void;
  onOrderSelect: (order: TOrder) => void;
}

export type DriverTableProps = {
  drivers: TDriver[];
  selectedDriver: TDriver | null | undefined;
}

export type OrderTableProps = {
  orders: TOrder[];
  selectedOrder: TOrder | null | undefined;
}
