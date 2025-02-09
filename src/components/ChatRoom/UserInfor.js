import { Avatar, Button, Typography } from "antd";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../firebase/config";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../Context/AuthProvider";

export default function UserInfor() {
  const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgb(82, 38, 83);

    .username {
      color: white;
      margin-left: 5px;
    }
  `;

  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);

  return (
    <WrapperStyled>
      <div>
        {/* <Avatar src={photoURL}>{photoURL ? "" : ""}</Avatar> */}
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <Button>Đăng xuất</Button>
    </WrapperStyled>
  );
}
