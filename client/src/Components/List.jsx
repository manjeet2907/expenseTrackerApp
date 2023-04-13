import React from "react";
import { default as api } from "../store/apiSlice";
import Transaction from "./SubComponents/Transaction";

const List = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  console.log("transaction data", data);
  let Transactions;

  if (isFetching) {
    Transactions = <div> Fetching Data</div>;
  } else if (isSuccess) {
    Transactions = data.map((category, i) => (
      <Transaction key={i} category={category} />
    ));
  } else if (isError) {
    Transactions = <div>Error Fetching</div>;
  }
  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {Transactions}
    </div>
  );
};

export default List;

// function Transaction({ category, handler }) {
//   if (!category) return null;
//   return (
//     <div
//       className='item flex justify-center bg-gray-50 py-2 rounded-r'
//       style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}>
//       <button className='px-3' onClick={handler}>
//         <box-icon
//           data-id={category._id ?? ""}
//           color={category.color ?? "#e5e5e5"}
//           size='15px'
//           name='trash'></box-icon>
//       </button>
//       <span className='block w-full'>{category.name ?? ""}</span>
//     </div>
//   );
// }
