import {create} from 'zustand';
import {IStore} from 'interfaces/stores/IAppStore';

const AppStore = create<IStore>(set => ({
  isConnected: true,
  posts: [] as IStore['posts'],
  postSelected: {} as IStore['postSelected'],
  setPosts: (posts: IStore['posts']) => set({posts: posts}),
  addPost: (post: IStore['posts'][0]) =>
    set(state => ({posts: [...state.posts, post]})),
  setIsConnected: (isConnected: boolean) => set({isConnected: isConnected}),
  setPostSelected: (post: IStore['postSelected']) => set({postSelected: post}),
}));

export default AppStore;
