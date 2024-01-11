import { File } from "./types";
import { useState } from "react";

interface Props {
  userFiles: File[];
}

const FileDisplay: React.FC<Props> = ({ userFiles }) => {
  const [expandFolder, setExpandFolder] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleFolderExpansion = (folderName: string) => {
    setExpandFolder({
      ...expandFolder,
      [folderName]: !expandFolder[folderName],
    });
  };

  return (
    <>
      {userFiles.map((file) => {
        if (!file.files) {
          return (
            <div key={file.name} className="flex gap-16 w-2/3">
              <p>{file.name}</p>
              <p>{file.lastModified}</p>
              <p>{file.type}</p>
            </div>
          );
        } else {
          return (
            <div key={file.name}>
              <p onClick={() => toggleFolderExpansion(file.name)}>
                {file.name}
              </p>
              {expandFolder[file.name] ? (
                <FileDisplay userFiles={file.files} />
              ) : null}
            </div>
          );
        }
      })}
    </>
  );
};

export default FileDisplay;
