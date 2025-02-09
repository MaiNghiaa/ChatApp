import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import AppContext from "antd/es/app/context";
import { AuthContext } from "../../Context/AuthProvider";
import { useFireStore } from "../../hook/useFireStore";
import { RoomContext, useRooms } from "../../Context/RoomContext";

const { Panel } = Collapse;

// Styled component để custom Collapse
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column; /* Sắp xếp theo chiều dọc */
  gap: 10px; /* Khoảng cách giữa Collapse và Button */
`;

const StyledCollapse = styled(Collapse)`
  && {
    background: transparent;
    border: none;
    .ant-collapse-item {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    .ant-collapse-header {
      color: white !important;
      font-weight: bold;
    }
    .ant-collapse-content-box {
      padding: 10px 20px !important;
      color: white !important;
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    align-self: center; /* Căn giữa button */
    color: white;
  }
`;

export default function RoomList() {
  const { rooms } = useContext(RoomContext);

  return (
    <StyledContainer>
      <StyledCollapse ghost defaultActiveKey={["1"]}>
        {rooms.map((room) => (
          <Panel header="Tiêu đề 1" key="1">
            <p>{room.name}</p>
          </Panel>
        ))}
        {/*         
        <Panel header="Tiêu đề 2" key="2">
          <p>Nội dung panel 2</p>
        </Panel>
        <Panel header="Tiêu đề 3" key="3">
          <p>Nội dung panel 3</p>
        </Panel> */}
      </StyledCollapse>
      <StyledButton type="text" icon={<PlusSquareOutlined />}>
        Thêm phòng
      </StyledButton>
    </StyledContainer>
  );
}
