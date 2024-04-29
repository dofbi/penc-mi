import React from "react";
import { useShow, useTranslate } from "@refinedev/core";
import { Show, TagField, TextField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const OrganisationsShow = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("id")}</Title>
            <TextField value={record?.id} />
            <Title level={5}>{translate("nom")}</Title>
            <TextField value={record?.nom} />
            <Title level={5}>{translate("type")}</Title>
            <TextField value={record?.type} />
        </Show>
    );
};