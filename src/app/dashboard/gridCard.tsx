import { Card, Col } from "antd";
import React from "react";

const { Meta } = Card;

const gridCard = () => {
  return (
    <div>
      <Col>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img src="/cardImage.png" alt="images" />}
        >
          <Meta
            title="Sample Card Grid View"
            description="Lorem sit deserunt ullamco in voluptate. Mollit labore adipisicing labore sunt labore ex amet. Consectetur enim tempor do et. Aliqua pariatur nostrud quis ipsum dolor cupidatat aliqua amet veniam labore consectetur. Cupidatat deserunt in qui laborum duis."
          />
        </Card>
      </Col>
    </div>
  );
};

export default gridCard;
