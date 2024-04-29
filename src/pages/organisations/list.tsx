import React from "react";
import { BaseRecord, useTranslate } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const OrganisationsList = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
        sorters: {
        initial: [
            {
            field: "nom",
            order: "asc",
            },
        ],
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="nom"
                    title={translate("organisations")}
                />
                <Table.Column
                    dataIndex="type"
                    title={translate("type")}
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