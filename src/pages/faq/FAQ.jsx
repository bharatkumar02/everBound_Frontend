import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

function FAQ() {
  // 🧭 Categories
  const categories = ['Shipping', 'Payments', 'Returns', 'Account', 'General'];

  // ❓ Questions Data
  const faqData = {
    Shipping: [
      {
        question: 'How long does shipping take?',
        answer:
          'Shipping usually takes 3–5 business days depending on your location.',
      },
      {
        question: 'Do you offer international shipping?',
        answer:
          'Yes, we ship to most countries. Shipping time may vary depending on the destination.',
      },
    ],
    Payments: [
      {
        question: 'What payment methods are accepted?',
        answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
      },
      {
        question: 'Is my payment information secure?',
        answer:
          'Absolutely! All transactions are encrypted and processed securely.',
      },
    ],
    Returns: [
      {
        question: 'How do I return a product?',
        answer:
          "Simply go to your order history, select the item, and click 'Return'. We'll guide you through the process.",
      },
    ],
    Account: [
      {
        question: 'How can I reset my password?',
        answer:
          "Click on 'Forgot Password' at login. Follow the instructions to reset it.",
      },
    ],
    General: [
      {
        question: 'How can I contact support?',
        answer:
          'You can contact us through our support page or email us at support@shop.com',
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleToggle = index => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <>
      <section className='mx-auto w-full max-w-[1500px] text-[15px]'>
        <div className='lg:flex lg:items-center lg:gap-10 lg:px-10 lg:py-10'>
          <div className='space-y-4 px-3 py-5 text-center lg:w-1/2 lg:space-y-7 lg:text-start'>
            <h1 className='text-2xl font-medium'>
              Have questions? We’re here to help.
            </h1>
            <p className='lg:text-balance'>
              Got questions? You’re in the right place! We’ve rounded up the
              ones we hear the most so you can get the info you need—fast. Still
              not sure about something? Just shoot us a message—we’re happy to
              help!
            </p>
            <div>
              <a href='#' className='flex items-center gap-2 lg:max-w-[70%]'>
                <p className='w-full rounded-lg border p-2.5 text-start tracking-wider shadow'>
                  I've got a question??
                </p>
                <span className='rounded-lg border p-2.5 shadow'>
                  <img
                    src='/google.svg'
                    alt='icon'
                    className='max-w-[1.5rem]'
                  />
                </span>
              </a>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <ul className='mx-2 grid grid-cols-2 gap-2 text-center *:flex *:flex-col *:items-center *:justify-center *:gap-1.5 *:rounded-lg *:border *:p-1.5 *:shadow lg:grid-cols-2 lg:gap-7'>
              <li>
                <img src='/google.svg' alt='Icons' className='max-w-[2.5rem]' />
                <h3 className='font-medium'>What is PrintShoppy?</h3>
                <p className='text-[14px]'>
                  Here for the first time? Learn how printShoppy help you grow.
                </p>
              </li>
              <li>
                <img src='/google.svg' alt='Icons' className='max-w-[2.5rem]' />
                <h3 className='font-medium'>What is PrintShoppy?</h3>
                <p className='text-[14px]'>
                  Here for the first time? Learn how printShoppy help you grow.
                </p>
              </li>
              <li>
                <img src='/google.svg' alt='Icons' className='max-w-[2.5rem]' />
                <h3 className='font-medium'>What is PrintShoppy?</h3>
                <p className='text-[14px]'>
                  Here for the first time? Learn how printShoppy help you grow.
                </p>
              </li>
              <li>
                <img src='/google.svg' alt='Icons' className='max-w-[2.5rem]' />
                <h3 className='font-medium'>What is PrintShoppy?</h3>
                <p className='text-[14px]'>
                  Here for the first time? Learn how printShoppy help you grow.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Questions Section */}
        <div className='grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3'>
          {/* 🧭 Categories Section */}
          <div className='rounded-2xl bg-white p-6 shadow'>
            <h2 className='mb-4 text-xl font-semibold text-gray-700'>
              Categories
            </h2>
            <ul className='space-y-3'>
              {categories.map(cat => (
                <li
                  key={cat}
                  className={`cursor-pointer rounded-lg px-4 py-2 transition-all ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenQuestionIndex(null);
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* ❓ Questions Section */}
          <div className='rounded-2xl bg-white p-6 shadow md:col-span-2'>
            <h2 className='mb-4 text-xl font-semibold text-gray-700'>
              {activeCategory} Questions
            </h2>
            <div className='divide-y divide-gray-200'>
              {faqData[activeCategory].map((item, index) => (
                <div key={index} className='py-4'>
                  <div
                    className='flex cursor-pointer items-center justify-between'
                    onClick={() => handleToggle(index)}
                  >
                    <p className='font-medium text-gray-800'>{item.question}</p>
                    {openQuestionIndex === index ? (
                      <Minus className='h-5 w-5 text-blue-600' />
                    ) : (
                      <Plus className='h-5 w-5 text-blue-600' />
                    )}
                  </div>
                  {openQuestionIndex === index && (
                    <p className='mt-3 text-gray-600'>{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
