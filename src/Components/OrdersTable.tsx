import { OrderTableProps, TOrder } from '../types/data';
import React, { useEffect, useRef } from 'react';
import styles from '../Components/Orders.module.scss'
import clsx from 'clsx';

const OrdersTable : React.FC<OrderTableProps> = ({orders, selectedOrder}) => {

    const rowRefs = useRef<{[key: string]: HTMLTableRowElement| null}>({})


    useEffect(() => {
      if(selectedOrder){
        const rowRef = rowRefs.current[selectedOrder.order_nr]
        rowRefs.current[selectedOrder.order_nr]?.focus()
        if(rowRef){
          rowRef.scrollIntoView({behavior: 'smooth', block: 'center'})
        }
      }
    }, [selectedOrder])


    return (
      <div className={styles.tableContainer}>
      <div className={styles.tableHeaderText}>
        <p>
          Orders <span className={styles.checkedInText}>{orders.length} Active</span>
        </p>
        <select className={styles.select} name="cars" id="cars">
          <option value="" disabled selected>
            Any
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
          <th>Order Number</th>
          <th>Package</th>
          <th>Status</th>
          {/* <th>Flags</th> */}
          <th>Pickup/ Delivery ETA</th>
        </tr>
        </thead>
        <tbody>
        {orders.map((order: TOrder) => (
          <tr
          key={order.order_nr}
          ref = {(el) => rowRefs.current[order.order_nr] = el}
          style={{background: selectedOrder?.order_nr===order.order_nr ? 'lightblue': 'transparent'}}
          >
            <td>
              <p style={{color: 'blue'}}>
              {order.order_nr}
              </p>
              </td>
            <td>{order.awb_nr}</td>
            <td>
                  <p
                    className={clsx({
                      [styles.Fulfilled]: order.order_status === "Fulfilled",
                      [styles.Undelivered]: order.order_status === "Undelivered",
                      [styles.Arrived]: order.order_status === "Arrived",
                      [styles.Created]: order.order_status === "Created"
                    })}
                  >
                    {order.order_status}
                  </p>
                </td>
            <td>{order.estimated_pickup_at}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    );
}

export default OrdersTable;
