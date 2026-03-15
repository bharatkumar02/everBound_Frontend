import { useMemo, useState } from 'react';
import {
  SquarePen,
  Trash2,
  Plus,
  MapPin,
  Home,
  Building,
  Star,
  Check,
  X,
  Phone,
  Mail,
  User,
  Edit3,
  Save,
  AlertCircle,
} from 'lucide-react';

export default function Addresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Bharat Kumar',
      type: 'home',
      isDefault: true,
      address: 'Khaliyavas Mohalla, Ward No. 7, Dharuhera, Near Badi Haveli',
      city: 'Rewari',
      state: 'Haryana',
      pincode: '123106',
      phone: '8397826133',
      email: 'bharat@example.com',
      landmark: 'Near Badi Haveli',
    },
    {
      id: 2,
      name: 'Bharat Kumar',
      type: 'work',
      isDefault: false,
      address: 'Tech Park, Sector 5, Gurgaon',
      city: 'Gurgaon',
      state: 'Haryana',
      pincode: '122001',
      phone: '8397826133',
      email: 'bharat.work@example.com',
      landmark: 'Near Metro Station',
    },
    {
      id: 3,
      name: 'Bharat Kumar',
      type: 'other',
      isDefault: false,
      address: '123 Main Street, Downtown',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110001',
      phone: '8397826133',
      email: 'bharat@example.com',
      landmark: 'Near Central Park',
    },
  ]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [editingAddress, setEditingAddress] = useState({
    name: '',
    type: 'home',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    email: '',
    landmark: '',
  });
  const [newAddress, setNewAddress] = useState({
    name: '',
    type: 'home',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    email: '',
    landmark: '',
  });

  const addressTypes = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'work', label: 'Work', icon: Building },
    { id: 'other', label: 'Other', icon: MapPin },
  ];

  const typeStyles = {
    home: {
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700',
      chip: 'border-blue-200 bg-blue-50 text-blue-600',
      accent: 'from-blue-500/20 via-blue-500/10 to-transparent',
      ring: 'ring-blue-200',
    },
    work: {
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      badge: 'bg-emerald-100 text-emerald-700',
      chip: 'border-emerald-200 bg-emerald-50 text-emerald-600',
      accent: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
      ring: 'ring-emerald-200',
    },
    other: {
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      badge: 'bg-purple-100 text-purple-700',
      chip: 'border-purple-200 bg-purple-50 text-purple-600',
      accent: 'from-purple-500/20 via-purple-500/10 to-transparent',
      ring: 'ring-purple-200',
    },
  };

  const fallbackStyle = {
    iconBg: 'bg-slate-50',
    iconColor: 'text-slate-600',
    badge: 'bg-slate-100 text-slate-700',
    chip: 'border-slate-200 bg-slate-50 text-slate-600',
    accent: 'from-slate-500/20 via-slate-500/10 to-transparent',
    ring: 'ring-slate-200',
  };

  const requiredKeys = ['name', 'address', 'city', 'pincode', 'phone'];
  const addressHasRequiredFields = addr =>
    requiredKeys.every(key => addr[key]?.toString().trim());

  const filteredAddresses = useMemo(() => {
    if (activeFilter === 'all') {
      return addresses;
    }
    return addresses.filter(addr => addr.type === activeFilter);
  }, [addresses, activeFilter]);

  const filterOptions = [
    {
      id: 'all',
      label: 'All',
      icon: SquarePen,
      count: addresses.length,
    },
    ...addressTypes.map(type => ({
      id: type.id,
      label: type.label,
      icon: type.icon,
      count: addresses.filter(addr => addr.type === type.id).length,
    })),
  ];

  const handleAddAddress = () => {
    if (addressHasRequiredFields(newAddress)) {
      const address = {
        id: Date.now(),
        ...newAddress,
        isDefault: addresses.length === 0,
      };
      setAddresses(prev => [...prev, address]);
      setNewAddress({
        name: '',
        type: 'home',
        address: '',
        city: '',
        state: '',
        pincode: '',
        phone: '',
        email: '',
        landmark: '',
      });
      setActiveFilter('all');
      setIsAddingNew(false);
    }
  };

  const handleEditAddress = id => {
    const addressToEdit = addresses.find(addr => addr.id === id);
    setIsAddingNew(false);

    if (addressToEdit) {
      setEditingAddress({ ...addressToEdit });
      setEditingId(id);
    }
  };

  const handleSaveEdit = () => {
    if (addressHasRequiredFields(editingAddress)) {
      setAddresses(prev =>
        prev.map(addr =>
          addr.id === editingId ? { ...editingAddress } : addr,
        ),
      );
      setEditingId(null);
      setEditingAddress({
        name: '',
        type: 'home',
        address: '',
        city: '',
        state: '',
        pincode: '',
        phone: '',
        email: '',
        landmark: '',
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingAddress({
      name: '',
      type: 'home',
      address: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
      email: '',
      landmark: '',
    });
  };

  const handleDeleteAddress = id => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      const updatedAddresses = addresses.filter(addr => addr.id !== id);
      if (
        updatedAddresses.length > 0 &&
        addresses.find(addr => addr.id === id)?.isDefault
      ) {
        updatedAddresses[0].isDefault = true;
      }
      setAddresses(updatedAddresses);
    }
  };

  const handleSetDefault = id => {
    setAddresses(prev =>
      prev.map(addr => ({
        ...addr,
        isDefault: addr.id === id,
      })),
    );
  };

  const AddressInputs = ({ state, setState }) => (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      <div>
        <label className='text-sm font-semibold text-gray-700'>
          Full Name <span className='text-rose-500'>*</span>
        </label>
        <div className='relative mt-1'>
          <User
            size={16}
            className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
          />
          <input
            type='text'
            value={state.name}
            onChange={e =>
              setState(prev => ({ ...prev, name: e.target.value }))
            }
            className='w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-3 pl-9 text-sm font-medium text-gray-700 transition-all duration-200 focus:border-[0.5px] focus:border-purple-500 focus:bg-white focus:outline-none'
            placeholder='Enter full name'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-semibold text-gray-700'>
          Address Type
        </label>
        <select
          value={state.type}
          onChange={e => setState(prev => ({ ...prev, type: e.target.value }))}
          className='mt-1 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 focus:border-[0.5px] focus:border-purple-500 focus:bg-white focus:outline-none'
        >
          {addressTypes.map(type => (
            <option key={type.id} value={type.id}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className='space-y-2 md:col-span-2'>
        <label className='text-sm font-semibold text-gray-700'>
          Address <span className='text-rose-500'>*</span>
        </label>
        <div className='relative mt-1'>
          <MapPin
            size={16}
            className='pointer-events-none absolute top-3 left-3 text-gray-400'
          />
          <textarea
            value={state.address}
            onChange={e =>
              setState(prev => ({ ...prev, address: e.target.value }))
            }
            rows={3}
            maxLength={200}
            className='w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-3 pr-3 pl-9 text-sm font-medium text-gray-700 transition-all duration-200 focus:border-[0.5px] focus:border-purple-500 focus:bg-white focus:outline-none'
            placeholder='Street, area, apartment, etc.'
          />
          <div className='mt-1 text-right text-[11px] text-gray-400'>
            {(state.address || '').length}/200
          </div>
        </div>
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-semibold text-gray-700'>
          City <span className='text-rose-500'>*</span>
        </label>
        <div className='relative mt-1'>
          <Building
            size={16}
            className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
          />
          <input
            type='text'
            value={state.city}
            onChange={e =>
              setState(prev => ({ ...prev, city: e.target.value }))
            }
            className='w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-3 pl-9 text-sm font-medium text-gray-700 transition-all duration-200 focus:border-[0.5px] focus:border-purple-500 focus:bg-white focus:outline-none'
            placeholder='Enter city'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-semibold text-gray-700'>
          State <span className='text-rose-500'>*</span>
        </label>
        <div className='relative mt-1'>
          <MapPin
            size={16}
            className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
          />
          <input
            type='text'
            value={state.state}
            onChange={e =>
              setState(prev => ({ ...prev, state: e.target.value }))
            }
            className='w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-3 pl-9 text-sm font-medium text-gray-700 transition-all duration-200 focus:border-[0.5px] focus:border-purple-500 focus:bg-white focus:outline-none'
            placeholder='Enter state'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-semibold text-gray-700'>
          Pincode <span className='text-rose-500'>*</span>
        </label>
        <div className='relative mt-1'>
          <MapPin
            size={16}
            className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
          />
          <input
            type='text'
            inputMode='numeric'
            maxLength={10}
            value={state.pincode}
            onChange={e =>
              setState(prev => ({
                ...prev,
                pincode: e.target.value.replace(/[^0-9]/g, ''),
              }))
            }
            className='w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-3 pl-9 text-sm font-medium text-gray-700 transition-all duration-200 focus:border-[0.5px] focus:border-purple-500 focus:bg-white focus:outline-none'
            placeholder='Enter pincode'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-semibold text-gray-700'>
          Phone Number <span className='text-rose-500'>*</span>
        </label>
        <div className='relative mt-1'>
          <Phone
            size={16}
            className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
          />
          <input
            type='tel'
            inputMode='tel'
            maxLength={15}
            value={state.phone}
            onChange={e =>
              setState(prev => ({ ...prev, phone: e.target.value }))
            }
            className='w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-3 pl-9 text-sm font-medium text-gray-700 transition-all duration-200 focus:border-[0.5px] focus:border-purple-500 focus:bg-white focus:outline-none'
            placeholder='Enter phone number'
          />
        </div>
        <p className='text-[11px] text-gray-400'>
          Include country code if applicable.
        </p>
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-semibold text-gray-700'>Email</label>
        <div className='relative mt-1'>
          <Mail
            size={16}
            className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
          />
          <input
            type='email'
            value={state.email}
            onChange={e =>
              setState(prev => ({ ...prev, email: e.target.value }))
            }
            className='w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-3 pl-9 text-sm font-medium text-gray-700 transition-all duration-200 focus:border-[0.5px] focus:border-purple-500 focus:bg-white focus:outline-none'
            placeholder='Enter email (optional)'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-semibold text-gray-700'>Landmark</label>
        <div className='relative mt-1'>
          <MapPin
            size={16}
            className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
          />
          <input
            type='text'
            value={state.landmark}
            onChange={e =>
              setState(prev => ({ ...prev, landmark: e.target.value }))
            }
            className='w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-3 pl-9 text-sm font-medium text-gray-700 transition-all duration-200 focus:border-[0.5px] focus:border-purple-500 focus:bg-white focus:outline-none'
            placeholder='Enter landmark (optional)'
          />
        </div>
      </div>
    </div>
  );

  const AddressCard = ({ address }) => {
    const addressType = addressTypes.find(type => type.id === address.type);
    const TypeIcon = addressType?.icon || MapPin;
    const styles = typeStyles[address.type] || fallbackStyle;
    const isEditing = editingId === address.id;
    const isDefault = address.isDefault;

    if (isEditing) {
      const editDisabled = !addressHasRequiredFields(editingAddress);
      // Use the same structure, but apply the exact same CSS as Add New Address form
      return (
        <div className='mb-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm col-span-full lg:col-span-2'>
          <div className='flex items-start justify-between gap-4'>
            <div className='flex items-start gap-3'>
              <div className='flex items-center justify-center rounded-xl bg-blue-100 p-2 text-blue-600'>
                <Edit3 size={18} />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  Edit Address
                </h3>
                <p className='text-[13px] text-gray-500'>
                  Update the details and save your changes.
                </p>
              </div>
            </div>
            <button
              onClick={handleCancelEdit}
              className='group flex items-center justify-center rounded-full border border-gray-200 p-2 text-gray-400 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-500'
              title='Close form'
            >
              <X
                size={18}
                className='transition-transform group-hover:scale-110'
              />
            </button>
          </div>

          <div className='mt-6'>
            <AddressInputs state={editingAddress} setState={setEditingAddress} />
          </div>

          <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-xs text-gray-500'>
              Fields marked with * are required.
            </p>
            <div className='flex gap-3'>
              <button
                onClick={handleCancelEdit}
                className='rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition-all duration-200 hover:bg-gray-50'
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                disabled={editDisabled}
                className='group flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50 w-full justify-center'
              >
                <Save
                  size={16}
                  className='transition-transform group-hover:scale-110'
                />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`group relative h-full overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
          isDefault
            ? `border-blue-200 ring-2 ${styles.ring} shadow-md`
            : 'border-gray-200 shadow-sm hover:-translate-y-1 hover:border-blue-200 hover:shadow-md'
        }`}
      >
        <div className='flex h-full flex-col p-6'>
          <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
            <div className='flex items-start gap-4'>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.iconBg}`}
              >
                <TypeIcon size={22} className={styles.iconColor} />
              </div>

              <div>
                <div className='flex min-w-0 items-center gap-2'>
                  <h3 className='truncate text-lg font-semibold text-gray-900'>
                    {address.name}
                  </h3>

                  {isDefault && (
                    <span
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
                    >
                      <Star size={12} className='fill-current' />
                      Default
                    </span>
                  )}
                </div>
                <p className='text-sm text-gray-500'>
                  Primary contact - {addressType?.label || 'Address'}
                </p>
              </div>
            </div>

            {/* Header actions removed per request; actions available below */}
          </div>

          <div className='mt-5 space-y-4 rounded-2xl bg-gray-50/80 p-4'>
            <div className='flex items-start gap-3'>
              <MapPin size={16} className='mt-1 text-gray-400' />
              <div className='text-sm text-gray-700'>
                <p>{address.address}</p>
                <p>
                  {address.city}, {address.state} - {address.pincode}
                </p>
                {address.landmark && (
                  <p className='text-gray-500'>Landmark: {address.landmark}</p>
                )}
              </div>
            </div>

            <div className='flex flex-wrap items-center gap-4'>
              <div className='flex items-center gap-2 text-sm text-gray-700'>
                <Phone size={16} className='text-gray-400' />
                <span>{address.phone}</span>
              </div>

              {address.email && (
                <div className='flex items-center gap-2 text-sm text-gray-700'>
                  <Mail size={16} className='text-gray-400' />
                  <span>{address.email}</span>
                </div>
              )}
            </div>
          </div>

          <div className='mt-auto flex items-center justify-start pt-6'>
            <div className='inline-flex items-center gap-1 rounded-xl bg-gray-100 p-1 shadow-inner'>
              <button
                type='button'
                title='Use this address'
                aria-label='Use this address'
                className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-white'
              >
                <Check size={14} />
                Use
              </button>
              {!isDefault && (
                <button
                  type='button'
                  onClick={() => handleSetDefault(address.id)}
                  title='Set as default'
                  aria-label='Set as default'
                  className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-amber-700 transition-colors hover:bg-white'
                >
                  <Star size={14} />
                  Default
                </button>
              )}
              <button
                type='button'
                onClick={() => handleEditAddress(address.id)}
                title='Edit address'
                aria-label='Edit address'
                className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-white'
              >
                <Edit3 size={14} />
                Edit
              </button>
              <button
                type='button'
                onClick={() => handleDeleteAddress(address.id)}
                title='Remove address'
                aria-label='Remove address'
                className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-white'
              >
                <Trash2 size={14} />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AddAddressForm = () => {
    const addDisabled = !addressHasRequiredFields(newAddress);
    return (
      <div className='mb-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm'>
        <div className='flex items-start justify-between gap-4'>
          <div className='flex items-start gap-3'>
            <div className='flex items-center justify-center rounded-xl bg-blue-100 p-2 text-blue-600'>
              <SquarePen size={18} />
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Add New Address
              </h3>
              <p className='text-[13px] text-gray-500'>
                Only visible to you and used to deliver your orders.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAddingNew(false)}
            className='group flex items-center justify-center rounded-full border border-gray-200 p-2 text-gray-400 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-500'
            title='Close form'
          >
            <X
              size={18}
              className='transition-transform group-hover:scale-110'
            />
          </button>
        </div>

        <div className='mt-6'>
          <AddressInputs state={newAddress} setState={setNewAddress} />
        </div>

        <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-xs text-gray-500'>
            Fields marked with * are required.
          </p>
          <div className='flex gap-3'>
            <button
              onClick={() => setIsAddingNew(false)}
              className='rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition-all duration-200 hover:bg-gray-50'
            >
              Cancel
            </button>
            <button
              onClick={handleAddAddress}
              disabled={addDisabled}
              className='group flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50 w-full justify-center'
            >
              <Save
                size={16}
                className='transition-transform group-hover:scale-110'
              />
              Save Address
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className='max-w-5xl'>
      {/* Header bar */}
      <div className='my-6'>
        <h1 className='text-xl font-bold text-gray-900'>Saved Addresses</h1>
        <p className='mt-1 text-sm text-gray-600'>
          Manage where your orders arrive.
        </p>
      </div>

      <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div className='overflow-hidden'>
          <div className='scroll-hide flex items-center gap-2 overflow-x-auto p-1'>
            {filterOptions.map(option => {
              const isActive = activeFilter === option.id;
              const OptionIcon = option.icon;
              const typeStyle = typeStyles[option.id] || fallbackStyle;
              const activeClass = isActive
                ? option.id === 'all'
                  ? 'border-transparent bg-purple-200 shadow-sm'
                  : `border-transparent bg-white text-gray-900 shadow-sm ${typeStyle.ring}`
                : 'border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-600';

              return (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none ${activeClass}`}
                >
                  <OptionIcon
                    size={14}
                    className={
                      isActive && option.id !== 'all'
                        ? typeStyle.iconColor
                        : 'text-gray-400'
                    }
                  />
                  <span>{option.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      isActive
                        ? option.id === 'all'
                          ? 'bg-white/60 text-gray-900'
                          : `${typeStyle.badge} bg-opacity-30 text-gray-900`
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {option.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {!isAddingNew && (
          <button
            onClick={() => {
              setEditingId(null);
              setIsAddingNew(true);
            }}
            className='group flex w-fit items-center gap-2 rounded-full border border-dashed border-blue-400 bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50'
          >
            <Plus
              size={16}
              className='transition-transform group-hover:scale-110'
            />
            Add new address
          </button>
        )}
      </div>

      {isAddingNew && <AddAddressForm />}

      {filteredAddresses.length > 0 && (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {filteredAddresses.map(address => (
            <AddressCard key={address.id} address={address} />
          ))}
        </div>
      )}

      {addresses.length > 0 &&
        filteredAddresses.length === 0 &&
        !isAddingNew && (
          <div className='rounded-3xl border border-dashed border-blue-200 bg-blue-50/50 p-12 text-center'>
            <AlertCircle size={36} className='mx-auto text-blue-500' />
            <h3 className='mt-4 text-lg font-semibold text-gray-900'>
              No addresses in this view
            </h3>
            <p className='mt-2 text-sm text-gray-600'>
              Try switching the filter or add a new{' '}
              {activeFilter === 'all' ? 'address' : `${activeFilter} address`}{' '}
              to get started.
            </p>
          </div>
        )}

      {addresses.length === 0 && !isAddingNew && (
        <div className='rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm'>
          <MapPin size={48} className='mx-auto text-gray-300' />
          <h3 className='mt-4 text-lg font-semibold text-gray-900'>
            No addresses saved
          </h3>
          <p className='mt-2 text-sm text-gray-600'>
            Add your first address to speed up future checkouts.
          </p>
          <button
            onClick={() => setIsAddingNew(true)}
            className='group mt-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm transition-all duration-200 hover:bg-blue-200'
          >
            <Plus
              size={16}
              className='transition-transform group-hover:scale-110'
            />
            Add address
          </button>
        </div>
      )}
    </section>
  );
}
