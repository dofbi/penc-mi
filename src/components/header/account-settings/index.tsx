import {
  CloseOutlined
} from "@ant-design/icons";
import {
  Button,
  Drawer,
  Spin,
  Typography,
} from "antd";

import { CustomAvatar } from "../../custom-avatar";

import { Text } from "../../text";
import styles from "./index.module.css";

type Props = {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  userId: any;
};

export const AccountSettings = ({ opened, setOpened, userId }: Props) => {

  const closeModal = () => {
    setOpened(false);
  };

  const { name, avatar } =
    userId ?? {};

  return (
    <Drawer
      onClose={closeModal}
      open={opened}
      width={756}
      styles={{
        body: { padding: 0 },
        header: { display: "none" },
      }}
    >
      <div className={styles.header}>
        <Text strong>Paramètres du compte</Text>
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={() => closeModal()}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.name}>
          <CustomAvatar
            style={{
              marginRight: "1rem",
              flexShrink: 0,
              fontSize: "40px",
            }}
            size={96}
            src={avatar}
            name={name}
          />
          <Typography.Title
            level={3}
            style={{ padding: 0, margin: 0, width: "100%" }}
            className={styles.title}
          >
            {name}
          </Typography.Title>
        </div>
        
      </div>
    </Drawer>
  );
};
