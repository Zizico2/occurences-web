import type * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div style={{ height: "100vh" }}>
		<DashboardLayout>
			{props.children}
		</DashboardLayout>
		</div>
	);
}
