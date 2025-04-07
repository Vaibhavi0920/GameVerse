import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import PauseMatchButton from './components/PauseMatchButton';
import LeavePartyButton from './components/LeavePartyButton';
import ResetAppButton from './components/ResetAppButton';
import ChatBox from './components/ChatBox';
import Graphs from './components/Graphs';
import TextField from './components/TextField';
import './App.css';

const App = () => {
  const [matchStarted, setMatchStarted] = useState(false);
  const [matchPaused, setMatchPaused] = useState(false);
  const [inParty, setInParty] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [storedName, setStoredName] = useState('');
  const [playerStats, setPlayerStats] = useState([]);

  useEffect(() => {
    const savedName = localStorage.getItem('playerName');
    if (savedName) {
      setStoredName(savedName);
    }
  }, []);

  const handlePlayerNameChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
    setPlayerName(sanitizedInput);
  };

  const handleSubmitPlayerName = () => {
    if (playerName.trim() === '') {
      alert("Player name can't be empty!");
    } else {
      localStorage.setItem('playerName', playerName);
      setStoredName(playerName);
      alert(`Player name "${playerName}" stored successfully!`);
    }
  };

  const logStat = (action) => {
    setPlayerStats((prevStats) => [
      ...prevStats,
      { time: new Date().toLocaleTimeString(), action }
    ]);
  };

  const startMatch = () => {
    setMatchStarted(true);
    setMatchPaused(false);
    logStat('Match Started');
    alert('Match Started!');
  };

  const pauseMatch = () => {
    if (matchStarted && !matchPaused) {
      setMatchPaused(true);
      logStat('Match Paused');
      alert('Match Paused!');
    } else if (matchPaused) {
      alert('Match is already paused.');
    } else {
      alert('You need to start the match first.');
    }
  };

  const joinParty = () => {
    if (!inParty) {
      setInParty(true);
      logStat('Joined Party');
      alert('Joined Party!');
    } else {
      alert('Already in a party.');
    }
  };

  const leaveParty = () => {
    if (inParty) {
      setInParty(false);
      logStat('Left Party');
      alert('Left Party!');
    } else {
      alert('You are not in a party.');
    }
  };

  const openLeaderboard = () => {
    alert('Leaderboard Opened!');
  };

  const resetApp = () => {
    setMatchStarted(false);
    setMatchPaused(false);
    setInParty(false);
    setPlayerName('');
    localStorage.removeItem('playerName');
    setStoredName('');
    setPlayerStats([]);
    alert('App state has been reset!');
  };

  return (
    <div className="gameverse-container">
      <h1>GameVerse</h1>
      <p className="student-id">Student ID: vaidos6477</p>

      <TextField
        label="Enter Player Name:"
        value={playerName}
        onChange={handlePlayerNameChange}
        placeholder="Player123"
      />
      <Button label="Submit Name" onClick={handleSubmitPlayerName} />

      {storedName && (
        <div style={{ marginTop: '15px', fontSize: '18px', fontWeight: 'bold', color: '#007BFF' }}>
          Welcome Player: {storedName}
        </div>
      )}

      <div className="buttons-container">
        <Button label="Start Match" onClick={startMatch} />
        <PauseMatchButton onClick={pauseMatch} />
        <Button label="Leaderboard" onClick={openLeaderboard} />
        <Button label="Join Party" onClick={joinParty} />
        <LeavePartyButton onClick={leaveParty} />
        <ResetAppButton onClick={resetApp} />
      </div>

      <div className="status-display">
        <p><strong>Match Status:</strong> {matchStarted ? (matchPaused ? 'Paused' : 'In Progress') : 'Not Started'}</p>
        <p><strong>Party Status:</strong> {inParty ? 'In Party' : 'Not in Party'}</p>
      </div>

      <ChatBox />
      <Graphs playerStats={playerStats} />
    </div>
  );
};

export default App;