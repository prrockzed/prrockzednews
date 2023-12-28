"use client";

import React from "react";
import { Button, Row } from "antd";
import GridCard from "./gridCard";
import ListCard from "./listCard";

function dashboard() {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <GridCard />
        <GridCard />
        <GridCard />
      </Row>

      <ListCard />
    </div>
  );
}

export default dashboard;
