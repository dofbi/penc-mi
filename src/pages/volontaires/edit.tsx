import React from "react";
import { Edit, useForm, useSelect, getValueFromEvent } from "@refinedev/antd";
import { Form, Input, Upload, Select } from "antd";
import { useTranslate } from "@refinedev/core";

export const VolontaireEdit = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const volontairesData = queryResult?.data?.data;

    const { selectProps: typesVolontaireSelectProps } = useSelect({
        resource: "types_volontaire",
        defaultValue: volontairesData?.types_volontaire,
        optionLabel: "nom",
        optionValue: "nom",
        sorters: [
            {
            field: "nom",
            order: "asc",
            },
        ],
    });

    const { selectProps: organisationSelectProps } = useSelect({
        resource: "organisations",
        defaultValue: volontairesData?.organisation,
        optionLabel: "nom",
        optionValue: "id",
        sorters: [
            {
            field: "nom",
            order: "asc",
            },
        ],
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("Prénom Nom")}
                    name={["full_name"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("email")}
                    name={["email"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input readOnly disabled/>
                </Form.Item>
                <Form.Item label={translate("Photo")}>
                    <Form.Item
                        name="avatar_url"
                        getValueProps={(value) => ({
                            fileList: [{ url: value, name: value, uid: value }],
                        })}
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Upload.Dragger
                            listType="picture"
                            beforeUpload={() => false}
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label={translate("Rôle")}
                    name={["role"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("Volontaire")}
                    name={"types_volontaire"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...typesVolontaireSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("Organisation")}
                    name={"organisation"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...organisationSelectProps} />
                </Form.Item>
            </Form>
        </Edit>
    );
};