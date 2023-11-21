import React, { useEffect, useState } from 'react';
import WithLayout from '../src/components/WithLayout';

const dashboard = () => {
  const [bookings, setBookings] = useState<any>();
  useEffect(() => {
    const bookings = localStorage.getItem('booking');
    if (bookings) {
      setBookings(bookings);
    }
  }, []);

  console.log('bookings', bookings);
  const booking = JSON.parse(bookings || '[]');
  console.log('booking', booking);

  return (
    <>
      <div className='xs:px-5 mb-5 flex w-full flex-wrap items-center justify-center lg:px-0'>
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
            <ul className='flex w-full max-w-md flex-wrap items-center justify-start space-y-4'>
              {booking.map((item: any, ind: any) => (
                <li
                  key={ind}
                  className='w-full rounded-md border border-black px-2 py-1'
                >
                  <div className='xs:grid-cols-1 xs:space-y-2 mb-2 grid lg:grid-cols-2 lg:space-y-0'>
                    <div className='w-full'>
                      <p>Customer Name:</p>
                      <p>{item.formData.fullname}</p>
                    </div>
                    <div className='w-full'>
                      <p>Customer Phone:</p>
                      <p> {item.formData.phone}</p>
                    </div>
                  </div>
                  <p className='mb-2'>
                    Pickup Location: {item.formData.pickup_location}
                  </p>
                  <p>Drop Location: {item.formData.destination}</p>
                  <p>
                    Co-Pessanger:{' '}
                    {item.formData.copessangers === ''
                      ? '0'
                      : item.formData.copessangers}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithLayout(dashboard, 'dashboard', 'Dashboard');
