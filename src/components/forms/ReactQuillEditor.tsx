import { formats, modules } from "@/utils/quill-formats";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./reactQuillEditor.css";

const ReactQuillEditor = ({
  description,
  setDescription,
}: {
  description: string;
  setDescription: (value: string) => void;
}) => {
  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      placeholder="Escribe algo increíble..."
      className="quill__editor"
      value={description}
      onChange={setDescription}
    />
  );
};

export default ReactQuillEditor;
