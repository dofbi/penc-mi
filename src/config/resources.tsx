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
    list: "/",
    edit: "/volontaires/edit/:id",
    show: "/volontaires/show/:id",
    meta: {
      label: "Volontaires",
      canDelete: true
    },
  },
  {
    name: "organisations",
    list: "/organisations",
    create: "/organisations/create",
    edit: "/organisations/edit/:id",
    show: "/organisations/show/:id",
    meta: {
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
    meta: {
      label: "Volontaires",
      parent: "administration",
      canDelete: true,
    },
  },
  {
    name: "types_organisation",
    list: "/administration/organisations",
    create: "/administration/organisations/create",
    edit: "/administration/organisations/edit/:id",
    meta: {
      label: "Organisations",
      parent: "administration",
      canDelete: true,
    },
  },
];
