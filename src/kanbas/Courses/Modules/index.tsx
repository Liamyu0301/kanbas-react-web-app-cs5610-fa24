import React from "react";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { FaPlus } from "react-icons/fa6";

import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <BsGripVertical className="me-2 fs-3" />
            <span>Week 1</span>

            <div className="d-flex align-items-center ms-auto">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginTop: "0.2px" }}>
                  <GreenCheckmark />
                </div>
                <FaPlus className="me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 ">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <BsGripVertical className="me-2 fs-3" />
            <span> Week 2 </span>

            <div className="d-flex align-items-center ms-auto">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginTop: "0.2px" }}>
                  <GreenCheckmark />
                </div>
                <FaPlus />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
