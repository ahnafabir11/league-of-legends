import './Home.css';
import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Home = ()=> {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then(res => res.json())
      .then(data => setTeams(data.teams))
  }, [teams])

  return (
    <div className="web-banner">
      <h1 className="website-title">League Of Legends</h1>

      <div className="container">
        <div className="team-list">
          {
            teams.map((team, idx) => <Team key={idx} team={team} />)
          }
        </div>
      </div>

    </div>
  )
}

export default Home;