import React from "react";
import { default as api } from "../../store/apiSlice";
import { BsFillTrashFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Transaction = ({ category }) => {
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  const handleClick = () => {};

  if (!category) return null;
  return (
    <div
      className='item flex justify-center bg-gray-50 py-2 rounded-r'
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}>
      <button className='px-3' onClick={(e) => handleClick(e)}>
        <IconContext.Provider
          value={{
            color: category.color ?? "#e5e5e5",
            className: "react-icons",
          }}>
          <BsFillTrashFill />
        </IconContext.Provider>
      </button>
      <span className='block w-full'>
        {category.name} -{category.amount}{" "}
      </span>
    </div>
  );
};

export default Transaction;

/* <box-icon
          data-id={category._id ?? ""}
          color={category.color ?? "#e5e5e5"}
          size='15px'
          name='trash'></box-icon> */
