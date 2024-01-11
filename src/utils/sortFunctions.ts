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
