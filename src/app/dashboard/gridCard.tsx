import { Card, Col } from "antd";
import React from "react";

const { Meta } = Card;

const gridCard = ({ news }) => {
  return (
    <>
      <Col>
        <a className="no-underline" href={news.url} target="_blank">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img src={news.urlToImage} alt="images" />}
          >
            <Meta title={news.title} description={news.description} />
          </Card>
        </a>
      </Col>
    </>
  );
};

export default gridCard;
