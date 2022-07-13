const getData = async (url)=>{
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
}

export {getData}