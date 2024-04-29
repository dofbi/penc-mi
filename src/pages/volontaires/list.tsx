import React from "react";
import { IResourceComponentsProps, BaseRecord, useTranslate } from "@refinedev/core";
import {
    useTable,
    EmailField,
    ImageField,
    EditButton,
    ShowButton,
    List
} from "@refinedev/antd";
import {
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space, Table } from "antd";
import cn from "classnames";

import { CustomAvatar, Text } from "../../components";
import { AppIcon } from "../../components/app-icon"

import { RoleTag } from "./components";
import styles from "./settings.module.css";

export const VolontairesPage = () => {

  return (
    <div className="page-container">
      <Space
        size={16}
        style={{
          width: "100%",
          paddingBottom: "20px",
          marginBottom: "20px",
          borderBottom: "1px solid #D9D9D9",
        }}
      >
        <AppIcon width={96} height={96} />
        <Text style={{ fontSize: "32px", fontWeight: 700 }}>
          Collectif des Volontaires du Sénégal
        </Text>
      </Space>
      <List>
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
      </List>
    </div>
  );
};

const UsersTable: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
    sorters: {
      initial: [
        {
          field: "full_name",
          order: "asc",
        },
      ],
    },
  });

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
            {tableProps?.pagination?.total}
          </Text>
        </>
      }
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="full_name"
          title="Prénom Nom"
          render={(_, record:any) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <CustomAvatar src={record?.avatar_url} name={record?.full_name} />
                <Text>{record?.full_name}</Text>
              </div>
            );
          }}
        />
          <Table.Column
              dataIndex={["types_volontaire"]}
              title="Volontaire"
          />
          <Table.Column
          dataIndex="role"
          title="Rôle"
          render={(_, record:any) => {
            return <RoleTag role={record?.role} />;
          }}
        />
        <Table.Column
            title={translate("table.actions")}
            dataIndex="actions"
            render={(_, record: BaseRecord) => (
                <Space>
                    <EditButton
                        hideText
                        size="small"
                        recordItemId={record.id}
                    />
                    <ShowButton
                        hideText
                        size="small"
                        recordItemId={record.id}
                    />
                </Space>
            )}
        />
      </Table>
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
