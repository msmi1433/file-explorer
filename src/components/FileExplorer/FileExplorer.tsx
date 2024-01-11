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
    <main>
      <div className="">
        <h1 className="font-bold">Your Documents</h1>
        <div className="flex flex-col gap-2">
          <FileDisplay userFiles={userFiles} />
        </div>
      </div>
    </main>
  );
};

export default FileExplorer;
