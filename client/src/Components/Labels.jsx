import React from "react";
import { default as api } from "../store/apiSlice";
import LabelComponent from "./SubComponents/LabelComponent";
import { getLabels } from "../helpers/helper";

const Labels = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

  let Transactions;

  if (isFetching) {
    Transactions = <div> Fetching Data</div>;
  } else if (isSuccess) {
    Transactions = getLabels(data, "type").map((v, i) => (
      <LabelComponent key={i} data={v}></LabelComponent>
    ));
  } else if (isError) {
    Transactions = <div>Error Fetching</div>;
  }
  return <>{Transactions}</>;
};

export default Labels;

// function LabelComponent({ data }) {
//   if (!data) return <></>;
//   return (
//     <div className='labels flex justify-between'>
//       <div className='flex gap-2'>
//         <div
//           className='w-2 h-2 rounded py-3'
//           style={{ background: data.color ?? "#f9c74f" }}></div>
//         <h3 className='text-md'>{data.type ?? ""}</h3>
//       </div>
//       <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
//     </div>
//   );
// }
