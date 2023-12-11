import React, { useState } from 'react';
import './style.css'
import { Button } from 'antd';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';


export default function Setting() {

    const [email, setEmail] = useState('');
    const [publishStatus, setPublishStatus] = useState(true)
    const [deleteStatus, setDeleteStatus] = useState(false)

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         const responses = await axios.get(`${baseUrl}/api/public/course`)
    //             .then((response) => setPublishStatus(response.data.isPublish));
    //     }
    //     fetchData()
    // }, [])


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email submitted: ${email}`);
    };



    return (
        <div className='container'>
            <h1>Email Form</h1>
            <div className='status'  >
                <h2>
                    Course Status
                </h2>
                <p>{publishStatus ? "This course is published " : "This course is not published "} </p>
                <div >
                    <Button className='inline' >{publishStatus ? "Unpublish" : "Publish"}</Button> <p className='inline'>{publishStatus ? "New Student cannot find your course via search, but exsisting students can still access content " : "New Student can find your course via search"}</p>
                </div>
                <div >
                    <Button className='inline'
                        style={{ color: deleteStatus ? "white" : "" }}
                    >Delete</Button> <p className='inline'>Delete course</p>
                </div>
            </div>

            <div className='enrollment'>

                <h2>Enrollment</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={handleEmailChange} required />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>


        </div>
    );
}


