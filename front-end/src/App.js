import React from 'react';
import './App.css';
import HomePage from './pages/HomePage.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import FundraiserPage from './pages/FundraiserPage';
import UserDashboardPage from './pages/UserDashboardPage';
import DonationPage from './pages/DonationPage';
import ApprovedDonation from './pages/ApprovedDonationPage';
import CreateFundraiserPage from './pages/CreateFundraiserPage';
import EditFundraiser from './pages/EditFundraiser';

// react router dom is a package that allows you to navigate between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditUser from './pages/EditUser';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    // This is the main container that holds all the pages
    // This is where you can add css to the whole app
    // className is the css class that is imported from App.css
    <div className='bg-green-300 min-h-screen relative font-Poppins'>

      {/* Imported npm package that displays messages throughout the browser pages */}
        {/* Container that hold different routes in the pages */}
        <Router>
          {/* Nav bar will show in all browser pages */}
          <div>
            <NavBar />
          </div>
          <div className='bg-white px-16'>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
          </div>

        {/* Routes in the browser to different pages */}
        <Routes>
          {/* The path is how you get to the page and the element is what shows on the page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/organizer/:userId/fundraiser/:fundraiserId" element={<FundraiserPage />} />
          <Route path="/dashboard/:userId" element={<UserDashboardPage />} />
          <Route path="/organizer/:userId/fundraiser/:fundraiserId/donation" element={<DonationPage />} />
          <Route path="/approved" element={<ApprovedDonation />} />
          <Route path="/createFundraiser" element={<CreateFundraiserPage />} />
          <Route path="/organizer/:userId/fundraiser/:fundraiserId/edit" element={<EditFundraiser />} />
          <Route path="/dashboard/:userId/edit" element={<EditUser />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>

      <Footer />
      
      </div>
  );
}

export default App;
