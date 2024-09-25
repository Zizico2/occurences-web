export const runtime = "edge";

import { redirect } from "next/navigation";

export default async function Home() {
	redirect("/map");
}
