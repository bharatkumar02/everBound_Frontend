import { useState } from 'react';
import { useForm } from '@/hooks/useForm';

import { updateRegistrantPassword } from '@/features/registrant-dashboard/data';

import Breadcrumbs from '@/features/registrant-dashboard/layout/Breadcrumbs';

export default function ChangePassword() {
  const [processing, setProcessing] = useState(false);
  const { values, errors, handleInputChange } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();

    setProcessing(true);
    await updateRegistrantPassword({ passwordChangedAt: Date.now() });
    setProcessing(false);
  };

  return (
    <>
      <Breadcrumbs
        showBack
        items={[
          { label: 'Dashboard', to: '/events' },
          { label: 'Change Password', current: true },
        ]}
      />

      <section className="mt-4 max-w-xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6 lg:max-w-2xl lg:p-7">
        <h1 className="text-[18px] font-semibold text-gray-900">
          Change Password
        </h1>
        <p className="mt-1 text-[13px] text-gray-600">
          Update your password regularly to keep your account secure.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-5 grid grid-cols-1 gap-4"
        >
          <label className="label">
            <span className="label-text">Current Password</span>
            <input
              type="password"
              name="currentPassword"
              value={values.currentPassword || ''}
              onChange={handleInputChange}
              className="input"
            />
            {errors.currentPassword && (
              <p className="error">{errors.currentPassword}</p>
            )}
          </label>

          <label className="label">
            <span className="label-text">New Password</span>
            <input
              type="password"
              name="password"
              value={values.password || ''}
              onChange={handleInputChange}
              className="input"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </label>

          <label className="label">
            <span className="label-text">Confirm New Password</span>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword || ''}
              onChange={handleInputChange}
              className="input"
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </label>

          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              disabled={processing}
              className={`btn-primary ${processing ? 'btn-disabled' : ''}`}
            >
              {processing ? 'Updating...' : 'Update Password'}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
