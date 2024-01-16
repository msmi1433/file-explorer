import { File } from "../components/FileDisplay/types";

export const sortByAscDate = (files: File[], stateSetter: Function) => {
  const filesCopy = structuredClone(files);
  filesCopy.sort(
    (a, b) =>
      new Date(a.lastModified).valueOf() - new Date(b.lastModified).valueOf()
  );
  stateSetter(filesCopy);
};

export const sortByDescDate = (files: File[], stateSetter: Function) => {
  const filesCopy = structuredClone(files);
  filesCopy.sort(
    (a, b) =>
      new Date(a.lastModified).valueOf() - new Date(b.lastModified).valueOf()
  );
  stateSetter(filesCopy.reverse());
};

export const sortByAscName = (files: File[], stateSetter: Function) => {
  const filesCopy = structuredClone(files);
  filesCopy.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  stateSetter(filesCopy);
};

export const sortByDescName = (files: File[], stateSetter: Function) => {
  const filesCopy = structuredClone(files);
  filesCopy.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  stateSetter(filesCopy.reverse());
};
