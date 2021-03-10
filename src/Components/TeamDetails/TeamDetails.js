import './TeamDetails.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Jumbotron } from 'react-bootstrap';
import maleImage from '../../Images/male.png';
import femaleImage from '../../Images/female.png';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import FlagIcon from '@material-ui/icons/Flag';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { FaMars, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";

const TeamDetails = ()=> {
  const { teamId } = useParams();
  const [team, setTeam] = useState({});
  const { 
    strTeam, 
    strTeamBadge, 
    strGender, 
    strSport, 
    strCountry, 
    intFormedYear, 
    strDescriptionEN, 
    strFacebook, 
    strInstagram, 
    strYoutube} = team;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
    .then(res => res.json())
      .then(data => setTeam(data.teams[0]))
  }, [teamId])

  console.log(team);

  return (
    <div className="web-banner">
      <img src={strTeamBadge} alt="" className="banner-team-logo" />

      <div className="container">
        <Jumbotron className="p-2 bg-primary">
          <div className="row align-items-center">
            <div className="col-md-8 text-white font-weight-bold">
              <h3>{strTeam}</h3>
              <p> <AddLocationIcon /> Founded : {intFormedYear}</p>
              <p> <FlagIcon /> Country : {strCountry}</p>
              <p> <SportsSoccerIcon/> Sports Type : {strSport}</p>
              <p> <FaMars style={{fontSize: 'x-large'}} /> Gender : {strGender} </p>
            </div>
            <div className="col-md-4">
              <img 
                src={(strGender === "Male") ? maleImage : femaleImage} 
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </Jumbotron>
        <p className="text-white">
          {strDescriptionEN}
        </p>

        <div className="row justify-content-center py-5">
          <a href={`https://${strInstagram}`} target="blank" className="text-danger">
            <FaInstagramSquare style={{ fontSize: '40px' }} />
          </a>
          <a href={`https://${strFacebook}`} target="blank" className="text-primary">
            <FaFacebookSquare style={{ fontSize: '40px' }} />
          </a>
          <a href={`https://${strYoutube}`} target="blank" className="text-danger">
            <FaYoutubeSquare style={{ fontSize: '40px' }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TeamDetails;