import { memo } from 'react';
import { useQueryParams } from '@/hooks/useQueryParams';
import { isEmpty, replaceSubdomain } from '@/helpers';

export const ErrorPage = memo(() => {
  const { event_slug } = useQueryParams();

  const redirectToEventPage = () => {
    window.location.href = replaceSubdomain(window.location.origin, event_slug);
  };

  return (
    <section className="grid min-h-screen place-content-center bg-gray-100">
      <div className="mx-auto w-full max-w-[21rem] space-y-8 overflow-hidden rounded-2xl bg-white pb-10 text-center text-[15px] shadow-lg lg:w-full lg:max-w-[50rem]">
        <div className="bg-red-50">
          <div className="mx-auto lg:size-[15rem]">
            <img
              src="/assets/images/timer.svg"
              alt="Unavailable"
              className="size-full"
            />
          </div>
        </div>

        <div className="space-y-3 px-5 lg:px-16">
          <h2 className="text-xl font-semibold tracking-wide text-red-800 lg:text-[22px]">
            Currently Unavailable..!!
          </h2>

          <p className="text-gray-700">
            The page you’re trying to reach is currently unavailable or may have
            been disabled. Please return to the home page to continue browsing.
            If you believe this is an error, feel free to contact the event
            organizer using the Contact Us tab.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 px-5 sm:flex-row">
          {!!event_slug && (
            <button
              onClick={redirectToEventPage}
              className="w-[70%] rounded-lg border-[0.5px] border-solid border-gray-800 py-2.5 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-md active:translate-y-0 active:shadow-sm sm:w-auto sm:px-6"
            >
              Back to Event
            </button>
          )}

          <a
            href="/"
            className="w-[70%] rounded-lg border-[0.5px] border-solid border-gray-800 py-2.5 text-center font-medium transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-md active:translate-y-0 active:shadow-sm sm:w-auto sm:px-6"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
});

export default ErrorPage;
