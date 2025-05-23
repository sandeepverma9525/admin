// import React, { useState } from 'react';
// import Header from '../VideoMeeting/Header';
// import TabNavigation from '../VideoMeeting/TabNavigation';
// import MeetingCard from '../VideoMeeting/MeetingCard';
// import RecordingsList from '../VideoMeeting/RecordingsList';
// import MeetingHeader from './Meeting/MeetingHeader';
// import VideoArea from './Meeting/VideoArea';
// import MeetingControls from './Meeting/MeetingControls';
// import MessagePanel from './Meeting/MessagePanel';
// import ParticipantsPanel from './Meeting/ParticipantsPanel';
// import { meetingsData, recordingsData } from '../JsonData/mockData';

// import "./VideoStyles/meeting.css"
// import './VideoStyles/meetingdash.css'
// import './VideoStyles/videoMain.css'

// function MeetingApp() {
//   const [activeTab, setActiveTab] = useState("scheduled");
//   const [isJoiningMeeting, setIsJoiningMeeting] = useState(false);
//   const [activeMeeting, setActiveMeeting] = useState(null);
//   const [isMicOn, setIsMicOn] = useState(true);
//   const [isCameraOn, setIsCameraOn] = useState(true);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [isMessagesPanelOpen, setIsMessagesPanelOpen] = useState(false);
//   const [participantsPanelOpen, setParticipantsPanelOpen] = useState(false);

//   // Function to join a meeting
//   const joinMeeting = (meeting) => {
//     setActiveMeeting(meeting);
//     setIsJoiningMeeting(true);
//   };

//   // Function to leave a meeting
//   const leaveMeeting = () => {
//     setIsJoiningMeeting(false);
//     setActiveMeeting(null);
//     setIsMessagesPanelOpen(false);
//     setParticipantsPanelOpen(false);
//   };

//   // Function to send a message
//   const sendMessage = () => {
//     if (newMessage.trim() !== "") {
//       const message = {
//         id: messages.length + 1,
//         sender: "You",
//         text: newMessage,
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
//       setMessages([...messages, message]);
//       setNewMessage("");
//     }
//   };

//   // Function to handle message input and send on Enter
//   const handleMessageInput = (e) => {
//     if (e.key === 'Enter') {
//       sendMessage();
//     } else {
//       setNewMessage(e.target.value);
//     }
//   };

//   // Function to copy meeting link
//   const copyLink = (link) => {
//     try {
//       const textarea = document.createElement('textarea');
//       textarea.value = link;
//       document.body.appendChild(textarea);
//       textarea.select();
//       document.execCommand('copy');
//       document.body.removeChild(textarea);
      
//       // Show success message
//       alert("Meeting link copied to clipboard!");
//     } catch (err) {
//       console.error('Failed to copy link: ', err);
//       alert("Failed to copy link. Please copy it manually.");
//     }
//   };

//   // If in a meeting, show the meeting interface
//   if (isJoiningMeeting && activeMeeting) {
//     return (
//       <div className="meeting-view">
//         <MeetingHeader meeting={activeMeeting} onLeave={leaveMeeting} />
        
//         <div className="meeting-container">
//           <div className="video-container">
//             <VideoArea isCameraOn={isCameraOn} />
            
//             <MeetingControls 
//               isMicOn={isMicOn}
//               isCameraOn={isCameraOn}
//               isMessagesPanelOpen={isMessagesPanelOpen}
//               isParticipantsPanelOpen={participantsPanelOpen}
//               onToggleMic={() => setIsMicOn(!isMicOn)}
//               onToggleCamera={() => setIsCameraOn(!isCameraOn)}
//               onToggleMessages={() => setIsMessagesPanelOpen(!isMessagesPanelOpen)}
//               onToggleParticipants={() => setParticipantsPanelOpen(!participantsPanelOpen)}
//             />
//           </div>

//           {isMessagesPanelOpen && (
//             <MessagePanel 
//               messages={messages}
//               newMessage={newMessage}
//               onClose={() => setIsMessagesPanelOpen(false)}
//               onSend={sendMessage}
//               onInputChange={(e) => setNewMessage(e.target.value)}
//               onKeyDown={handleMessageInput}
//             />
//           )}

//           {participantsPanelOpen && (
//             <ParticipantsPanel 
//               meeting={activeMeeting}
//               onClose={() => setParticipantsPanelOpen(false)}
//             />
//           )}
//         </div>
//       </div>
//     );
//   }

//   // Main Dashboard view
//   return (
//     <div className="container">
//       <Header onJoinMeeting={() => {
//         if (meetingsData.length > 0) {
//           joinMeeting(meetingsData[0]);
//         } else {
//           alert("No meetings available to join!");
//         }
//       }} />
      
//       <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
//       {activeTab === "scheduled" && (
//         <div className="meetings-list">
//           {meetingsData.map((meeting) => (
//             <MeetingCard 
//               key={meeting.id} 
//               meeting={meeting} 
//               onJoin={joinMeeting}
//               onCopyLink={copyLink}
//             />
//           ))}
//         </div>
//       )}

//       {activeTab === "recordings" && (
//         <RecordingsList recordings={recordingsData} />
//       )}
//     </div>
//   );
// }

// export default MeetingApp;


import React from 'react'
import './VideoStyles/videoMain.css'

const MeetingApp = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <h1>This Is A Meeting</h1>
    </div>
  )
}

export default MeetingApp
