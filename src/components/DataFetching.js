import React, {useState, useEffect} from "react";
import axios from 'axios';


function DataFetching() {
    const [queens, setQueens] = useState([])

    useEffect(() => {
        axios.get('http://www.nokeynoshade.party/api/queens?limit=50')
            .then(res => {
                console.log(res)
                setQueens(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    
    })


    return (
        <div>
            <ul>
                {queens.map(queen => <li key={queen.id}>
                    {queen.name}
                    <p>{queen.winner}</p>
                    <p>{queen.missCongeniality}</p>
                    <p>{queen.quote}</p>
                    <img src={`${queen.image_url}`}/>
                    </li>)}
            </ul>
        </div>
    )
}

export default DataFetching