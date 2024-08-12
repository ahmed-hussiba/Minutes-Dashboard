import { cache } from "react";
import useSWR from "swr";

const fetcher = async() => {
        const orders = await fetch('/api/orders/');

        if (!orders.ok) {
            throw new Error('Failed to fetch drivers');
          }

        return orders.json();
}


const useOrders = () => {
    const {data, isLoading, error} =useSWR('api/orders/', fetcher, {refreshInterval: 3000})

    return{
        ordersData: data,
        isLoading,
        error
    };
}

export default useOrders;;
