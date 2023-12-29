// import { Card, Col } from "antd";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
// import { Row } from "antd";

// const { Meta } = Card;

const gridCard = ({ news }: any) => {
  return (
    // <Row gutter={[16, 16]} className="justify-center">
    //   <Col xs={{ span: 24 }} lg={{ span: 12 }}>
    //     <a className="no-underline" href={news.url} target="_blank">
    //       <Card
    //         hoverable
    //         style={{ width: "60%" }}
    //         cover={
    //           news.urlToImage ? (
    //             <img src={news.urlToImage} alt="images" />
    //           ) : null
    //         }
    //       >
    //         <Meta title={news.title} description={news.description} />
    //       </Card>
    //     </a>
    //   </Col>
    // </Row>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={news.urlToImage} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default gridCard;
