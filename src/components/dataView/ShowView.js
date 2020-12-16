import React from "react";
import { Card, Image, Divider } from 'semantic-ui-react'
import { Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import attackerImage from './asset/attacker.jpg';
import defenderImage from './asset/defender.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '0.05px',
    }
}));

export default function ShowMainView({ name, defender_king, attacker_king, location, attacker_size, defender_size }) {
    const classes = useStyles();
    const UNKNOWN = 'Unknown';
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
                <Divider fitted/>
                <Row>
                    <Col>
                        <Card.Meta textAlign='left'>{attacker_king || UNKNOWN}</Card.Meta>
                    </Col>
                    <Col>
                        <Card.Meta textAlign='center'>Vs</Card.Meta>
                    </Col>
                    <Col>
                        <Card.Meta textAlign='right'>{defender_king || UNKNOWN}</Card.Meta>
                    </Col>
                        
                        
                        
                    </Row>
                {location && <Card.Description textAlign='center'>
                    Location : <strong>{location}</strong>
                </Card.Description>}
                <Row>
                    {attacker_size && <Card.Description className={ classes.root}textAlign='left'>
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
