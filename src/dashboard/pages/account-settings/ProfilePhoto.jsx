import React from 'react';
import { Camera } from 'lucide-react';

const ProfilePhoto = ({ profilePic, setProfilePic, fullName }) => {
  const fileInputRef = React.useRef(null);

  const getInitials = name => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || '';
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleProfilePicChange = e => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setProfilePic(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className='group relative cursor-pointer'
      style={{ width: 128, height: 128 }}
      onClick={() => fileInputRef.current && fileInputRef.current.click()}
      title='Click to upload photo'
    >
      {profilePic ? (
        <img
          alt='User profile picture'
          className='h-32 w-32 rounded-full border-4 border-purple-700 object-cover'
          src={profilePic}
        />
      ) : (
        <div className='flex h-32 w-32 items-center justify-center rounded-full border-4 border-purple-700 bg-gradient-to-tr from-purple-300 via-purple-100 to-purple-50 text-4xl font-bold text-gray-700 select-none'>
          {getInitials(fullName)}
        </div>
      )}
      <button
        type='button'
        className='hover:bg-purple-700-dark absolute right-1 bottom-1 rounded-full bg-purple-700 p-2 text-white group-hover:scale-110'
        onClick={e => {
          e.stopPropagation();
          fileInputRef.current && fileInputRef.current.click();
        }}
        tabIndex={0}
      >
        <Camera size={18} />
      </button>
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        onChange={handleProfilePicChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ProfilePhoto;
