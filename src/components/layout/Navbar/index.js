import React from 'react';
import { Link } from 'react-router-dom';
import { GitPullRequest, FileText, Archive, Video } from 'react-feather';

import { Container, Title, Button, Box, BoxTitle, BoxInfo } from './styles';

function Navbar() {
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