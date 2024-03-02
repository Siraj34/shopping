import React from 'react'
import { useSelector } from 'react-redux'
import { selectOrders } from '../reducer/sliceReducer'
import { useNavigate } from 'react-router-dom'

export default function OrderHistoryScreen() {
  const orders = useSelector(selectOrders)
  const navigate = useNavigate()

  return (
    <div className=" h-full  sm:flex sm:flex-col-1 text-black font-bold md:justify-center ">
      <div className="divide-y divide-slate-900 font-medium uppercase">
        <div>
          <h1 className="m-5 p-4 border-1">Order History</h1>
        </div>
        <div className="md:grid md:grid-cols-3 md:justify-center ">
          <table
            className="m-6 p-3 gap-5  grid grid-cols-1 
           border-4 border-slate-900 divide-y divide-slate-900"
          >
            <th className="m-2 ">ID</th>

            <th className="m-2">DATE</th>
            <th className="m-2">TOTAL</th>
            <th className="m-2">PAID</th>
            <th className="m-2">DELIVERED</th>
            <th className="m-2">ACTIONS</th>
          </table>

          <table
            className=" m-6 p-3 gap-5  grid grid-cols-1 border 
           border-slate-900 divide-y divide-slate-200 border-b-4 "
          >
            <th className=" m-2">{orders?.order?._id}</th>
            <th className="m-2">{orders?.order?.createdAt.substring(0, 10)}</th>
            <th className="m-2">{orders?.order?.totalPrice}</th>
            <th className="m-2">
              {orders?.order?.isPaid
                ? orders?.order?.paidAt.substring(0, 10)
                : 'No'}
            </th>
            <th className="m-2">
              {orders?.order?.isDelivered
                ? orders?.order?.deliveredAt.substring(0.1)
                : 'No'}
            </th>
            <th className="">
              <button
                onClick={() => {
                  navigate(`/order/${orders?.order?._id}`)
                }}
                className=" mb-3"
              >
                Detailes
              </button>
            </th>
          </table>
        </div>
      </div>
    </div>
  )
}
