import {
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space } from "antd";
import cn from "classnames";

import { Text } from "../../components";
import { AppIcon } from "../../components/app-icon"

import styles from "./settings.module.css";

export const VolontairesPage = () => {
  return (
    <div className="page-container">
      <Space
        size={16}
        style={{
          width: "100%",
          paddingBottom: "24px",
          borderBottom: "1px solid #D9D9D9",
        }}
      >
        <AppIcon width={96} height={96} />
        <Text style={{ fontSize: "32px", fontWeight: 700 }}>
          Collectif des Volontaires du Sénégal
        </Text>
      </Space>
      <Row
        gutter={[32, 32]}
        style={{
          marginTop: 32,
        }}
      >
        <Col
          xs={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 16 }}
        >
          <UsersTable />
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 8 }}
        >
          <CompanyInfo />
        </Col>
      </Row>
    </div>
  );
};

const UsersTable = () => {

  return (
    <Card
      bodyStyle={{ padding: 0 }}
      headStyle={{
        borderBottom: "1px solid #D9D9D9",
        marginBottom: "1px",
      }}
      title={
        <Space size="middle">
          <TeamOutlined />
          <Text>Volontaires</Text>
        </Space>
      }
      extra={
        <>
          <Text className="tertiary">Total : </Text>
          <Text strong>
            0
          </Text>
        </>
      }
    >
      Tables
    </Card>
  );
};

const companyInfo = [
  {
    label: "Addresse",
    value: "122, Rue 13xAvenue Cheikh Anta Diop, Fass Delorme, Dakar, Sénégal",
    icon: <EnvironmentOutlined className="tertiary" />,
  },
  {
    label: "Téléphone",
    value: "+221 77 512 35 00 / +221 77 517 48 78",
    icon: <PhoneOutlined className="tertiary" />,
  },
  {
    label: "Email",
    value: "volontariat@codevsn.org",
    icon: <MailOutlined className="tertiary" />,
  },
  {
    label: "Site web",
    value: "https://codevsn.org",
    icon: <GlobalOutlined className="tertiary" />,
  },
];

export const CompanyInfo = () => {
  return (
    <Card
      title={
        <Space>
          <ShopOutlined />
          <Text>Association</Text>
        </Space>
      }
      headStyle={{
        padding: "1rem",
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <div className={styles.list}>
        {companyInfo.map((item) => {
          return (
            <div key={item.label} className={styles.listItem}>
              <div>{item.icon}</div>
              <div className={styles.listItemContent}>
                <Text size="xs" className="tertiary">
                  {item.label}
                </Text>
                <Text className={cn(styles.listItemContent, "primary")}>
                  {item.value}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};