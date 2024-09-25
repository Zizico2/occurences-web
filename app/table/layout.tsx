import type * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<DashboardLayout>
			<PageContainer title={""} breadCrumbs={[]}>
				{props.children}
			</PageContainer>
		</DashboardLayout>
	);
}
