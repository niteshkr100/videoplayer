import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
<footer className="bg-dark-1">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2">
      <div
        className="py-8 lg:order-last  lg: lg:py-16 lg:ps-16"
      >
        
        <div className="mt-8 space-y-4 lg:mt-0">

          <div>
            <h2 className="text-2xl font-medium text-gray-100">Request a Demo</h2>

            <p className="mt-4 max-w-lg text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, harum deserunt
              nesciunt praesentium, repellendus eum perspiciatis ratione pariatur a aperiam eius
              numquam doloribus asperiores sunt.
            </p>
          </div>

          <form className="mt-6 w-full">
            <label htmlFor="UserEmail" className="sr-only"> Email </label>

            <div
              className="rounded-md border border-gray-800 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm bg-dark-1 text-white p-3"
              />

              <button
                className="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
              >
                email
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="py-8 lg:py-16 lg:pe-16">
        <div className="hidden text-teal-600 lg:block">
        <Image
        src={"/logo.webp"}
        alt='logo'
        width={100}
        height={100}
      />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-medium text-gray-200">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75"> Lorem, ipsum. </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75"> Lorem, ipsum </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75"> Lorem, ipsum</a>
              </li>

              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75">Lorem, ipsum</a>
              </li>

              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75">Lorem, ipsum </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-200">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75"> About </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75"> Meet the Team </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75"> Accounts Review </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-200">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75"> Contact </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75"> FAQs </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 transition hover:opacity-75"> Live Chat </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <a href="#" className="text-gray-400 transition hover:opacity-75"> Terms & Conditions </a>
            </li>

            <li>
              <a href="#" className="text-gray-400 transition hover:opacity-75"> Privacy Policy </a>
            </li>

            <li>
              <a href="#" className="text-gray-400 transition hover:opacity-75"> Cookies </a>
            </li>
          </ul>

          <p className="mt-8 text-xs text-gray-400">&copy; 2024. Clipo AI. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
