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
import caretDown from "../../assets/chevron-down-icon.svg";
import caretUp from "../../assets/chevron-top-icon.svg";

const FileExplorer = () => {
  const [userFiles, setUserFiles] = useState<File[]>([]);
  const [dateSortOrder, setDateSortOrder] = useState<string>("DESC");
  const [nameSortOrder, setNameSortOrder] = useState<string>("ASC");
  const [sortedByDate, setSortedByDate] = useState<boolean>(false);
  const [sortedByName, setSortedByName] = useState<boolean>(false);
  const [filterTerm, setFilterTerm] = useState<string>("");

  useEffect(() => {
    if (filterTerm.length) {
      setUserFiles(fileData);
      setUserFiles((userFiles) =>
        userFiles.filter((file) =>
          file.name.toLowerCase().includes(filterTerm.toLowerCase())
        )
      );
    } else {
      setUserFiles(fileData);
    }
  }, [filterTerm]);

  const sortByDate = () => {
    if (dateSortOrder === "DESC") {
      sortByDescDate(userFiles, setUserFiles);
      setDateSortOrder("ASC");
      setSortedByDate(true);
      setSortedByName(false);
    } else if (dateSortOrder === "ASC") {
      sortByAscDate(userFiles, setUserFiles);
      setDateSortOrder("DESC");
      setSortedByDate(true);
      setSortedByName(false);
    }
  };

  const sortByName = () => {
    if (nameSortOrder === "ASC") {
      sortByAscName(userFiles, setUserFiles);
      setNameSortOrder("DESC");
      setSortedByName(true);
      setSortedByDate(false);
    } else if (nameSortOrder === "DESC") {
      sortByDescName(userFiles, setUserFiles);
      setNameSortOrder("ASC");
      setSortedByName(true);
      setSortedByDate(false);
    }
  };

  return (
    <main className="w-full p-5 border border-solid border-gray-400 rounded bg-sky-150">
      <img src="/bright-logo.png" className="h-14 -ml-2" alt="bright hr logo" />
      <div className="flex justify-between items-center py-2">
        <h1 className="font-bold text-xl">Welcome to your document store</h1>
        <input
          type="text"
          placeholder="Search by name..."
          className="px-2 h-8 w-30 bg-white text-gray-700 border border-gray-300 rounded leading-tight focus:outline-none focus:bg-white"
          onChange={(e) => setFilterTerm(e.target.value)}
        />
      </div>
      <div className="bg-white border border-gray-300 rounded p-3">
        <div className="flex justify-start items-center font-semibold border-b-2">
          <button
            onClick={sortByName}
            className="flex justify-between basis-1/3 px-1 items-center hover:bg-gray-100"
          >
            <p>Name</p>
            {sortedByName && nameSortOrder === "ASC" && (
              <img
                src={caretDown}
                alt="down arrow for sorting"
                className="w-2"
              />
            )}
            {sortedByName && nameSortOrder === "DESC" && (
              <img src={caretUp} alt="down arrow for sorting" className="w-2" />
            )}
          </button>
          <button
            onClick={sortByDate}
            className="flex justify-between basis-1/3 items-center border-r-2 border-l-2 px-1 hover:bg-gray-100"
          >
            <p className="">Last modified</p>
            {sortedByDate && dateSortOrder === "ASC" && (
              <img
                src={caretDown}
                alt="down arrow for sorting"
                className="w-2"
              />
            )}
            {sortedByDate && dateSortOrder === "DESC" && (
              <img src={caretUp} alt="down arrow for sorting" className="w-2" />
            )}
          </button>
          <div className="basis-1/3 items-center px-1">
            <p>Type</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <FileDisplay userFiles={userFiles} />
        </div>
      </div>
    </main>
  );
};

export default FileExplorer;
