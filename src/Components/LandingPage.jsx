import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  let [username, setUserName] = useState('');
  let [infoCardStatus, setInfoCardStatus] = useState(false);

  let handleClick = () => {
    setInfoCardStatus(true)
  }

  return (
    <div className="min-h-screen bg-slate-500 flex justify-center items-center">
      {!infoCardStatus && <div className="bg-white w-96 shadow-md rounded-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold" htmlFor="usernameInput">
            GitHub Username:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            id="usernameInput"
            type="text"
            placeholder="Enter here"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <Link to={"/output"} state={username}>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={handleClick}
          >
            Show Information
          </button>
        </Link>
      </div>}
    </div>
  );
}
