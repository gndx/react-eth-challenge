import db from '../../data.json';
const URL = ''

export const getData = (req) => {
    const data = db.data;
    return data[req]
};
