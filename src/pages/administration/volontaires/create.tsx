import React from "react";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { useTranslate } from "@refinedev/core";

export const TypesDeVolontaireCreate = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm({
        meta: {
            idColumnName: "nom",
        }
    });

    return (
        <Create title={"Créer Type"} saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("Nom")}
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
