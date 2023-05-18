import axios from "axios"
import { ObjFormType } from "../Page/CreatePost/CreatePost"

const baseUrl = 'http://localhost:3001/posts'

export interface setPostsType {
    post: ObjFormType
}

export const setPosts = async (post: ObjFormType) => {
    try {
        const { data } = await axios.post(baseUrl, post)
        return data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}
