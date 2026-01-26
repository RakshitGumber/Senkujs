export interface FileNode {
  path: string;
  content: string;
}

export type FileGraph = Map<string, FileNode>;
