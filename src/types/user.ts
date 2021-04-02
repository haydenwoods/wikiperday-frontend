import { Article } from "@/types/article";

export type UserArticle = {
  _id: string;
  createdAt: string;
  article: Article;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  friends: Array<User>;
  incomingFriendRequests: Array<User>;
  outgoingFriendRequests: Array<User>;
  articles: Array<UserArticle>;
};
