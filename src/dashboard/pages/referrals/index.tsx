import { useMemo, useRef, useState } from 'react';
import { Gift, Copy, Share2, Link as LinkIcon, Mail, CheckCircle, Clock, Users } from 'lucide-react';

const referralsSeed = [
  {
    name: 'Aman Verma',
    email: 'aman@example.com',
    status: 'rewarded',
    date: '2025-01-02',
  },
  {
    name: 'Riya Shah',
    email: 'riya@example.com',
    status: 'joined',
    date: '2025-01-06',
  },
  {
    name: 'Vikram Singh',
    email: 'vikram@example.com',
    status: 'invited',
    date: '2025-01-08',
  },
];

const statusMeta = {
  invited: {
    label: 'Invited',
    icon: Clock,
    cls: 'border-gray-200 bg-gray-50 text-gray-600',
  },
  joined: {
    label: 'Joined',
    icon: Users,
    cls: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  rewarded: {
    label: 'Rewarded',
    icon: CheckCircle,
    cls: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
};

export default function EarnRefer() {
  const referralCode = 'SHOP-7XK42';
  const [inviteEmail, setInviteEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const emailInputRef = useRef(null);

  const stats = useMemo(() => {
    const total = referralsSeed.length;
    const joined = referralsSeed.filter(r => r.status !== 'invited').length;
    const rewarded = referralsSeed.filter(r => r.status === 'rewarded').length;
    return { total, joined, rewarded };
  }, []);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
    } catch {}
  };

  const shareLink = `${window.location.origin}/?ref=${encodeURIComponent(referralCode)}`;

  const inviteNow = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Join me on Shop',
          text: 'Use my referral and earn rewards on your first order!',
          url: shareLink,
        });
      } else {
        await navigator.clipboard.writeText(shareLink);
        console.log('Invite link copied to clipboard');
      }
    } catch (e) {
      console.warn('Share cancelled or failed');
    }
  };

  const handleSendEmailInvite = () => {
    const email = inviteEmail.trim();
    const isValid = /.+@.+\..+/.test(email);

    if (!isValid) {
      setEmailError('Enter a valid email');
      return;
    }
  };

  return (
    <section className='max-w-4xl'>
      {/* Header */}
      <div className='my-6 flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-bold text-gray-900'>Earn & Refer</h1>
          <p className='mt-1 text-sm text-gray-600'>
            Invite friends and earn rewards when they shop.
          </p>
        </div>
      </div>

      {/* Top cards */}
      <div className='mb-8 grid gap-4 grid-cols-2  sm:grid-cols-3'>
        <div className='rounded-2xl border col-span-2 sm:col-span-1 border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm'>
          <p className='text-xs font-semibold tracking-wide text-gray-500 uppercase'>
            Your code
          </p>
          <div className='mt-2 inline-flex items-center overflow-hidden rounded-full border border-gray-200 bg-white'>
            <span className='px-3 py-1 font-mono text-sm font-bold tracking-wider text-gray-800'>
              {referralCode}
            </span>
            <button
              onClick={copyCode}
              className='text-brand flex items-center gap-1 border-l border-gray-200 px-3 py-1 text-sm font-medium hover:bg-gray-50'
              title='Copy code'
              aria-label='Copy code'
            >
              <Copy size={14} /> Copy
            </button>
          </div>
        </div>

        <div className='rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm'>
          <p className='text-xs font-semibold tracking-wide text-gray-500 uppercase'>
            Total joined
          </p>
          <p className='mt-2 text-2xl font-semibold text-gray-900'>
            {stats.joined}
          </p>
          <p className='text-xs text-gray-500'>Out of {stats.total} invited</p>
        </div>

        <div className='rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm'>
          <p className='text-xs font-semibold tracking-wide text-gray-500 uppercase'>
            Rewards earned
          </p>
          <div className='mt-2 flex items-center gap-2 text-2xl font-semibold text-gray-900'>
            <Gift size={22} className='text-brand' /> {stats.rewarded}
          </div>
          <p className='text-xs text-gray-500'>Successful referrals</p>
        </div>
      </div>

      {/* Share area */}
      <div className='mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-sm'>
        <div className='border-b border-gray-100 bg-gray-50 px-6 py-4'>
          <h2 className='text-lg font-semibold text-gray-900'>
            Share your link
          </h2>
        </div>

        <div className='flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between'>
          <div className='min-w-0'>
            <p className='truncate font-mono text-sm text-gray-700'>
              {shareLink}
            </p>
            <p className='text-xs text-gray-500'>
              Friends get a discount; you get rewards after their first order.
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-2'>
            <button
              type='button'
              onClick={() => {
                setShowEmailForm(v => !v);
                setTimeout(() => emailInputRef.current?.focus(), 0);
              }}
              className='inline-flex items-center gap-2 rounded-full border border-[#EA4335] bg-white px-4 py-2 text-sm font-semibold text-[#EA4335] shadow-sm transition hover:bg-[#EA4335]/10'
              title='Invite by email'
              aria-expanded={showEmailForm}
            >
              <Mail size={16} /> Email
            </button>
            <button
              className='inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100'
              onClick={() => navigator.clipboard.writeText(shareLink)}
            >
              <LinkIcon size={16} /> Copy link
            </button>

            <button
              className='inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100'
              onClick={inviteNow}
            >
              <Share2 size={16} /> Invite now
            </button>
          </div>
        </div>
        {/* Direct email invite row (hidden until Email is clicked) */}
        {showEmailForm && (
          <div className='flex flex-col gap-2 border-t border-gray-100 px-6 pt-4 pb-6 sm:flex-row sm:items-center'>
            <div className='relative'>
              <input
                ref={emailInputRef}
                type='email'
                value={inviteEmail}
                onChange={e => setInviteEmail(e.target.value)}
                placeholder="Friend's email"
                className='focus:border-brand ring-brand w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition focus:ring-2 focus:outline-none sm:w-64'
              />
              {emailError && (
                <span className='absolute -bottom-5 left-2 text-xs text-rose-600'>
                  {emailError}
                </span>
              )}
            </div>
            <button
              type='button'
              className='inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100'
              onClick={handleSendEmailInvite}
            >
              <Mail size={16} /> Send Invite
            </button>
          </div>
        )}
      </div>

      {/* How it works */}
      <div className='mb-8 grid gap-4 lg:grid-cols-3'>
        {[
          {
            title: 'Share your code',
            desc: 'Send your link/code to friends and family.',
          },
          {
            title: 'They sign up',
            desc: 'They create an account and place first order.',
          },
          {
            title: 'You both earn',
            desc: 'Once order completes, you get a reward.',
          },
        ].map((s, idx) => (
          <div
            key={idx}
            className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm'
          >
            <div className='border-brand text-brand mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border'>
              {idx + 1}
            </div>
            <h3 className='font-semibold text-gray-900'>{s.title}</h3>
            <p className='mt-1 text-sm text-gray-600'>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Recent referrals */}
      <div className='overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-sm'>
        <div className='border-b border-gray-100 bg-gray-50 px-6 py-4'>
          <h2 className='text-lg font-semibold text-gray-900'>
            Recent Referrals
          </h2>
        </div>
        <div className='divide-y divide-gray-100'>
          {referralsSeed.map((r, i) => {
            const meta = statusMeta[r.status];
            const Icon = meta.icon;
            return (
              <div
                key={i}
                className='flex items-center justify-between px-6 py-4'
              >
                <div>
                  <p className='font-medium text-gray-900'>{r.name}</p>
                  <p className='text-sm text-gray-500'>{r.email}</p>
                </div>
                <div
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${meta.cls}`}
                >
                  <Icon size={14} /> {meta.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
