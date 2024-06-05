import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCounts } from "../components/CandidateContextComponent";


const Pending = () => {

    const [candidate, setCandidate] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/api/candidate/getcandidates?status=pending');
            setCandidate(data);
        })();
    }, []);


    return (<div className="row">
        <div className="mt-3">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {candidate.map(c =>
                        <tr key={c.id}>
                            <td><Link to={`/pending/details/${c.id}`}>
                                View Details
                            </Link></td>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.phoneNumber}</td>
                            <td>{c.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>)
}

export default Pending;