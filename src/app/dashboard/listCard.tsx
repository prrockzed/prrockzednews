import { Avatar, Card } from "antd";

const { Meta } = Card;

const listCard = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Card hoverable>
        <Meta
          avatar={
            <Avatar
              shape="square"
              size={{ md: 140, lg: 140, xl: 140, xxl: 140 }}
              src="/cardImage.png"
            />
          }
          title="Sample card list view"
          description="Ad anim velit quis adipisicing commodo. Irure culpa dolore exercitation ad ullamco cupidatat. Quis dolor duis ad do. Est officia ea labore ea adipisicing id veniam nulla est labore reprehenderit mollit dolor amet. Enim velit excepteur exercitation pariatur esse eiusmod cupidatat. Ad ea nisi occaecat duis velit amet nostrud officia nulla irure ullamco ad nostrud. Dolore mollit non anim officia cupidatat magna cupidatat cupidatat laborum."
        />
      </Card>
    </div>
  );
};

export default listCard;
