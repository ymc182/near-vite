import { useNearContext } from "@/context/NearProvider";
import React from "react";

export default function LoginBtn() {
	const { modal } = useNearContext();
	return <button onClick={() => modal?.show()}>Connect</button>;
}
