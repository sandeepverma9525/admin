
// !2 


import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import Login from '../Login/Login'
import Signup from '../Login/Signup'
import ScrollToTop from '../Navbar/ScrollToTop';
import DashboardLayout from '../Layout/DashboardLayout';

import Dashboard from '../UserDashboard/Dashboard/Dashboard';
import Analytics from '../UserDashboard/Analytic/Analytics';
import Affiliates from '../UserDashboard/Affiliates/Affiliates';
import Reports from '../UserDashboard/Reports/Reports';
import KYCApplications from '../UserDashboard/KYCApplications/KYCApplications';
import Applications from '../UserDashboard/Applications/Applications';
import BlockedAffiliates from '../UserDashboard/BlockedAffiliates/BlockedAffiliates';
import Network from '../UserDashboard/Network/Network';
import AffiliateTree from '../UserDashboard/AffiliateTree/AffiliateTree';
import Finance from '../UserDashboard/Finance/Finance';
import BonusStructure from '../UserDashboard/BonusStructure/BonusStructure';
import Withdrawals from '../UserDashboard/Withdrawals/Withdrawals';
import EpinCenter from '../UserDashboard/EpinCenter/EpinCenter';
import Wallets from '../UserDashboard/Wallets/Wallets';
import Announcements from '../UserDashboard/Announcements/Announcements';
import DownloadCenter from '../UserDashboard/DownloadCenter/DownloadCenter';



import Permissions from '../UserDashboard/Permissions/Permissions';






// Dummy 
// import Footer from '../Footer/Footer'
// import ForgotPassword from '../Login/ForgotPassword'

import MyInVoices from '../UserDashboard/MyInVoices';
import MyTeam from '../UserDashboard/My_Team/MyTeam';
import EarningWallet from '../UserDashboard/EarningWallet/EarningWallet';
import MyPayout from '../UserDashboard/MyPayout';
import MyReferral from '../UserDashboard/MyReferrals/MyReferral';
import MeetingApp from '../UserDashboard/VideoMeeting/MeetingApp';
import SubscriptionPage from '../UserDashboard/SubscriptionPage/Subscription';
import Profile from '../UserDashboard/Profile/Profile';
import SupportTicketSystem from '../UserDashboard/Support/Support';
import LevelStructure from '../UserDashboard/My_Team/LevelStructure';
import AffiliatePopup from '../UserDashboard/Affiliates/AffiliatePopup';
import ProfileSettings from '../UserDashboard/ProfileSetting/ProfileSettings';

// import AddNewAffiliate from '../UserDashboard/My_Team/AddNewAffiliate'


// import Myrefrals from '../UserDashboard/MyReferrals/Myrefrals';


const Routers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ⬅️ new
  
  useEffect(() => {
    const auth = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(auth === "true");
    setIsLoading(false); // ⬅️ only render after checking auth
  }, []);

  if (isLoading) return null; // ⬅️ don't render routes until auth is ready


  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Routes>

          {!isLoggedIn ? (
            <>
            
              <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path='/signup' element={<Signup />} />
              {/* <Route path='/forgot' element={<ForgotPassword/>} /> */}
              {/* <Route path='payment' element={<Payment />} /> */}
              {/* <Route path='/offer-letter' element={<OfferLetter setIsLoggedIn={setIsLoggedIn} />} /> */}

              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path='/' element={<DashboardLayout />}>
              <Route path="/" element={< Navigate to= '/Dashboard' />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path='analytics' element={<Analytics/> } />
                <Route path='affiliates' element={<Affiliates/>} />
                <Route path='reports' element={<Reports/>} />
                <Route path='kycapplications' element={<KYCApplications/>} />
                <Route path='applications' element={<Applications/>}  />
                <Route path='blockedaffliates' element={<BlockedAffiliates/>} />
                <Route path='network' element={<Network/>} />
                <Route path='affiliatetree' element={<AffiliateTree/>} />
                <Route path='finance' element={<Finance/>} />
                <Route path='bonusstructure' element={<BonusStructure/>} />
                <Route path='withdrawals' element={<Withdrawals/>} />
                <Route path='epin' element={<EpinCenter/>} />
                <Route path='wallets' element={<Wallets/>} />
                <Route path='announcements' element={<Announcements/>} />
                <Route path='downloads' element={<DownloadCenter/>} />
{/* remove */}
                <Route path='affiliatepop' element={<AffiliatePopup/>} />
                <Route path='profilesetting' element={<ProfileSettings/>} />






                <Route path='permissions' element={<Permissions/>} />
              {/* Dummy */}
                <Route path='invoices' element={<MyInVoices/>} />
                <Route path='team' element={<MyTeam/>} />
                <Route path='wallet' element={<EarningWallet/>} />
                <Route path='payouts' element={<MyPayout/>} />
                <Route path='referrals' element={<MyReferral/>}/>
                <Route path='meetings' element={<MeetingApp/>}/>
                
                <Route path='subscriptions' element={<SubscriptionPage/>} />
                <Route path='profile' element={<Profile/>} />
                <Route path='support' element={<SupportTicketSystem/>} />
                <Route path='level' element={<LevelStructure/>} />
                {/* <Route path='addafilliate' element={<AddNewAffiliate/>} /> */}
                {/* <Route path='addafilliate' element={<Register/>} /> */}
              </Route>
                {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
            </>
          )}
        </Routes>

      </Router>
    </div>
  )
}

export default Routers


