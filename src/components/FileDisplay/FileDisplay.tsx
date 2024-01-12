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
            <div key={file.name} className="flex gap-16">
              <p id="file-name" className="basis-1/4">
                {file.name}
              </p>
              <p className="basis-1/4">{file.lastModified}</p>
              <p className="uppercase basis-1/4">{file.type}</p>
            </div>
          );
        } else {
          return (
            <>
              <div key={file.name} className="flex gap-16">
                <p
                  id="file-name"
                  className="basis-1/4"
                  onClick={() => toggleFolderExpansion(file.name)}
                >
                  {file.name}
                </p>
                <p className="basis-1/4">{file.lastModified}</p>
                <p className="capitalize">{file.type}</p>
              </div>
              {expandFolder[file.name] ? (
                <div className="flex flex-col gap-2">
                  <FileDisplay userFiles={file.files} />
                </div>
              ) : null}
            </>
          );
        }
      })}
    </>
  );
};

export default FileDisplay;
