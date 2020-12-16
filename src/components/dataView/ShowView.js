import React, { Component } from "react";

import { Card, Image } from 'semantic-ui-react'
import { Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import attackerImage from './asset/attacker.jpg';
import defenderImage from './asset/defender.jpg';

export default function ShowMainView({ name, defender_king, attacker_king, location, attacker_size, defender_size }) {
    return (
        <Card>
                <Card.Content>
                    <Image
                    floated='right'
                    size='mini'
                    src={attackerImage}
                />
                <Image
                    floated='left'
                    size='mini'
                    src={defenderImage}
                />
                
                <Card.Header>{name}</Card.Header>
                    <Row>
                        <Card.Meta textAlign='left'>{attacker_king}</Card.Meta>
                        <Card.Meta textAlign='center'>Vs</Card.Meta>
                        <Card.Meta textAlign='right'>{defender_king}</Card.Meta>
                    </Row>
                <Card.Description textAlign='left'>
                    Location : <strong>{location}</strong>
                </Card.Description>
                <Row>
                    {attacker_size && <Card.Description textAlign='left'>
                        Attacker Size : <strong>{attacker_size}</strong>
                    </Card.Description>}
                    {defender_size && <Card.Description textAlign='right'>
                        Defender Size : <strong>{defender_size}</strong>
                    </Card.Description>}
                </Row>
            </Card.Content>
        </Card>
    );
}
