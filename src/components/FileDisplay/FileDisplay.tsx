import { File } from "./types";

interface Props {
  userFiles: File[];
}

const FileDisplay: React.FC<Props> = ({ userFiles }) => {
  return (
    <>
      {userFiles.map((file) => {
        if (!file.files) {
          return (
            <li key={file.name}>
              <p>{file.name}</p>
              <p>{file.lastModified}</p>
              <p>{file.type}</p>
            </li>
          );
        } else {
          return (
            <li key={file.name}>
              <p>{file.name}</p>
              <FileDisplay userFiles={file.files} />
            </li>
          );
        }
      })}
    </>
  );
};

export default FileDisplay;
