import React from "react";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { useTranslate } from "@refinedev/core";

export const TypesDeVolontaireEdit = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm({
        meta: {
            idColumnName: "nom",
        },
    });

    const typesDeVolontairesData = queryResult?.data?.data;

    return (
        <Edit saveButtonProps={saveButtonProps}>
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
