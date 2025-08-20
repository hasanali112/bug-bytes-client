export interface IArticle {
  _id: string;
  title: string;
  category: string;
  type: string;
  imageUrl: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
