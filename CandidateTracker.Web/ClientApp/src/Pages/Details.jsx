import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCounts } from "../components/CandidateContextComponent";


const Details = () => {

    const navigate = useNavigate();
    const {refreshData} = useCounts();

    const [candidate, setCandidate] = useState({});
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/api/candidate/getcandidate?id=${id}`);
            setCandidate(data);
        })();
    }, []);

    const onConfirmClick = async () => {
        await axios.post('/api/candidate/changecandidate', {id, status: 'confirmed'});
        navigate('/confirmed');
        refreshData();
    }

    const onRefuseClick = async () => {
        await axios.post('/api/candidate/changecandidate', {id, status: 'declined'});
        navigate('/declined');
        refreshData();
    }

const {firstName, lastName, email, phoneNumber, notes} = candidate;
    return (<div className="row">
        <div className="col-md-6 offset-md-3 mt-3 card card-body bg-light ">
            <h4>Name: {firstName} {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phoneNumber}</h4>
            <h4>Notes:</h4>
            <p>{notes}</p>
            <button onClick={onConfirmClick} className="btn btn-primary">Confirm</button>
            <button onClick={onRefuseClick} className="btn btn-danger">Refuse</button>
        </div>
    </div>)
}

export default Details;