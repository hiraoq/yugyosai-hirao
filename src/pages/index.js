import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';
import Projects from '../components/Projects';
import MastHead from '../components/MastHead';


const IndexPage = () => (
  <Layout>
    <Header />
    <MastHead />
    <Projects />
    <Subscribe />
    <SocialLinks />
    <Footer />
  </Layout >
);

export default IndexPage;
