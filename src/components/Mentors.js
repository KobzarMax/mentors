import * as React from 'react';
import "./Mentors.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, CardMedia } from '@mui/material';
import mentorIcon from '../img/member-icon.png';






export default function Mentors() {

  const profileData = [
    {
      name: "Loremiper Kpsut",
      description: "The Test Loremipsu, sinplydust of sharing ani decade of experience in Loremipi Loremipsumt",
    },
    {
      name: "Danil Test",
      description: "The Testts ar MorsDeco & Co-founder of Morsic GmbH",
    },
    {
      name: "Miren Ltrepei",
      description: "Lossionate app loremiper. One of the loremipsuts of LosmAP",
    },
  ]

  return (
    <Box 
      display="flex"
      className="mentor-profiles"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column"
        }
      }}
      >

      {profileData.map((mentor, i) => (

        <Card 
          key={i}
          className='card-wrapper'
          sx={{
              margin: "auto",
              marginBottom: "0",
              width: {
                xl: "360px",
                lg: "320px",
                md: "280px",
                sm: "300px",
                xs: "300px"
              },
              height: {
                xl: "400px",
                lg: "360px",
                md: "320px",
                sm: "300px",
                xs: "300px"
              },
              backgroundColor: '#292929',
              borderRadius: '16px',
              border: "2px solid #6B6B7A",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 23px rgba(0, 0, 0, 0.25), -3px 2px 18px rgba(0, 0, 0, 0.37)",
              backdropFilter: "blur(8px)"
            }}
        >
          <CardActionArea
            sx={{
              height: {
                xl: "400px",
                lg: "360px",
                sm: "300px",
                xs: "300px"
              },
              backgroundColor: 'transparent',
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <CardMedia 
              className="card-img"
              component="img"
              image={mentorIcon}
              title="member-icon"
              sx={{
                width: {
                  xl: "177px",
                  md: "137px",
                  sm: "117px",
                  xs: "117px"
                },
                height: {
                  xl: "200px",
                  md: "180px",
                  sm: "132px",
                  xs: "132px"
                },
                margin: "15px auto 0"
              }}
            />
            <CardContent
              sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                }}
            >
              <Typography
                      sx={{
                      fontSize: "24px",
                      fontWeight: "500",
                      wordSpacing: "0.04em",
                      color: "#ffffff",
                      fontFamily: "'Montserrat', sans-serif",
                      marginTop: "25px",
                      marginBottom: "10px"
                      }}
                >
                {mentor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary"
                className="profile-description"
                sx={{
                fontSize: {
                  xl: "18px",
                  md: "16px",
                  xs: "16px"
                },
                fontWeight: "300",
                color: "#ffffff",
                fontFamily: "'Montserrat', sans-serif",
                opacity: '0.4',
                wordSpacing: "0.04em",
                padding: "0 14px 40px"
                }}
              >
                {mentor.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
      
      )}


    </Box>
    
  );
}