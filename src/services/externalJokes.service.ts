import axios from 'axios';
import logger from '../utils/logger';

const CHUCK_URL = process.env.CHUCK_API || 'https://api.chucknorris.io/jokes/random';
const DAD_URL = process.env.DAD_API || 'https://icanhazdadjoke.com/';

const axiosInstance = axios.create({
  timeout: 5000,
  headers: { Accept: 'application/json' }
});

export async function getChuckJoke(): Promise<string> {
  try {
    const res = await axiosInstance.get(CHUCK_URL);
    if (res?.data?.value) return res.data.value;
    throw new Error('Respuesta inválida de Chuck API');
  } catch (err: any) {
    logger.error('Error obteniendo Chuck joke: ' + (err.message || err));
    throw err;
  }
}

export async function getDadJoke(): Promise<string> {
  try {
    const res = await axiosInstance.get(DAD_URL, { headers: { Accept: 'application/json' } });
    if (res?.data?.joke) return res.data.joke;
    throw new Error('Respuesta inválida de Dad API');
  } catch (err: any) {
    logger.error('Error obteniendo Dad joke: ' + (err.message || err));
    throw err;
  }
}
