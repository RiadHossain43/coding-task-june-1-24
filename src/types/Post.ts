export interface Post {
  id: number;
  userId: number;
  title: string | "Untitled";
  body: string | "Unspecified";
}
