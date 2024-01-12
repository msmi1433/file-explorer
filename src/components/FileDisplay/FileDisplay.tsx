import { File } from "./types";
import { useState } from "react";
import folderIcon from "../../assets/computer-folder-open-icon.svg";
import fileIcon from "../../assets/file-line-icon.svg";
import movIcon from "../../assets/video-file-icon.svg";
import caretDown from "../../assets/chevron-down-icon.svg";
import caretUp from "../../assets/chevron-top-icon.svg";

interface Props {
  userFiles: File[];
  insideFolder?: boolean;
}

const FileDisplay: React.FC<Props> = ({ userFiles, insideFolder = false }) => {
  const [expandFolder, setExpandFolder] = useState<{ [key: string]: boolean }>(
    {}
  );
  const isInsideFolder = insideFolder;
  const toggleFolderExpansion = (folderName: string) => {
    setExpandFolder({
      ...expandFolder,
      [folderName]: !expandFolder[folderName],
    });
  };

  return userFiles.length ? (
    <>
      {userFiles.map((file) => {
        if (!file.files) {
          return (
            <div key={file.name} className="flex items-center border-b pb-2">
              <div
                className={`basis-1/3 flex gap-2 px-1 ${
                  isInsideFolder ? "pl-4" : null
                }`}
              >
                <img
                  src={file.type === "mov" ? movIcon : fileIcon}
                  alt="icon representing the file's type"
                  className="w-3"
                />
                <p id="file-name">{file.name}</p>
              </div>
              <p className="basis-1/3 pl-1">{file.lastModified}</p>
              <p className="uppercase basis-1/3 px-1">{file.type}</p>
            </div>
          );
        } else {
          return (
            <>
              <div key={file.name} className="flex border-b pb-2">
                <button
                  onClick={() => toggleFolderExpansion(file.name)}
                  className="basis-1/3 flex gap-2 items-center px-1"
                >
                  <img
                    src={folderIcon}
                    alt="icon of a folder"
                    className="w-3"
                  />
                  <p id="file-name">{file.name}</p>
                  <img
                    src={expandFolder[file.name] ? caretDown : caretUp}
                    alt="arrow icon representing if folder is open or closed"
                    className="w-2"
                  />
                </button>
                <p className="basis-1/3 pl-1">{file.lastModified}</p>
                <p className="basis-1/3 capitalize px-1">{file.type}</p>
              </div>
              {expandFolder[file.name] ? (
                <div className="flex flex-col gap-2">
                  <FileDisplay userFiles={file.files} insideFolder={true} />
                </div>
              ) : null}
            </>
          );
        }
      })}
    </>
  ) : (
    <p className="w-full flex justify-center items-center">
      Sorry, no files found!
    </p>
  );
};

export default FileDisplay;
