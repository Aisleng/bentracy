import React from 'react';
import { Typography } from '@mui/material';
import { ContentSection, Hero, ImageSection, Layout, SEO } from '../components';
import primaryHeroImage from '../images/heroimage.jpg';
import houseImage from '../images/house-bg.png';
import homes from '../images/home-rows.jpg';

const HomePage = () => {
  const heroImage = {
    src: primaryHeroImage,
    alt: 'Homes in Kentucky',
  };
  const heroButton = {
    text: 'Contact Ben Today',
    link: 'mailto: bent@bentracy.com',
  }
  const sectionImage = {
    src: houseImage,
    alt: 'Homes Outline',
  }

  const homeRows = {
    src: homes,
    alt: 'Homes in Kentucky',
  }

  return (
    <Layout>
      <SEO title="Ben Tracy" />
      <main>
        <Hero
          title="Mortgages Made Personal"
          body="Mortgages aren’t a one size fits all. You need someone that knows you and your personal goals. Someone who will make the process truly tailored to your needs."
          image={heroImage}
          button={heroButton}
        />
        <ContentSection overlayImage={sectionImage} id="content">
          <Typography variant="h4" component="h2">
            A mortgage, is more than a mortgage
          </Typography>
          <Typography variant="body1">
            A mortgage touches every part of your financial life. It’s difficult to separate a mortgage from your kids college tuition, your
            dream car, or even your retirement.
          </Typography>
          <Typography variant="body1">
            Ben knows this, and he knows that it takes someone that is truly interested in where you are in life, and where you want to be
            to deliver the right mortgage.
          </Typography>
        </ContentSection>
        <ImageSection backgroundImage={homeRows} />
      </main>
    </Layout>
  );
}

export default HomePage
