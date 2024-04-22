import type { IResourceItem } from "@refinedev/core";

// import {
//   CalendarOutlined,
//   ContainerOutlined,
//   CrownOutlined,
//   DashboardOutlined,
//   ProjectOutlined,
//   ShopOutlined,
//   TeamOutlined,
// } from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "users",
    list: "/volontaires",
    meta: {
      label: "Volontaires",
      canDelete: true
    },
  },
  // {
  //   name: "categories",
  //   list: "/categories",
  //   create: "/categories/create",
  //   edit: "/categories/edit/:id",
  //   show: "/categories/show/:id",
  //   meta: {
  //     canDelete: true,
  //   },
  // },
];
