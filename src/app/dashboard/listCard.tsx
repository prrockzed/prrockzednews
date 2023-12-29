import { Avatar, Card } from "antd";

const { Meta } = Card;

const listCard = ({ news }: any) => {
  return (
    <div>
      {news.map((article: any, index: number) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <a className="no-underline" href={article.url} target="_blank">
            <Card hoverable>
              {article.urlToImage ? (
                <Meta
                  avatar={
                    <Avatar
                      shape="square"
                      size={{ md: 140, lg: 140, xl: 140, xxl: 140 }}
                      src={article.urlToImage}
                    />
                  }
                  title={article.title}
                  description={article.description}
                />
              ) : (
                <Meta title={article.title} description={article.description} />
              )}
            </Card>
          </a>
        </div>
      ))}
    </div>
  );
};

export default listCard;
