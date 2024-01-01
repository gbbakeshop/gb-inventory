async function n(a){return(await axios.post("/api/get_branch_account",a)).data}async function s(){return(await axios.get("/api/get_all_account")).data}export{s as a,n as g};
