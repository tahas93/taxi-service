import { ApplicationContext } from "@src/store/ApplicationContext";
import { useState, useEffect, useContext } from "react";

const Dashboard = () => {
  const [bookings, setBookings] = useState<any>();
  const { sharedValue } = useContext(ApplicationContext);

  useEffect(() => {
    setBookings(sharedValue);
  }, []);

  return (
    <div className='mt-5 flex w-full flex-wrap items-center justify-center space-y-10'>
      <h1 className='text-xl font-semibold text-blue-500'>View Bookings</h1>
      <div className='flex w-full items-center justify-center'>
        <img
          src='images/Taxi-Yellow-PNG-Photo.png'
          alt='taxi'
          className='w-40'
        />
      </div>
      <div className='flex w-full items-center justify-center'>
        {bookings === undefined ? (
          <h1 className='text-xl font-semibold text-red-500'>No Bookings Available</h1>
        ) : (
          <ul className='flex w-full max-w-md flex-wrap items-center justify-start space-y-4'>
            {bookings?.map((item: any, ind: any) => (
              <li
                key={ind}
                className='w-full rounded-md border border-black px-2 py-1'
              >
                <div className='xs:grid-cols-1 xs:space-y-2 mb-2 grid lg:grid-cols-2 lg:space-y-0'>
                  <div className='w-full'>
                    <p>Customer Name:</p>
                    <p className="font-medium">{item.fullname}</p>
                  </div>
                  <div className='w-full'>
                    <p>Customer Phone:</p>
                    <p className="font-medium">{item.phone}</p>
                  </div>
                </div>
                <p className='mb-2'>
                  Pickup Location: <span className="font-medium">{item.pickup_location}</span>
                </p>
                <p className='mb-2'>Drop Location: <span className="font-medium">{item.destination}</span></p>
                <p>
                  Co-Pessanger:{' '}
                    <span className="font-medium">{item.copessangers === '' ? '0' : item.copessangers}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Dashboard;