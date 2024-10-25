"use client";

import { BackToHome } from "@/components/backToHome/backToHome";

export const UserAgent = ({ userAgent }: { userAgent: string }) => {
	return (
		<div>
			<BackToHome />
			<div className="flex font-mono font-semibold text-sm">
				<div className="border p-2">UserAgent</div>
				<div className="border p-2">{userAgent}</div>
			</div>
		</div>
	);
};
