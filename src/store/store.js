import {atom} from 'recoil'
import api from '../api';


//recoil
export const Login = atom({key: 'Login', default: false,});
export const allPosts = atom({key: 'allPosts', default: [],})


//tanstack query
export async function ReadData(page) {
  const res = await api.get(`post?page=${page}`)
  return res
}



