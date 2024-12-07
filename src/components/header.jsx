
const Header = ()=> {
  return (
    <div className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      {/* Left: Hamburger Menu */}
      <button className="text-gray-600 focus:outline-none ">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

    
     
      {/* Right: Admin Options */}
      <div className="flex items-center space-x-4">

        {/* Notification Icon */}
        <button className="relative text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 text-white bg-red-500 rounded-full"></span>
        </button>

        {/* Admin Dropdown */}
        
        <div className="relative">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 focus:outline-none">
            <span>Admin</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
         
        </div>
      </div>
    </div>

  );
}

export default Header;
