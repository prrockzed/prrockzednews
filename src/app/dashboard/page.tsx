"use client";

import React, { useState } from "react";
import { Button, Row } from "antd";
import GridCard from "./gridCard";
import ListCard from "./listCard";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";

function dashboard() {
  const [view, setView] = useState(false);

  return (
    <>
      <div
        className="flex justify-center space-x-4 border-solid border-4 border-sky-400 rounded-lg py-2"
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        {view ? (
          <>
            <Button
              size="large"
              onClick={() => setView(!view)}
              icon={<UnorderedListOutlined style={{ fontSize: "1.5rem" }} />}
            />
          </>
        ) : (
          <>
            <Button
              size="large"
              onClick={() => setView(!view)}
              icon={<AppstoreOutlined style={{ fontSize: "1.5rem" }} />}
            />
          </>
        )}
      </div>

      {view ? (
        <div>
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
      ) : (
        <div>
          <Row gutter={[20, 20]}>
            <GridCard />
            <GridCard />
            <GridCard />
          </Row>
        </div>
      )}
    </>
  );
}

export default dashboard;
