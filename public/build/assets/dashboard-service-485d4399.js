async function s(t){return(await axios.post("/api/get_total_records",t)).data}export{s as g};
