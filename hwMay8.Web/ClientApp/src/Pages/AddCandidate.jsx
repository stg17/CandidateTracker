import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCounts } from "../components/CandidateContextComponent";


const AddCandidate = () => {

    const navigate = useNavigate();
    const {refreshData} = useCounts();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    const onSubmitClick = async () => {
        await axios.post('/api/candidate/addcandidate', {firstName, lastName, email, phoneNumber, notes});
        refreshData();
        navigate('/pending');
    }

    return (<div className="row">
        <div className="col-md-6 offset-md-3 mt-3">
            <div className="card card-body bg-light">
                <h4>Add Candidate</h4>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name="firstName" placeholder="First Name" className="form-control"/>
                <br/>
                <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" name="lastName" placeholder="Last Name" className="form-control"/>
                <br/>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="email" placeholder="Email" className="form-control"/>
                <br/>
                <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="text" name="phoneNumber" placeholder="Phone Number" className="form-control"/>
                <br/>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="form-control" name="notes" placeholder="Notes..."></textarea>
                <br/>
                <button onClick={onSubmitClick} className="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
    )
}

export default AddCandidate;