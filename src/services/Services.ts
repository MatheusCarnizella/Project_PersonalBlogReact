import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const login = async (url: any, data: any, setData: any) => {
    const resposta = await api.post(url, data);
    setData(resposta.data.token);
}

export const registerUser = async (url: any, data: any, setData: any) => {
    const resposta = await api.post(url, data);
    setData(resposta.data);
}