import { fetchPeople } from './api'

const init = async () => {
    const data = await fetchPeople();
    console.log({data});
}


init();
