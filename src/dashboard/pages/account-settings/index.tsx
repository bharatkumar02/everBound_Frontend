import { useState, useRef } from 'react';
import {
  Edit3,
  Mail,
  CalendarDays,
  Phone,
  MapPin,
  Truck,
  User,
} from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';
import ProfileProgress from './ProfileProgress';
import ProfileForm from './ProfileForm';

function AccountDetail() {
  const [formData, setFormData] = useState({
    fullName: 'Sophia Carter',
    email: 'sophia.carter@email.com',
    phone: '(555) 123-4567',
    dob: '',
    addresses: [
      {
        id: 1,
        type: 'Current Address',
        icon: MapPin,
        address: '123 Main St, San Francisco, CA',
      },
      {
        id: 2,
        type: 'Shipping Address',
        icon: Truck,
        address: '456 Market St, San Francisco, CA',
      },
    ],
  });
  const [profilePic, setProfilePic] = useState(null);
  const firstInputRef = useRef(null);
  const formSectionRef = useRef(null);

  const [editing, setEditing] = useState(false);

  const requiredFields = [
    { key: 'fullName', icon: User },
    { key: 'email', icon: Mail },
    { key: 'phone', icon: Phone },
    { key: 'dob', icon: CalendarDays },
    { key: 'address1', icon: MapPin },
    { key: 'address2', icon: Truck },
  ];
  const filled = [
    !!formData.fullName,
    !!formData.email,
    !!formData.phone,
    !!formData.dob,
    !!formData.addresses[0]?.address,
    !!formData.addresses[1]?.address,
  ];
  const completeness = Math.round(
    (filled.filter(Boolean).length / filled.length) * 100,
  );

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleEditClick = () => {
    setEditing(true);
    setTimeout(() => {
      if (formSectionRef.current) {
        formSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, 50);
  };

  const handleSave = e => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <div className='flex flex-col'>
      {/* Header */}
      <div className='my-6 flex items-center justify-between gap-4'>
        <div>
          <h1 className='text-xl font-bold'>My Profile</h1>
        </div>
        <button
          className='flex h-fit items-center gap-2 rounded-full border-[0.5px] border-[#8B5CF6] p-1 px-2 text-[#8B5CF6] cursor-pointer'
          onClick={handleEditClick}
          disabled={editing}
        >
          <Edit3 size={18} strokeWidth={1.8} />
          <span>Edit</span>
        </button>
      </div>

      <div
        ref={formSectionRef}
        className='flex-grow space-y-6 rounded-md border-[0.5px] bg-white py-8 shadow-md shadow-gray-200'
      >
        {/* Profile Photo */}
        <section className='flex flex-col items-center space-y-4 px-4'>
          <ProfilePhoto
            profilePic={profilePic}
            setProfilePic={setProfilePic}
            fullName={formData.fullName}
          />
          <div className='text-center'>
            <p className='text-text-light text-2xl font-bold'>
              {formData.fullName}
            </p>
            <p className='text-text-secondary-light'>@sophia.carter</p>
          </div>
        </section>

        {/* Profile Completeness */}
        <ProfileProgress
          requiredFields={requiredFields}
          filled={filled}
          completeness={completeness}
        />

        {/* Profile Form */}
        <ProfileForm
          formData={formData}
          setFormData={setFormData}
          editing={editing}
          handleSave={handleSave}
          handleCancel={handleCancel}
          handleInputChange={handleInputChange}
          firstInputRef={firstInputRef}
        />
      </div>
    </div>
  );
}

export default AccountDetail;
