import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Tooltip, Form } from "antd";
import React from "react";
import styled from "styled-components";
import Message from "./Message";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header-infor {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header-title {
    margin: 0;
    font-weight: bold;
  }

  .header-description {
    font-size: 12px;
    color: gray;
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  max-height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MessageListStyled = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: 100%;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0px;
  border: 1px solid rgb(230, 230, 230);

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header-infor">
          <p className="header-title">Room 1</p>
          <span className="header-description">Đây là room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            Mời
          </Button>
          <Avatar.Group size="small" count={4}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="Xin chào"
            photoURL={null}
            createdAt={1111111}
            displayName="User 1"
          />
          <Message
            text="Bạn khỏe không?"
            photoURL={null}
            createdAt={1111111}
            displayName="User 2"
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input placeholder="Nhập tin nhắn..." />
          </Form.Item>
          <Button type="primary">Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}
