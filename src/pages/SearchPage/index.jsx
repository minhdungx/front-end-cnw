import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Row, Button } from "antd";
import NavigationBar from "../../components/NavigationBar";
import axios from "axios";
import './style.css'
import { baseUrl } from "../../baseUrl";

const initState = {
    courseImage: 'https://daotao.ai/media/filer_public_thumbnails/filer_public/e1/ff/e1ffbc0c-071d-425b-a64c-e93a7039cfad/banner_nodejs.png__800x479_crop-smart_subsampling-2_upscale.png',
    dateCreated: 'abc',
    courseTitle: 'nodejs',
    categoryId: 0,
    courseId: 1

}


export default function SearchPage() {
    const navigate = useNavigate()
    const param = useParams()
    const [searchResult, setSearchResult] = React.useState([])

    const queryParameters = new URLSearchParams(window.location.search)
    const courseTitle = queryParameters.get("courseTitle")
    React.useEffect(() => {
        const fetchData = async () => {

            const responses = await axios.get(`${baseUrl}/api/public/course`, { params: { courseTitle: courseTitle } })
                .then((response) => setSearchResult(response.data.content));
        }
        fetchData()

    }, [searchResult])

    const handleOpenCourse = (courseId) => {
        navigate(`/course/view/${courseId}`)
    }


    return (
        <div className="search-page">
            <NavigationBar />
            <Row className="page-content">

                <Col className="search-result">
                    {searchResult?.map((resultItem) => (
                        <div className="result-item">
                            <img className="item-image" src={resultItem.courseImage} />
                            <p className="sub-title">{resultItem.dateCreated}</p>
                            <h3 className="title">
                                {resultItem.courseTitle}
                            </h3>
                            <Button onClick={() => handleOpenCourse(resultItem.courseId)}>View Course</Button>

                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    )
}