import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about/vision-mission" className="hover:text-gray-900">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/about/our-story" className="hover:text-gray-900">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about/our-team" className="hover:text-gray-900">
                  Leadership Team
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="hover:text-gray-900">
                  Our Accomplishments
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Our Brands</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/brands" className="hover:text-gray-900">
                  Know Our Brands
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="hover:text-gray-900">
                  Our Purpose
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Others</h3>
            <ul className="space-y-2 text-sm">
              {/* <li>
                <Link to="#" className="hover:text-gray-900">
                  Our Workplace
                </Link>
              </li> */}
              {/* <li>
                <Link to="#" className="hover:text-gray-900">
                  News & Events
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="hover:text-gray-900">
                  Careers
                </Link>
              </li> */}
              {/* <li>
                <Link to="#" className="hover:text-gray-900">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Follow Us / Media Queries */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Follow Us On</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            {/* <div className="mt-4">
              <p className="font-bold text-gray-900">For Media Queries:</p>
              <a
                href="mailto:mediaqueries@rayneel.com"
                className="text-sm hover:text-gray-900"
              >
                mediaqueries@rayneel.in
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} Ray Neel. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
