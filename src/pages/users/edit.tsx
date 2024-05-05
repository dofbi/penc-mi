import { useState, useEffect } from 'react';
import { Edit, useForm, useSelect, getValueFromEvent } from "@refinedev/antd";
import { Form, Input, Upload, Select } from "antd";
import { useTranslate } from "@refinedev/core";
import useAvatarUpload from '../../utility/useAvatarUpload';

export const UserEdit = () => {
    const translate = useTranslate();
    const { uploadAvatar, uploading } = useAvatarUpload();
    const [uploadUrl, setUploadUrl] = useState<string | null>(null);

    const { formProps, saveButtonProps, queryResult, onFinish } = useForm();

    const volontairesData = queryResult?.data?.data;

    useEffect(() => {
        setUploadUrl(volontairesData?.avatar_url || "");
    }, []);

    const { selectProps: typesVolontaireSelectProps } = useSelect({
        resource: "types_volontaire",
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
        optionLabel: "nom",
        optionValue: "id",
        sorters: [
            {
            field: "nom",
            order: "asc",
            },
        ],
    });

    const handleOnFinish = async (values: any) => {
        onFinish({
          ...values,
          avatar_url: uploadUrl
        });
    };

    const handleAvatarUpload = async (file: any) => {
        const uploadedUrl = await uploadAvatar(file);
        if (uploadedUrl) {
            setUploadUrl(uploadedUrl);
        }
    };

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical" onFinish={handleOnFinish}>
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
                            fileList: [{ url: uploadUrl, name: uploadUrl, uid: uploadUrl }],
                        })}
                        noStyle
                    >
                        <Upload.Dragger
                            listType="picture"
                            beforeUpload={(file) => {
                                handleAvatarUpload(file);
                                return false;
                            }}
                            onRemove={() => {
                                setUploadUrl(null);
                            }}
                            disabled={uploading}
                        >
                            <p className="ant-upload-text">
                                Drag and drop a file into this area
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