import { useState, useEffect } from "react";
import axios from "axios";


const Declined = () => {
    const [candidate, setCandidate] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/api/candidate/getcandidates?status=declined');
            setCandidate(data);
        })();
    }, []);

    return (<div className="row">
        <div className="mt-3">
            <button onClick={() => setToggle(!toggle)} className="btn btn-success">Toggle Notes</button>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                       {toggle || <th>Notes</th>}
                    </tr>
                </thead>
                <tbody>
                    {candidate.map(c =>
                        <tr key={c.id}>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.phoneNumber}</td>
                            <td>{c.email}</td>
                            {toggle || <td>{c.notes}</td>}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>)
}

export default Declined;