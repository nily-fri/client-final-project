import React from "react";
import MemberDataComp from "./MemberData";
import { useSelector } from "react-redux";

const AllMemebrsComp = () => {
	const storeData = useSelector((state) => state.members);

	return (
		<div>
			{storeData.members.map((item, index) => {
				return <MemberDataComp memberData={item} key={index} />;
			})}
		</div>
	);
};

export default AllMemebrsComp;
