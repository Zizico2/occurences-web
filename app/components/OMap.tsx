"use client";
import * as React from "react";
import { Map as GMap, Marker } from "@vis.gl/react-google-maps";
import type { Fires } from "../queries";

export default function OMap({ fires }: { fires: Fires }) {
	const items = fires.occurences
		.filter((e) => e.nature === "Mato")
		.map((e, i) => {
			return (
				<Marker
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={i}
					label={e.occurenceStatus}
					position={{ lat: e.location.latitude, lng: e.location.longitude }}
				/>
			);
		});

	return (
		<GMap
			style={{ width: "100%", height: "100%" }}
			defaultCenter={{ lat: 39.599339, lng: -8.4365469 }}
			defaultZoom={6}
			gestureHandling={"greedy"}
		>
			{items}
		</GMap>
	);
}
