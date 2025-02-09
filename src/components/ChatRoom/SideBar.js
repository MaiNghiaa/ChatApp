import { Col, Row } from "antd";
import React from "react";
import UserInfor from "./UserInfor";
import RoomList from "./RoomList";
import styled from "styled-components";

export default function SideBar() {
  const SidebarStyled = styled.div`
    background: #3f0e40;
    color: white;
    height: 100vh;
  `;
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <UserInfor />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SidebarStyled>
  );
}
