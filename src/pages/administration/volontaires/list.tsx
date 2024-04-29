import React from "react";
import { BaseRecord, useTranslate, useDeleteButton } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const TypesDeVolontaireList = () => {
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
        <List title={"Types de Volontaires"}>
            <Table {...tableProps} rowKey="nom">
                <Table.Column
                    dataIndex="nom"
                    title={translate("Types")}
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