import React from 'react';
import { User, Mail, Phone, CalendarDays, MapPin, Truck } from 'lucide-react';

const ProfileForm = ({
  formData,
  setFormData,
  editing,
  handleSave,
  handleCancel,
  handleInputChange,
  firstInputRef,
}) => (
  <form className='space-y-6 px-4 lg:px-12' onSubmit={handleSave}>
    <h1 className='text-lg font-semibold'>Personal Information</h1>
    <div className='space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-3'>
      <div>
        <label className='mb-1.5 block text-sm font-semibold' htmlFor='name'>
          Full Name
        </label>
        <div
          className={`relative rounded-md border-[0.5px] bg-gray-50/70 ${editing && 'border-purple-700'}`}
        >
          <User
            className='text-text-secondary-light absolute top-1/2 left-3 -translate-y-1/2'
            size={18}
          />
          <input
            ref={firstInputRef}
            className='w-full bg-transparent py-3 pr-4 pl-10 outline-none'
            id='name'
            type='text'
            placeholder='Enter your full name'
            value={formData.fullName}
            onChange={e => handleInputChange('fullName', e.target.value)}
            readOnly={!editing}
            tabIndex={editing ? 0 : -1}
          />
        </div>
      </div>
      <div>
        <label className='mb-1.5 block text-sm font-semibold' htmlFor='email'>
          Email Address
        </label>
        <div
          className={`relative rounded-md border-[0.5px] bg-gray-50/70 ${editing && 'border-purple-700'}`}
        >
          <Mail
            className='text-text-secondary-light absolute top-1/2 left-3 -translate-y-1/2'
            size={18}
          />
          <input
            className='w-full bg-transparent py-3 pr-4 pl-10 outline-none'
            id='email'
            type='email'
            placeholder='Enter your email address'
            value={formData.email}
            onChange={e => handleInputChange('email', e.target.value)}
            readOnly={!editing}
            tabIndex={editing ? 0 : -1}
            style={
              !editing
                ? { background: 'transparent', cursor: 'not-allowed' }
                : {}
            }
          />
        </div>
      </div>
      <div>
        <label className='mb-1.5 block text-sm font-semibold' htmlFor='phone'>
          Phone Number
        </label>
        <div
          className={`relative rounded-md border-[0.5px] bg-gray-50/70 ${editing && 'border-purple-700'}`}
        >
          <Phone
            className='text-text-secondary-light absolute top-1/2 left-3 -translate-y-1/2'
            size={18}
          />
          <input
            className='w-full bg-transparent py-3 pr-4 pl-10 outline-none'
            id='phone'
            type='tel'
            placeholder='Enter your phone number'
            value={formData.phone}
            onChange={e => handleInputChange('phone', e.target.value)}
            readOnly={!editing}
            tabIndex={editing ? 0 : -1}
            style={
              !editing
                ? { background: 'transparent', cursor: 'not-allowed' }
                : {}
            }
          />
        </div>
      </div>
      <div>
        <label className='mb-1.5 block text-sm font-semibold' htmlFor='dob'>
          Date of Birth
        </label>
        <div
          className={`relative rounded-md border-[0.5px] bg-gray-50/70 ${editing && 'border-purple-700'}`}
        >
          <CalendarDays
            className='text-text-secondary-light absolute top-1/2 left-3 -translate-y-1/2'
            size={18}
          />
          <div className='relative'>
            <input
              className='w-full appearance-none bg-transparent py-3 pr-4 pl-10 outline-none'
              id='dob'
              type='date'
              value={formData.dob || ''}
              onChange={e => handleInputChange('dob', e.target.value)}
              readOnly={!editing}
              tabIndex={editing ? 0 : -1}
              style={
                !editing
                  ? { background: 'transparent', cursor: 'not-allowed' }
                  : {}
              }
            />
            {!formData.dob && (
              <span className='pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 text-sm text-gray-400 lg:hidden'>
                DD/MM/YYYY
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
    {/* Address Section - improved UI */}
    <div className='space-y-4'>
      <h1 className='text-lg font-semibold'>Address Information</h1>
      <div className='space-y-4 lg:grid lg:grid-cols-2 lg:gap-6'>
        <div>
          <label className='mb-1.5 block text-sm font-semibold'>
            Current Address
          </label>
          <div
            className={`relative flex items-center rounded-md border-[0.5px] bg-gray-50/70 ${editing && 'border-purple-700'}`}
          >
            <MapPin className='absolute top-0 left-3 mt-3' size={18} />
            <textarea
              className='w-full bg-transparent py-3 pr-4 pl-10 outline-none'
              placeholder='Enter your current address'
              value={formData.addresses[0]?.address || ''}
              onChange={e => {
                const updated = [...formData.addresses];
                if (updated[0]) updated[0].address = e.target.value;
                setFormData(prev => ({ ...prev, addresses: updated }));
              }}
              readOnly={!editing}
              tabIndex={editing ? 0 : -1}
              style={
                !editing
                  ? { background: 'transparent', cursor: 'not-allowed' }
                  : {}
              }
            />
          </div>
        </div>
        <div>
          <label className='mt-4 mb-1.5 block text-sm font-semibold lg:mt-0'>
            Shipping Address
          </label>
          <div
            className={`relative flex items-center rounded-md border-[0.5px] bg-gray-50/70 ${editing && 'border-purple-700'}`}
          >
            <Truck className='absolute top-0 left-3 mt-3' size={18} />
            <textarea
              className='w-full bg-transparent py-3 pr-4 pl-10 outline-none'
              placeholder='Enter your shipping address'
              value={formData.addresses[1]?.address || ''}
              onChange={e => {
                const updated = [...formData.addresses];
                if (updated[1]) updated[1].address = e.target.value;
                setFormData(prev => ({ ...prev, addresses: updated }));
              }}
              readOnly={!editing}
              tabIndex={editing ? 0 : -1}
              style={
                !editing
                  ? { background: 'transparent', cursor: 'not-allowed' }
                  : {}
              }
            />
          </div>
        </div>
      </div>
    </div>
    {editing && (
      <div className='flex gap-3 pt-2 *:sm:w-fit'>
        <button
          className='w-full transform rounded-full bg-purple-700 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-purple-800 sm:px-7'
          type='submit'
        >
          Save Changes
        </button>
        <button
          type='button'
          className='w-full rounded-full bg-gray-200 py-2 font-medium text-gray-700 shadow transition-all duration-300 hover:-translate-y-1 hover:bg-gray-300 sm:px-7'
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    )}
  </form>
);

export default ProfileForm;
