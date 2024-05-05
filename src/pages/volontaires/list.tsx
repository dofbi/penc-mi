import React from "react";
import { BaseRecord, useTranslate } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    ImageField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const VolontaireList = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
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
    });

    return (
        <List>
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
                />
                <Table.Column
                    dataIndex={["organisations"]}
                    title={translate("Organisation")}
                    render={(value) => (value?.nom)}
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
