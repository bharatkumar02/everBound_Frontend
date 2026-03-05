import { LifeBuoy, MessageSquare, Mail } from 'lucide-react';

const detail = [
  {
    title: 'Call Support',
    paragraph: 'Need help? Call our support team anytime!',
    icon: LifeBuoy,
    name: 'Call Us',
  },
  {
    title: 'WhatsApp Chat',
    paragraph: 'Chat with us on WhatsApp for instant support!',
    icon: MessageSquare,
    name: 'Chat Now',
  },
  {
    title: 'E-Mail Support',
    paragraph: "Email us your queries and we'll get back to you quickly!",
    icon: Mail,
    name: 'E-Mail Now',
  },
];

function contact() {
  return (
    <>
      <main className='mx-auto max-w-[1500px] pt-1'>
        <section className='space-y-6 py-5 lg:flex lg:items-center'>
          <div className='my-7 flex flex-col gap-7 md:my-10 lg:mx-14'>
            <div className='w-full text-center lg:text-start'>
              <h1 className='text-3xl md:font-semibold lg:text-4xl'>
                Contact Us
              </h1>
              <p className='text-sm text-gray-600 md:text-base lg:text-lg'>
                We’re just a message away!
              </p>
            </div>
            <div className='px-4 text-sm lg:px-0 lg:text-base'>
              <p className='text-center text-balance lg:pr-5 lg:text-start'>
                Need assistance? Our friendly support staff is available daily
                from 9 AM to 9 PM to ensure you have the best shopping
                experience.
              </p>
            </div>
            <div className='flex flex-col items-center gap-2 lg:items-start'>
              <a href='#'>kumarbharat9416@gmail.com</a>
              <a href='#'>+91 8397826133</a>
            </div>
            <ul className='flex flex-col justify-center gap-7 px-4 *:rounded-lg *:shadow-md md:flex-row md:justify-between lg:w-[90%] lg:justify-start lg:px-0'>
              {detail.map(item => (
                <li
                  key={item.name}
                  className='border-[0.5px] p-3 text-gray-700 md:w-1/3 lg:w-full lg:border-none lg:px-0 lg:shadow-none'
                >
                  <a className='flex flex-col items-center gap-2 lg:items-start'>
                    <h3 className='font-medium tracking-wider underline underline-offset-2'>
                      {item.title}
                    </h3>
                    <p className='text-center text-sm lg:text-start'>
                      {item.paragraph}
                    </p>
                    <button className='flex items-center gap-2 rounded-lg border p-2 text-sm'>
                      <item.icon size={17} />
                      <span className='h-5 w-[0.5px] bg-black'></span>
                      {item.name}
                    </button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='px-4 lg:max-w-[35rem] lg:pr-10'>
            <form className='flex w-full flex-col gap-3 rounded-lg border-[0.5px] px-2.5 py-3 shadow-md'>
              <h3 className='text-lg font-medium'>Send Us a Message!!</h3>
              <div className='flex flex-col gap-3 md:flex-row'>
                <div className='rounded-lg border-[0.5px] p-2 shadow-sm hover:shadow md:w-1/2'>
                  <input
                    type='text'
                    placeholder='First Name'
                    className='w-full outline-none'
                  />
                </div>
                <div className='rounded-lg border-[0.5px] p-2 shadow-sm hover:shadow md:w-1/2'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    className='w-full outline-none'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <div className='rounded-lg border-[0.5px] p-2 shadow-sm hover:shadow'>
                  <input
                    type='email'
                    placeholder='Enter Your Email'
                    className='w-full outline-none'
                  />
                </div>
                <div className='flex items-center gap-1.5'>
                  <span className='rounded-lg border-[0.5px] p-2 text-gray-400 shadow-sm'>
                    +91
                  </span>
                  <div className='w-full rounded-lg border-[0.5px] p-2 shadow-sm hover:shadow'>
                    <input
                      type='tel'
                      placeholder='Enter Your Phone Number'
                      className='w-full outline-none'
                    />
                  </div>
                </div>
              </div>
              <textarea
                placeholder='Enter Your Query Here...'
                rows={5}
                className='rounded-lg border-[0.5px] p-2 shadow-sm outline-none hover:shadow'
              ></textarea>
              <div className='items- flex gap-1.5 text-[15px] leading-5 text-gray-500'>
                <input type='checkbox' id='check' />
                <label htmlFor='check'>
                  I declare that the above details are true.
                </label>
              </div>
              <div className='flex justify-end'>
                <button className='rounded-lg bg-purple-500 px-10 py-2 font-medium tracking-wider text-white uppercase'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default contact;
