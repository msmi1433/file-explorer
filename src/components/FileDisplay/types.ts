export interface File {
  type: string;
  name: string;
  lastModified: string;
  files?: File[];
}
