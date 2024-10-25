import { UserAgent } from "@/views/userAgent";
import { headers } from "next/headers";

const UserAgentPage = () => {
	const userAgent = headers().get("user-agent") || "No user agent";

	return <UserAgent userAgent={userAgent} />;
};

export default UserAgentPage;
