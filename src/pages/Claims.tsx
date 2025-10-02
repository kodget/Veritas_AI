import Button from "../components/common/Button";
import Search from "../components/common/Search";
import Header from "../components/layouts/Header";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

const Claims = () => {
  const { results } = useSelector((state: RootState) => state.search);
  return (
    <div className="w-full min-h-full">
      <div className="flex flex-row items-center justify-between p-6">
        <Header claim="All Claims" />
        <div className="flex flex-row items-center justify-between gap-8">
          <Search />
          <Button
            bgColor="bg-green-500"
            hoverColor="hover:bg-green-600"
            color="text-white"
            title="New Claim"
          />
        </div>
      </div>
      <div className="m-4 p-4 border shadow-2xl rounded-lg bg-transparent">
        {results.map((data) => (
          <div className="grid grid-cols-6 place-content-center place-items-center w-full p-2">
            <h1 className="text-white p-2 text-lg">{data.Claimant}</h1>
            <span className="text-gray-500">{data.ClaimID}</span>

            <span className="text-gray-500">{data.PolicyNumber}</span>
            <span className="text-white">{data.date}</span>

            <span className="">{data.status}</span>
            <div className="flex flex-row gap-2">
              <span className="text-white">{data.riskScore}</span>
              <div
                className={`w-[12%] bg-green-500 h-full rounded-xl ${data.riskBar} `}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Claims;
