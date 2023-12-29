import { Card, Col } from "antd";
import React from "react";
import { Row } from "antd";

const { Meta } = Card;

const gridCard = ({ news }: any) => {
  return (
    <Row gutter={[16, 16]}>
      {news.map((article: any, index: number) => (
        <Col key={index} xs={{ span: 24 }} lg={{ span: 12 }}>
          <a className="no-underline" href={article.url} target="_blank">
            <Card
              hoverable
              style={{ width: "60%" }}
              cover={
                article.urlToImage ? (
                  <img src={article.urlToImage} alt="images" />
                ) : null
              }
            >
              <Meta title={article.title} description={article.description} />
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default gridCard;
