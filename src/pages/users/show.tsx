import React from "react";
import { useShow, useTranslate } from "@refinedev/core";
import {
    Show,
    TextField,
    EmailField,
    ImageField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const UserShow = () => {
    const translate = useTranslate();
    const { queryResult } = useShow({
        meta: {
            select: "*, types_volontaire(nom), organisations(nom)",
        }
    });
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("Prénom Nom")}</Title>
            <TextField value={record?.full_name} />
            <Title level={5}>{translate("Email")}</Title>
            <EmailField value={record?.email} />
            <Title level={5}>{translate("Photo")}</Title>
            <ImageField style={{ maxWidth: 200 }} value={record?.avatar_url} />
            <Title level={5}>{translate("Rôle")}</Title>
            <TextField value={record?.role} />
            <Title level={5}>
                {translate("Volontaire")}
            </Title>
            {record?.types_volontaire?.nom}
            <Title level={5}>{translate("Organisation")}</Title>
            {record?.organisations?.nom}
        </Show>
    );
};