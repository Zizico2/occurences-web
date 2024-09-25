"use client";

import type * as React from "react";
import {
	DataGrid,
	type GridColDef,
	type GridRenderCellParams,
	type GridValidRowModel,
} from "@mui/x-data-grid";
import PlaceIcon from "@mui/icons-material/Place";
import { IconButton } from "@mui/material";
import type { Fires } from "../table/page";

const link: React.FC<GridRenderCellParams<GridValidRowModel, string>> = (
	params,
) => {
	return (
		<>
			<IconButton
				href={`https://www.google.pt/maps/search/${params.value}`}
				target="_blank"
				rel="noreferrer"
			>
				<PlaceIcon />
			</IconButton>
		</>
	);
};

export default function Datagrid({ fires }: { fires: Fires }) {
	const rows = [];
	for (const val of fires.occurences) {
		const elem: GridValidRowModel = {
			id: rows.length + 1,
			col1: `${val.location.latitude},${val.location.longitude}`,
			col2: val.nature,
		};
		rows.push(elem);
	}

	const columns: GridColDef[] = [
		{
			field: "col1",
			type: "actions",
			renderCell: link,
		},
		{ field: "col2", headerName: "Natureza", width: 200 },
	];

	return (
		<>
			<DataGrid rows={rows} columns={columns} hideFooter />
		</>
	);
}
