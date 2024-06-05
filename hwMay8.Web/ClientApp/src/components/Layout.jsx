import React from 'react';
import { Link } from 'react-router-dom';
import { useCounts } from './CandidateContextComponent';

const Layout = ({ children }) => {

    const {pendingCount, confirmedCount, declinedCount} = useCounts();

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand">Candidate Tracker</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item"><Link to="/" className='nav-link text-light'>Home</Link></li>
                                <li className="nav-item"><Link to="/addcandidate" className='nav-link text-light'>Add Candidate</Link></li>
                                <li className="nav-item"><Link to="/pending" className='nav-link text-light'>Pending ({pendingCount})</Link></li>
                                <li className="nav-item"><Link to="/confirmed" className='nav-link text-light'>Confirmed ({confirmedCount})</Link></li>
                                <li className="nav-item"><Link to="/declined" className='nav-link text-light'>Declined ({declinedCount})</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container mt-5">
                {children}
            </div>
        </div>
    )
}

export default Layout;