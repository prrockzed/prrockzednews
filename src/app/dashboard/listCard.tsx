import { Avatar, Card } from "antd";
import { AnyMxRecord } from "dns";

const { Meta } = Card;

const listCard = ({ news }: any) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <a className="no-underline" href={news.url} target="_blank">
        <Card hoverable>
          {news.urlToImage ? (
            <Meta
              avatar={
                <Avatar
                  shape="square"
                  size={{ md: 140, lg: 140, xl: 140, xxl: 140 }}
                  src={news.urlToImage}
                />
              }
              title={news.title}
              description={news.description}
            />
          ) : (
            <Meta title={news.title} description={news.description} />
          )}
        </Card>
      </a>
    </div>
  );
};

export default listCard;
