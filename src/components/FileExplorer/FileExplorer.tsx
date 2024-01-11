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
      <div>
        <h1 className="font-bold">Your Documents</h1>
        <div className="flex gap-16 w-2/3 font-semibold">
          <p className="basis-1/5">Name</p>
          <p className="basis-1/6">Last modified</p>
          <p>Kind</p>
        </div>
        <div className="flex flex-col gap-2">
          <FileDisplay userFiles={userFiles} />
        </div>
      </div>
    </main>
  );
};

export default FileExplorer;
