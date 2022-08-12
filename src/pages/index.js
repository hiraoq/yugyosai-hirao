import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Projects from '../components/Projects';
import MastHead from '../components/MastHead';


const IndexPage = () => (
  <Layout>
    <Header />
    <MastHead />
    <Projects />
    <SocialLinks />
    <Footer />
  </Layout >
);

export default IndexPage;
