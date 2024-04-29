import React from "react";
import { useShow, useTranslate, useOne } from "@refinedev/core";
import {
    Show,
    TagField,
    TextField,
    EmailField,
    ImageField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const VolontaireShow = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: typesVolontaireData, isLoading: typesVolontaireIsLoading } =
        useOne({
            resource: "types_volontaire",
            id: record?.types_volontaire || "",
            queryOptions: {
                enabled: !!record,
            },
            meta:{
                idColumnName: "nom"
            }
        });

    const { data: organisationData, isLoading: organisationIsLoading } = useOne(
        {
            resource: "organisations",
            id: record?.organisation || "",
            queryOptions: {
                enabled: !!record,
            },
        },
    );

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
            {typesVolontaireIsLoading ? (
                <>Loading...</>
            ) : (
                <>{typesVolontaireData?.data?.nom}</>
            )}
            <Title level={5}>{translate("Organisation")}</Title>
            {organisationIsLoading ? (
                <>Loading...</>
            ) : (
                <>
                    <>{organisationData?.data?.nom}</>
                </>
            )}
        </Show>
    );
};