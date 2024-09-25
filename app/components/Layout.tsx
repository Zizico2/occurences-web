"use client";

import type * as React from "react";
import { AppProvider } from "@toolpad/core/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import MapIcon from "@mui/icons-material/Map";
import type { Navigation } from "@toolpad/core";
import theme from "../../theme";
import { APIProvider } from "@vis.gl/react-google-maps";
import { TableRows } from "@mui/icons-material";

const NAVIGATION: Navigation = [
	{
		segment: "map",
		title: "Map",
		icon: <MapIcon />,
	},
	{
		segment: "table",
		title: "Table",
		icon: <TableRows />,
	},
];

const BRANDING = {
	title: "Wildfires",
};

export default function RootLayout(props: {
	googleMapsApiKey: string;
	children: React.ReactNode;
}) {
	return (
		<APIProvider apiKey={props.googleMapsApiKey}>
			<html
				lang="en"
				data-toolpad-color-scheme="light"
				suppressHydrationWarning
			>
				<body>
					<AppRouterCacheProvider options={{ enableCssLayer: true }}>
						<AppProvider
							navigation={NAVIGATION}
							branding={BRANDING}
							theme={theme}
						>
							{props.children}
						</AppProvider>
					</AppRouterCacheProvider>
				</body>
			</html>
		</APIProvider>
	);
}
