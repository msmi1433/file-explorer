import { useEffect, useState } from "react";
import fileData from "../../../data/file-structure.json";
import FileDisplay from "../FileDisplay/FileDisplay";
import { File } from "../FileDisplay/types";
import {
  sortByDescDate,
  sortByAscDate,
  sortByAscName,
  sortByDescName,
} from "../../utils/sortFunctions";

const FileExplorer = () => {
  const [userFiles, setUserFiles] = useState<File[]>([]);
  const [dateSortOrder, setDateSortOrder] = useState("DESC");
  const [nameSortOrder, setNameSortOrder] = useState("ASC");

  useEffect(() => {
    setUserFiles(fileData);
  }, []);

  const sortByDate = () => {
    if (dateSortOrder === "DESC") {
      sortByDescDate(userFiles, setUserFiles);
      setDateSortOrder("ASC");
    } else if (dateSortOrder === "ASC") {
      sortByAscDate(userFiles, setUserFiles);
      setDateSortOrder("DESC");
    }
  };

  const sortByName = () => {
    if (nameSortOrder === "ASC") {
      sortByAscName(userFiles, setUserFiles);
      setNameSortOrder("DESC");
    } else if (nameSortOrder === "DESC") {
      sortByDescName(userFiles, setUserFiles);
      setNameSortOrder("ASC");
    }
  };

  return (
    <main>
      <div>
        <h1 className="font-bold">Your Documents</h1>
        <div className="flex gap-16 w-2/3 font-semibold">
          <button onClick={sortByName} className="basis-1/5">
            Name
          </button>
          <button onClick={sortByDate} className="basis-1/6">
            Last modified
          </button>
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
