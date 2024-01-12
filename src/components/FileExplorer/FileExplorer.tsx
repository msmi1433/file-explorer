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
        userFiles.filter((file) => file.name.includes(filterTerm))
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
    <main className="w-2/3 p-5 border border-solid border-gray-400">
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold pb-5 text-xl">Your Documents</h1>
          <input
            type="text"
            className="appearance-none block w-16 bg-gray-200 text-gray-700 border border-gray-400 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            onChange={(e) => setFilterTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-16 justify-start font-semibold">
          <div className="flex justify-between basis-1/4 py-2 items-center">
            <p onClick={sortByName}>Name</p>
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
          </div>
          <div className="flex justify-between basis-1/4 py-2 items-center">
            <p onClick={sortByDate} className="">
              Last modified
            </p>
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
          </div>
          <div className="basis-1/4 py-2 items-center">
            <p className="py-2 border-l border-gray-300">Kind</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <FileDisplay userFiles={userFiles} />
        </div>
      </div>
    </main>
  );
};

export default FileExplorer;
