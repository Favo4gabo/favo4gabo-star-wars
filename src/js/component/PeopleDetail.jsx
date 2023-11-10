import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../store/appContext";

function PeopleDetail() {

    const { id } = useParams()
    const { store } = useContext(Context)
    const [detail, setDetail] = useState({})

    function searchDetail() {
        let result = store.people.find((item) => item._id == id)
        setDetail(result)
    }

    useEffect(() => { searchDetail() }, [store.people])
    return (
        <>
            <div className="container my-container">
                <div className="d-flex justify-content-center ">
                    <div>
                        <img src={`https://picsum.photos/800/600`} className="card-img-top" alt="..." />
                    </div>
                    <div>
                        <h1>{detail?.properties?.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat officia eum laborum facere ipsa beatae corporis et? Architecto, iusto.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center ">
                    <div className="flex-column">
                        <p className="card-text">Gender: {detail?.properties?.gender}</p>
                        <p className="card-text">Hair: {detail?.properties?.hair_color}</p>
                        <p className="card-text">Eye: {detail?.properties?.eye_color}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PeopleDetail