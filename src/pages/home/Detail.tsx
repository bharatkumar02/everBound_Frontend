export default function Detail() {
  return (
    <>
      <section className='grid grid-cols-2 lg:px-10 py-5 lg:grid-cols-3 lg:gap-10 lg:pt-10 tracking-wide '>
        <div>
          <div className='lg:rounded-xl lg:overflow-hidden'>
            <img
              src='./office2.jpg'
              alt='Image_1'
              loading='lazy'
              className='h-full w-full'
            />
          </div>
          <p className='p-2.5 text-[14px] md:p-5 md:text-lg '>
            From acrylic prints to personalized gifts, we turn your ideas into
            beautiful, high-quality creations.
          </p>
          <p className='p-2.5 text-[14px] md:p-5 md:text-lg !pt-0'>
            Each product reflects creativity, care, and craftsmanship made to
            inspire.
          </p>
        </div>
        <div className='h-full overflow-hidden lg:rounded-b-xl'>
          <h2 className='px-3 pb-3.5 text-2xl leading-8 font-semibold tracking-wider md:p-5 lg:pb-5 lg:text-3xl lg:leading-12 xl:text-4xl lg:text-center'>
            Explore the Art of Curated Celebrations
          </h2>
          <div  className='lg:rounded-xl lg:overflow-hidden h-full'>
            <img
              src='./couples.jpg'
              alt='Image_2'
              loading='lazy'
              className='h-full object-cover'
            />
          </div>
        </div>
        <div className='col-start-1 col-end-3 flex *:w-1/2 lg:col-start-3 lg:col-end-4 lg:flex-col *:lg:w-full lg:h-full'>
          <div  className='lg:rounded-xl lg:overflow-hidden lg:h-full'>
            <img
              src='./mugs.jpg'
              alt='Image_1'
              loading='lazy'
              className='h-full object-cover'
            />
          </div>
          <p className='p-2.5 text-[14px] md:p-5 md:text-lg'>
            We blend innovation, design, and craftsmanship to create products
            that reflect your unique style — from corporate essentials to
            thoughtful personal gifts.
          </p>
        </div>
      </section>
    </>
  );
}
