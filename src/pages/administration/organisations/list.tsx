import React from "react";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { useTable, List, EditButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const OrganisationList = () => {
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
        <List title={"Types d'Organisations"} >
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="nom"
                    title={translate("nom")}
                />
                <Table.Column
                    title={translate("table.actions")}
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.nom}
                            />

                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.nom}
                                meta={{idColumnName: "nom"}}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
