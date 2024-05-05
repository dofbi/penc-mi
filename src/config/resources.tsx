import type { IResourceItem } from "@refinedev/core";

import {
  // CalendarOutlined,
  // ContainerOutlined,
  CrownOutlined,
  DashboardOutlined,
  // ProjectOutlined,
  // ShopOutlined,
  // TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "users",
    list: "/",
    edit: "/users/edit/:id",
    show: "/users/show/:id",
    meta: {
      label: "Tableau de bord",
      canDelete: true,
      icon: <DashboardOutlined/>
    },
  },
  {
    name: "volontaires",
    list: "/volontaires",
    create: "/volontaires/create",
    edit: "/volontaires/edit/:id",
    show: "/volontaires/show/:id",
    meta: {
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
