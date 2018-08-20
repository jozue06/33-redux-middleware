import React from 'react';
import S from '../components/styles/styles.js'
import Header from './Header'
import Footer from './Footer'


import CategoryContainer from './Category/CategoryContainer';

const Dashboard = () => {
  return (
    <main>
    <Header />
    <S.Wrapper>
      <CategoryContainer />
    </S.Wrapper>
    <Footer />
    </main>
  );
};

export default Dashboard;