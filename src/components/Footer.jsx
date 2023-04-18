// import { Footer } from "flowbiteReact"

export const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto w-full  p-3 py-6 lg:py-8'>
        <hr className='my-6 border-gray-200 sm:mx-auto  lg:my-2' />
        <br />
        <div className='sm:flex sm:items-end sm:justify-between'>
        <div className='mb-6 md:mb-0'>
          <a href='/' className='flex items-end'>
            <span className='self-center text-4xl font-semibold whitespace-nowrap '>
              <span className='text-gray-700'>KV</span>
              <span className='text-gray-400'>PLAST</span>
              <span className="text-xs">®</span>
            </span>
          </a>
        </div>
          <span className='text-sm text-gray-500 sm:text-center '>
            © 2023
            <a href='#' className='hover:underline'>
              KVPLAST™
            </a>
            . All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-3 sm:justify-center sm:mt-0'>
            <a
              href='https://www.facebook.com/kvplastmexico'
              target='_blank'
              className='text-gray-500 hover:text-gray-900 '>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 320 512'
                aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Facebook page</span>
            </a>
            <a href='https://wa.me/+5215571123798?text=Me%20gustaría%20saber%20el%20precio%20de%20sus%20productos' className='text-gray-500 hover:text-gray-900 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 448 512'>
                <path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z' />
              </svg>
              <span className='sr-only'>WhatsApp page</span>
            </a>
            <a href='#' className='text-gray-500 hover:text-gray-900 '>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 448 512'
                aria-hidden='true'>
                <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
              </svg>
              <span className='sr-only'>Linkedin page</span>
            </a>
            <a href='#' className='text-gray-500 hover:text-gray-900 '>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 576 512'
                aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>YouTube account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
