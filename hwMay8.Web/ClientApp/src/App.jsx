import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Declined from './Pages/Declined';
import Confirmed from './Pages/Confirmed';
import Details from './Pages/Details';
import CandidateContextComponent from './components/CandidateContextComponent';

const App = () => {
    return (
        <CandidateContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addcandidate' element={<AddCandidate />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/declined' element={<Declined />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                    <Route path='/pending/details/:id' element={<Details />} />
                </Routes>
            </Layout>
        </CandidateContextComponent>
    );
}

export default App;