import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { SiStreamlit } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { VscGraph } from "react-icons/vsc";
import { LuBellRing } from "react-icons/lu";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </button>
        </div>
      </div>
      <br />
      {/* Complete on your own */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoHomeOutline className="me-2 fs-5" />
        Choose Home Page
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <SiStreamlit className="me-2 fs-5" />
        View Course Stream
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <GrAnnounce className="me-2 fs-5" />
        New Announcement
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <VscGraph className="me-2 fs-5" />
        New Analytics
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LuBellRing className="me-2 fs-5" />
        View Course Notifications
      </button>
      <br />
    </div>
  );
}