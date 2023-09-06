import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Card() {
  let [details, setDetails] = useState("");
  let location = useLocation();
  let username = location.state;

  useEffect(() => {
    getDetails();
  }, [details]);

  let getDetails = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      })
  };

  return <div className="min-h-screen flex items-center justify-center bg-slate-500">
      {<div className="p-6 pl-20 pr-20 rounded-lg shadow-lg text-center bg-white">
        <img
          src={details.avatar_url}
          alt="Avatar"
          className="mx-auto mb-4 w-24 h-24 rounded-full"
        />
        <p className="text-3xl mt-10 font-semibold">{details.login}</p>
        <p className="text-gray-600 text-xl mt-2">{details.name}</p>
        <p className="mt-7">No. of public repos: {details.public_repos}</p>
        <p className="mt-2">No. of public gists: {details.public_gists}</p>
        <p className="mt-2">Profile created: {details.created_at ? details.created_at.substring(0, 10) : ""}</p>
        <Link to="/">
            <button className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300 mt-10">Back</button>
        </Link>
      </div>}
    </div>
}
