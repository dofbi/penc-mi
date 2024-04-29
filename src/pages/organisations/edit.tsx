import React from "react";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { useTranslate, useSelect } from "@refinedev/core";

interface IOrganisation {
  nom: string;
}

export const OrganisationsEdit = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const organisationsData = queryResult?.data?.data;

    const { options } = useSelect<IOrganisation>({
        resource: "types_organisation",
        optionLabel: "nom",
        optionValue: "nom",
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
                    label={translate("id")}
                    name={["id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input readOnly disabled />
                </Form.Item>
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
                <Form.Item
                    label={translate("type")}
                    name={["type"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <select>
                        {options?.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                </Form.Item>
            </Form>
        </Edit>
    );
};
