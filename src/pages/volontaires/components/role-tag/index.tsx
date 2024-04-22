import React, { FC } from "react";

import { CrownOutlined, UserOutlined } from "@ant-design/icons";
import { Tag, TagProps } from "antd";

type Props = {
  role: string;
};

export const RoleTag: FC<Props> = ({ role }) => {
  const variants: Record<string, { color: TagProps["color"]; icon: React.ReactNode }> = {
    VISITEUR: {
      color: "green",
      icon: <UserOutlined />,
    },
    VOLONTAIRE: {
      color: "gold",
      icon: <UserOutlined />,
    },
    ORGANISATION: {
      color: "blue",
      icon: <UserOutlined />,
    },
    ADMIN: {
      color: "red",
      icon: <CrownOutlined />,
    },
  };

  const text = role.toLowerCase(); // Pas besoin de remplacer '_' ici car les valeurs de role ne contiennent pas de soulignement.

  return (
    <Tag
      style={{
        textTransform: "capitalize",
      }}
      color={variants[role.toUpperCase()].color}
      icon={variants[role.toUpperCase()].icon}
    >
      {text}
    </Tag>
  );
};