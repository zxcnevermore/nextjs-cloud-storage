import { User } from "./auth.dto";

export interface FileItem {
  id: number;
  filename: string;
  originalName: string;
  size: number;
  user: User;
  mimetype: string;
  deletedAt: string | null;
}
