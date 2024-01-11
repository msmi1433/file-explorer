import { useEffect, useState } from "react";
import fileData from "../../../data/file-structure.json";
import FileDisplay from "../FileDisplay/FileDisplay";
import { File } from "../FileDisplay/types";

const FileExplorer = () => {
  const [userFiles, setUserFiles] = useState<File[]>([]);

  useEffect(() => {
    setUserFiles(fileData);
  }, []);

  return (
    <section>
      <FileDisplay userFiles={userFiles} />
    </section>
  );
};

export default FileExplorer;
