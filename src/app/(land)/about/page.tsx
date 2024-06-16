import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 text-gray-800 container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6">About Our Web App</h1>
        <p className="text-lg mb-4">
          We are Vishal Pal, Mohammad Rehan, and Aryan Jangid. We developed this web app as part of the Mechathon event at MNNIT Allahabad's techno-management festival, Avishkar 24.
        </p>
        <p className="text-lg mb-4">
          Our app is designed to facilitate community creation and interaction. Users can create groups within communities and engage in various types of communication, including text, audio, video chat, and collaborative sessions.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Community Creation: Build and join communities of interest.</li>
          <li className="mb-2">Group Creation: Create groups within communities for focused discussions.</li>
          <li className="mb-2">Text Chat: Engage in real-time text conversations.</li>
          <li className="mb-2">Audio Chat: Participate in voice discussions.</li>
          <li className="mb-2">Video Chat: Have face-to-face meetings via video chat.</li>
          <li className="mb-2">Collaborative Sessions: Work together on projects and tasks in real-time.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Event Participation</h2>
        <p className="text-lg mb-4">
          This app was specifically developed for the Mechathon event during Avishkar 24 at MNNIT Allahabad. The event challenged participants to create innovative solutions, and our app stands as a testament to our commitment and hard work.
        </p>
        <p className="text-lg">
          We hope this app will foster better communication and collaboration within communities and groups, making it easier for people to connect and work together.
        </p>
      </div>
    </div>
  )
}

export default page