import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">StyleHub</h3>
          <p className="text-gray-400 mb-4">
            Your one-stop destination for premium fashion and lifestyle products.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.878h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 19c7.732 0 11.955-6.406 11.955-11.955 0-.182 0-.364-.012-.544A8.56 8.56 0 0022 4.557a8.19 8.19 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.102 4.102 0 00-6.993 3.743A11.65 11.65 0 013 3.16a4.07 4.07 0 001.27 5.466 4.073 4.073 0 01-1.86-.513v.05a4.1 4.1 0 003.292 4.02 4.095 4.095 0 01-1.853.07 4.103 4.103 0 003.83 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-white">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 00-3.16 19.44c-.04-.83-.08-2.1.02-3.01.09-.8.58-5.1.58-5.1s-.15-.3-.15-.75c0-.7.4-1.22.9-1.22.42 0 .62.32.62.7 0 .43-.27 1.08-.42 1.68-.12.5.25.9.75.9.9 0 1.6-1 1.6-2.45 0-1.27-.9-2.16-2.18-2.16-1.48 0-2.35 1.11-2.35 2.26 0 .45.17.93.38 1.2a.15.15 0 01.03.14c-.03.15-.1.5-.12.57-.04.1-.15.13-.27.08-1-.46-1.62-1.92-1.62-3.1 0-2.52 1.83-4.83 5.28-4.83 2.77 0 4.92 2 4.92 4.67 0 2.78-1.75 5.02-4.18 5.02-0.82 0-1.6-.43-1.87-.93l-.5 1.9c-.18.7-.67 1.57-1 2.1a10 10 0 0014.5-9.1A10 10 0 0012 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact
              </Link>
            </li>
            <li>
              <Link href="/faqs"  className="text-gray-400 hover:text-white">FAQs
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/categories/men" className="text-gray-400 hover:text-white">Men's Fashion
              </Link>
            </li>
            <li>
              <Link href="/categories/women" className="text-gray-400 hover:text-white">Women's Fashion 
              </Link>
            </li>
            <li>
              <Link href="/categories/accessories" className="text-gray-400 hover:text-white">Accessories
              </Link>
            </li>
            <li>
              <Link href="/categories/electronics" className="text-gray-400 hover:text-white">Electronics 
              </Link>
            </li>
            <li>
              <Link href="/categories/home-living"  className="text-gray-400 hover:text-white">Home & Living
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-gray-400">
            <p>
              <svg
                className="inline h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 10l9-7 9 7v11a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H3a2 2 0 01-2-2z" />
              </svg>
              123 Fashion Street, City
            </p>
            <p>
              <svg
                className="inline h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.38 2.39.73 3.5a2 2 0 01-.45 2.11L9 10a16 16 0 006 6l1.67-1.67a2 2 0 012.11-.45c1.11.35 2.29.6 3.5.73a2 2 0 011.72 2z" />
              </svg>
              +1 (555) 123-4567
            </p>
            <p>
              <svg
                className="inline h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M16 12H8m0 0l4-4m-4 4l4 4" />
              </svg>
              info@stylehub.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>© 2024 StyleHub. All rights reserved.</p>
      </div>
    </footer>
  
  )
}

export default Footer