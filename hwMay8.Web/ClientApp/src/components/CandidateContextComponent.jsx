import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const CandidateContext = createContext();

const CandidateContextComponent = (props) => {

    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setComfirmedCount] = useState(0);
    const [declinedCount, setDeclinedCount] = useState(0);

    useEffect(() => {
        refreshData();
    },[]);

    const refreshData = async () => {
        const {data} = await axios.get('/api/candidate/getcounts');
        setPendingCount(data.pendingCount);
        setComfirmedCount(data.confirmedCount);
        setDeclinedCount(data.declinedCount);
    }

    const obj = {
        pendingCount, 
        confirmedCount, 
        declinedCount,
        refreshData
    }

    return <CandidateContext.Provider value={obj}>
        {props.children}
    </CandidateContext.Provider>

}

const useCounts = () => {
    return useContext(CandidateContext);
}

export default CandidateContextComponent;
export { useCounts };