import{p as e}from"./app-d2b09770.js";async function r(){return(await e.get("/api/get_all_raw_materials")).data}async function n(a){return(await e.post("/api/create_raw_materials",{data:a})).data}async function i(a){return(await e.delete("/api/delete_raw_materials/"+a)).data}async function o(a){return(await e.post("/api/update_raw_materials",{data:a})).data}export{n as c,i as d,r as g,o as u};
