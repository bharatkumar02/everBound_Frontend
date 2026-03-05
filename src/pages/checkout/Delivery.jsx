import { Trash2, Plus, MapPinned, CircleCheckBig } from 'lucide-react';

export default function Delivery({ currentStep, onContinue }) {
  return (
    <>
      <div className='w-full max-w-full'>
        <div className='mb-1.5 flex items-start justify-between gap-5 rounded-md bg-white px-2.5 py-3.5 shadow lg:px-5 lg:py-4'>
          <div className='space-y-3.5'>
            <h2 className='flex items-center gap-3 text-[14px] font-medium uppercase md:text-[15px] lg:gap-4 lg:text-base'>
              <MapPinned strokeWidth={1.7} />
              Delivery Address
              {/* After Completing Address */}
              {[2, 3].includes(currentStep) && (
                <CircleCheckBig
                  strokeWidth={1.7}
                  size={17}
                  className='text-green-700'
                />
              )}
            </h2>
            {/* After Completing Address */}
            {[2, 3].includes(currentStep) && (
              <p className='flex flex-col space-y-1 text-[14px] text-gray-500'>
                <span className='font-medium'>Bharat Kumar</span>
                <div>
                  Khaliyavas Mohalla, Dharuhera, Rewari, Near Badi Haveli
                  <span className='ml-2 border-l pl-2'>123106</span>
                </div>
                <span> +91 8397826133</span>
              </p>
            )}
          </div>
          {/* After Completing Address */}
          {[2, 3].includes(currentStep) && (
            <button className='rounded-md border-[0.5px] border-purple-700 px-2 py-1.5 text-[14px] text-purple-700 shadow'>
              Change
            </button>
          )}
        </div>
        {/* Before Completing Address */}
        {[1].includes(currentStep) && (
          <div>
            {/* Default Address */}
            <div className='flex justify-between gap-4 overflow-hidden rounded-md bg-white shadow-md'>
              <div className='space-y-2 p-3 md:p-5'>
                <strong className='text-gray-500'>Bharat Kumar</strong>
                <p>
                  Khaliyavas Mohalla, Ward No. 7, Dharuhera, Near Badi Haveli,
                  Rewari, Haryana
                </p>
                <p>Pincode: 123106</p>
                <p>Mobile: 8397826133</p>
              </div>
              <div className='grid place-items-end uppercase'>
                <button className='flex size-[3.5rem] items-center justify-center gap-2.5 rounded-tl-full bg-red-200 pt-2.5 pl-2.5 font-semibold text-red-500 lg:m-4 lg:size-fit lg:rounded-md lg:p-3'>
                  <Trash2 size={20} />
                  <span className='hidden lg:block'>Remove</span>
                </button>
              </div>
            </div>
            {/* For New Address */}

            <div className='my-1.5 rounded-lg bg-white shadow-md'>
              <button className='flex w-full items-center gap-3 p-3 font-semibold text-gray-500 lg:gap-4'>
                <Plus /> Add New Address
              </button>
            </div>
          </div>
        )}
        {[1].includes(currentStep) && (
          <div className='flex justify-end'>
            <button
              onClick={onContinue}
              className='rounded-md bg-purple-600 px-16 py-2.5 text-base font-medium text-white'
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </>
  );
}
