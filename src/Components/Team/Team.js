import './Team.css';
import React from 'react';
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Team = ({team})=>  {
  const {idTeam, strTeamBadge, strTeam, strSport, strGender} = team;
  const history = useHistory();
  const handleClick = ()=> {
    history.push(`/details/${idTeam}`)
  }

  return (
    <div className="Team">
      <Card className="team-card">
        <Card.Img variant="top" src={strTeamBadge} className="team-logo" />
        <Card.Body>
          <Card.Title className="text-center">{strTeam}</Card.Title>
          <Card.Text className="text-center">{strSport} || {strGender}</Card.Text>

          <Button
            variant="contained"
            endIcon={<SearchOutlinedIcon />}
            className="m-auto d-flex bg-warning"
            onClick={handleClick}
          >
            Explore
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Team;