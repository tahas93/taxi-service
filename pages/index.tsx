import WithLayout from '../src/components/WithLayout';

const homePage = () => {
  return (
    <>
      <div className='xs:px-5 flex w-full flex-wrap items-center justify-center lg:px-0'>
        <div className='mt-5 flex w-full flex-wrap items-center justify-center space-y-10'>
          <h1 className='text-xl font-semibold text-blue-500'>
            Welcome to Taxi Service
          </h1>
          <div className='flex w-full items-center justify-center'>
            <img
              src='images/Taxi-Yellow-PNG-Photo.png'
              alt='taxi'
              className='w-40'
            />
          </div>
          <div className='flex w-full items-center justify-center'>
            <a
              className='block rounded-xl bg-blue-600 px-4 py-3 text-center text-lg font-semibold leading-loose text-white hover:bg-blue-700'
              href='/book'
            >
              Book Taxi
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithLayout(homePage, 'home', 'Home');
