import React from 'react';
import { Link } from 'react-router-dom';
import mysql from 'mysql';

import { GitPullRequest, FileText, Archive, Video } from 'react-feather';

import { Container, Title, Button, Box, BoxTitle, BoxInfo } from './styles';

function Navbar() {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
    });
    
    const query = 'SELECT * FROM ak_membros WHERE id = 1';

    connection.query(query, (err, rows, fields) => {
        if(err) {
            console.log('Failed' + err);
            res.sendStatus(500)
            return
        }

        res.json(rows);
    });

    return (
        <Container>
            <Link to="/">
                <Title>
                    <Archive color="#777f8a" size={16} /> Archives
                </Title>
            </Link>

            <Link to="/contact">
                <Button>Send study suggestion</Button>
            </Link>

            <Box>
                <BoxTitle>Learnings</BoxTitle>
                <BoxInfo>
                    <div>
                        <GitPullRequest color="#777f8a" size={16} /> Total
                    </div> 

                    <span>14</span>
                </BoxInfo>

                <BoxInfo>
                    <div>
                        <FileText color="#777f8a" size={16} /> Articles
                    </div> 

                    <span>4</span>
                </BoxInfo>

                <BoxInfo>
                    <div>
                        <Video color="#777f8a" size={16} /> Videos
                    </div> 

                    <span>10</span>
                </BoxInfo>
            </Box>
        </Container>
    );
}

export default Navbar;