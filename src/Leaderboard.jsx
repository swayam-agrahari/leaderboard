import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        // Fetch the leaderboard data from your Cloudflare Worker
        const fetchLeaderboard = async () => {
            const response = await fetch('https://leaderboard.swayamagrahari1.workers.dev/'); // Replace with your actual worker URL
            const data = await response.json();
            setLeaderboardData(data);
        };

        fetchLeaderboard();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-neutral-800 to-green-800 flex items-center justify-center p-">
            <div className="w-full max-w-4xl text-yellow-50 ">
                {/* Main Heading */}
                <div className='mb-8'>

                    <h1 className="text-5xl font-bold text-center ">Hacktoberfest 2024 Hackweek</h1>

                    {/* Description */}
                    <p className="text-2xl  text-center mt-2">
                        Join us for Hacktoberfest 2024!
                    </p>

                </div>
                <div className='bg-yellow-50 w-full max-w-4xl   shadow-lg shadow-green-500/10 rounded-lg p-6 space-y-6'>




                    {/* Leaderboard Heading */}
                    <h2 className="text-2xl font-bold text-center text-gray-800 mt-4">Leaderboard</h2>

                    {/* Leaderboard Table */}
                    <div className="space-y-4">
                        {leaderboardData.map((person, index) => (
                            <div key={person.id} className="flex items-center justify-between bg-yellow-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 px-8">
                                <span className="text-2xl font-bold text-indigo-600">{index + 1}</span>
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-700 hover:text-indigo-500 transition-colors duration-300 underline">
                                            {person.name}
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-purple-600">{person.points}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;