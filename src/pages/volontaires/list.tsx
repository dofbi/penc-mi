import React from "react";
import { BaseRecord, useTranslate } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    ImageField,
    FilterDropdown,
    useSelect,
    SaveButton,
} from "@refinedev/antd";
import { Table, Space, Select, Form, Input, } from "antd";

export const VolontaireList = () => {
    const translate = useTranslate();
    const { tableProps, searchFormProps } = useTable({
        syncWithLocation: true,
        sorters: {
        initial: [
            {
            field: "full_name",
            order: "asc",
            },
        ],
        },
        meta: {
            select: "*, organisations(nom)",
        },
        onSearch: (values: any) => {
        return [
            {
            field: "full_name",
            operator: "contains",
            value: values?.full_name,
            },
        ];
        },
    });

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

    return (
        <List title={`Volontaires (${tableProps?.pagination && tableProps?.pagination?.total})`}>
            <Form {...searchFormProps} layout="inline">
                <Form.Item name="full_name">
                <Input placeholder="Rechercher volontaire" />
                </Form.Item>
                <SaveButton hideText onClick={searchFormProps.form?.submit} />
            </Form>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="full_name"
                    title={translate("Prénom Nom")}
                />
                <Table.Column
                    dataIndex={["avatar_url"]}
                    title={translate("Photo")}
                    render={(value: any) => (
                        <ImageField
                            style={{ maxWidth: "100px" }}
                            value={value}
                        />
                    )}
                />
                <Table.Column
                    dataIndex={["types_volontaire"]}
                    title={translate("Volontaires")}
                    filterDropdown={(props) => (
                    <FilterDropdown {...props}>
                        <Select
                            style={{ width: '150px' }}
                            
                            {...typesVolontaireSelectProps}/>
                        </FilterDropdown>
                    )}
                />
                <Table.Column
                    dataIndex={["organisation"]}
                    title={translate("Organisation")}
                    render={(_, record: BaseRecord) => (record?.organisations?.nom)}
                    filterDropdown={(props) => (
                    <FilterDropdown {...props}>
                        <Select
                            showSearch
                            style={{ width: 400 }}
                            placeholder="Rechercher pour sélectionner"
                            {...organisationSelectProps}/>
                        </FilterDropdown>
                    )}
                />
                <Table.Column
                    title={translate("table.actions")}
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
