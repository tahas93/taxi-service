import React from 'react';
import WithLayout from '../src/components/WithLayout';
import Dashboard from '@components/Dashboard';

const dashboard = () => {
  return (
    <div className='xs:px-5 mb-5 flex w-full flex-wrap items-center justify-center lg:px-0'>
      {/* @ts-ignore */}
      <Dashboard />
    </div>
  );
};

export default WithLayout(dashboard, 'dashboard', 'Dashboard');
