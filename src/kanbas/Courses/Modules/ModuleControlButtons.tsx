import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Importing the Plus icon
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />

      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
