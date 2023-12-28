import axios from 'axios';
import {IFullPost, IPost} from 'interfaces/stores/IAppStore';

// const API_URL = 'http://localhost:3000'; // si quieres probarlo en tu celular, cambia localhost por tu ip local
const API_URL =
  'https://36fb-2806-2f0-20c1-f35b-b53f-521d-1b68-5747.ngrok-free.app'; // si quieres probarlo en tu celular, cambia localhost por tu ip local
// const API_URL = 'http://192.168.100.63:3000'; // si quieres probarlo en tu celular, cambia localhost por tu ip local

export const getPosts = async (): Promise<IFullPost[]> => {
  try {
    const response = await axios.get(API_URL + '/api/getPosts');
    return response.data;
  } catch (error) {
    console.error('Error getting post s:', error);
    throw error;
  }
};

export const createPost = async (post: IPost): Promise<IPost> => {
  try {
    const response = await axios.post(API_URL + '/api/addPost', post);
    return response.data;
  } catch (error) {
    console.error('Error creating post :', error);
    throw error;
  }
};
