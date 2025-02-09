import React from "react";
import { Row, Col, Button, Typography } from "antd";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { addDocument } from "../../firebase/Services";
export default function Login() {
  const { Title } = Typography;
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const handleFbLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const additionalUserInfo = getAdditionalUserInfo(result);
      const user = result.user;

      if (additionalUserInfo?.isNewUser) {
        console.log("New User");
        addDocument("users", {
          displayName: user.displayName || "",
          email: user.email || "",
          photoURL: user.photoURL || "",
          uid: user.uid,
          providerId: additionalUserInfo.providerId,
        });
      } else {
        console.log("Old User");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <Row justify={"center"} style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} Level={3}>
            Fun Chat
          </Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={handleFbLogin}
          >
            Đăng nhập bằng Facebook
          </Button>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Google
          </Button>
        </Col>
      </Row>
    </div>
  );
}
