Enter file contents here// import noProjectImage from "../assets/sample.png";
import Button from "./Button.jsx";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 w-2/3 text-center">
      {/* <img src={noProjectImage}/> */}
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
