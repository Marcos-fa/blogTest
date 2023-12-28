import {create} from 'zustand';
import {IStore} from 'interfaces/stores/IAppStore';

const AppStore = create<IStore>(set => ({
  count: 0,
  inc: () => set(state => ({count: state.count + 1})),
  dec: () => set(state => ({count: state.count - 1})),
}));

export default AppStore;
