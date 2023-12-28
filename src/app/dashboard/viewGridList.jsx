"use client";

import { useContext, useState } from "react";
import { Button, Row } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { MyContext } from "./myContext";

export function ViewGridList() {
  const { text } = useContext(MyContext);
  const setText = useContext(MyContext).setText;

  const toggle = () => {
    if (text == "") {
      setText("A");
    } else {
      setText("");
    }
  };

  return (
    <div>
      {text == "" ? (
        <>
          <Button
            size="large"
            onClick={toggle}
            icon={<UnorderedListOutlined style={{ fontSize: "1.5rem" }} />}
          />
        </>
      ) : (
        <>
          <Button
            size="large"
            onClick={toggle}
            icon={<AppstoreOutlined style={{ fontSize: "1.5rem" }} />}
          />
        </>
      )}
    </div>
  );
}
