import React from "react";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { useTranslate } from "@refinedev/core";
import {v4 as uuidv4} from 'uuid';

export const OrganisationsCreate = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult, onFinish } = useForm();

    let uuid = uuidv4();

    const handleOnFinish = (values: any) => {
        onFinish({
          ...values,
          id: uuid
        });

    };

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical" onFinish={handleOnFinish}>
                <Form.Item
                    label={translate("organisations")}
                    name={["nom"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("type")}
                    name={["type"]}
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
