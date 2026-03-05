import React from 'react';

const ProfileProgress = ({ requiredFields, filled, completeness }) => (
  <section className='border-y border-dashed border-purple-700 p-4 lg:px-12'>
    <div className='flex items-center justify-between'>
      <p className='font-medium'>Profile Completeness</p>
      <p className='font-semibold text-purple-700'>{completeness}%</p>
    </div>
    {/* Progress bar with rounded icons above */}
    <div className='relative w-full py-7'>
      {/* Icons row */}
      <div className='absolute top-1/2 right-0 left-0 z-10 flex -translate-y-1/2 justify-between'>
        {requiredFields.map((field, idx) => {
          const Icon = field.icon;
          const isFilled = filled[idx];
          return (
            <div
              key={field.key}
              className={
                'flex items-center justify-center rounded-full border-2 ' +
                (isFilled
                  ? 'border-purple-700 bg-purple-700 shadow-md'
                  : 'border-gray-300 bg-gray-200') +
                ' h-6 w-6 transition-colors duration-200'
              }
            >
              <Icon
                size={14}
                className={isFilled ? 'text-white' : 'text-gray-400'}
              />
            </div>
          );
        })}
      </div>
      {/* Progress bar centered with icons */}
      <div className='absolute top-1/2 right-0 left-0 -translate-y-1/2'>
        <div className='h-2 w-full overflow-hidden rounded-full bg-gray-200'>
          <div
            className='h-full rounded-full bg-purple-700 transition-all duration-300'
            style={{ width: `${completeness}%` }}
          ></div>
        </div>
      </div>
    </div>
    <p className='text-center text-xs text-gray-500'>
      Complete your profile to unlock new features!
    </p>
  </section>
);

export default ProfileProgress;
