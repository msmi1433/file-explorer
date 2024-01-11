export const sortByAscDate = (files: File[], stateSetter: Function) => {
  files.sort(
    (a, b) =>
      new Date(a.lastModified).valueOf() - new Date(b.lastModified).valueOf()
  );
  stateSetter(files);
};
