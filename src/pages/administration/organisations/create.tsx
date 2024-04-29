import React from "react";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { useTranslate } from "@refinedev/core";

export const OrganisationCreate = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    return (
        <Create title={"Créer Type"} saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("nom")}
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
        </Create>
    );
};
