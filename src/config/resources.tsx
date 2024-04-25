import type { IResourceItem } from "@refinedev/core";

import {
  // CalendarOutlined,
  // ContainerOutlined,
  CrownOutlined,
  // DashboardOutlined,
  // ProjectOutlined,
  // ShopOutlined,
  // TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "users",
    list: "/volontaires",
    meta: {
      label: "Volontaires",
      canDelete: true
    },
  },
  {
    name: "administration",
    meta: {
      label: "Administration",
      icon: <CrownOutlined />,
    },
  },
  {
    name: "types_volontaire",
    list: "/administration/volontaires",
    create: "/administration/volontaires/create",
    edit: "/administration/volontaires/edit/:id",
    show: "/administration/volontaires/show/:id",
    meta: {
      label: "Types de volontaires",
      parent: "administration",
      canDelete: true,
    },
  },
];
