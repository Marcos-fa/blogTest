import axios from 'axios';
import {IFullPost, IPost} from 'interfaces/stores/IAppStore';

// si quieres probarlo en tu celular fisico, cambia localhost por tu ip local
// const API_URL = 'http://localhost:3000'; // Descomenta si quieres correrlo localmente y comenta la linea 6-7
const API_URL =
  'https://36fb-2806-2f0-20c1-f35b-b53f-521d-1b68-5747.ngrok-free.app'; // Aqui puedes poner tu ruta de ngrok

export const getPosts = async (): Promise<IFullPost[]> => {
  try {
    const response = await axios.get(API_URL + '/api/getPosts');
    return response.data;
  } catch (error) {
    console.log('Error getting post s:', error);
    throw error;
  }
};

export const createPost = async (post: IPost): Promise<IPost> => {
  try {
    const response = await axios.post(API_URL + '/api/addPost', post);
    return response.data;
  } catch (error) {
    console.log('Error creating post :', error);
    throw error;
  }
};
