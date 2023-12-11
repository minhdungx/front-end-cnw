import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Button } from "antd";
import NavigationBar from "../../components/NavigationBar";
import axios from "axios";
import './style.css'
import { baseUrl } from "../../baseUrl";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function ViewCourse() {
    const { courseId } = useParams()
    const [sections, setSections] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            const responses = await axios.get(`${baseUrl}/api/public/course/${courseId}/subscribe-curriculum-item`)
                .then((response) => { setSections(response.data) });
        }
        fetchData()

    }, [])




    // const sections = courseInfo

    const [curLecture, setCurLecture] = useState(sections[0]?.lectureStudentDTOList[0]?.sectionTitle)
    const [curUrl, setCurUrl] = useState(sections[0]?.lectureStudentDTOList[0]?.mainContent?.contentUrl)
    const [curDes, setCurDes] = useState('')
    const handleClick = (title, url, des) => {
        setCurLecture(title)
        setCurUrl(url)
        setCurDes(des)
        console.log(curLecture)

    }

    useEffect(() => {


    }, curLecture)





    return (
        <div className="view-course-page">
            <div className="heading">

                <NavigationBar />
            </div>

            <Row className="page-content">
                <Col span={16} className="video-col">
                    <ReactPlayer className="lecture-video"
                        url={curUrl}
                        controls={true}
                        width={'100%'}
                        height={'100%'}
                        style={{ objectFit: 'cover' }}
                    >
                    </ReactPlayer>
                    <h1>{curLecture}</h1>
                    <h3>{curDes}</h3>

                </Col>

                <Col span={8} className="nav-col">

                    <ul className="section-ul">
                        {
                            sections?.map((sectionItem) => (
                                <li className="section-li">
                                    <h2>{sectionItem?.sectionTitle}</h2>
                                    <ul className="lecture-ul">
                                        {

                                            sectionItem.lectureStudentDTOList.map((lecture) => (
                                                <li className="lecture-li"
                                                    cursor="pointer"
                                                    onClick={() => handleClick(lecture?.lectureTitle, lecture?.mainContent?.contentUrl, lecture?.lectureDescription)}
                                                    style={{ backgroundColor: lecture?.lectureTitle === curLecture ? "rgb(209, 215, 220)" : "" }}
                                                >{lecture?.lectureTitle}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            )


                            )
                        }

                    </ul>


                </Col>

            </Row>

        </div>
    )


}


