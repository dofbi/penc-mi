import React from "react";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { useTranslate } from "@refinedev/core";

export const OrganisationEdit = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm({
        meta: {
            idColumnName: "nom",
        },
    });

    const typesDeVolontairesData = queryResult?.data?.data;

    return (
        <Edit title={"Modifier Type"} saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Nom"}
                    name={["nom"]}
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                <Input />
            </Form.Item>
            </Form>
        </Edit>
    );
};
