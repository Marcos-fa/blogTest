export interface IPost {
  title: string;
  author: string;
  content: string;
  date: Date;
}

export interface IFullPost extends IPost {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ISearch {
  text: string;
  setText: (text: string) => void;
  data: IFullPost[];
  filteredData: IFullPost[];
  setFilteredData: (filteredData: IFullPost[]) => void;
}

export interface IStore {
  isConnected: boolean;
  posts: IFullPost[];
  postSelected: IFullPost;
  setPosts: (posts: IFullPost[]) => void;
  addPost: (post: IFullPost) => void;
  setIsConnected: (isConnected: boolean) => void;
  setPostSelected: (post: IFullPost) => void;
}
