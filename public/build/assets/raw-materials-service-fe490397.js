import{o as e}from"./app-13f09cc1.js";async function r(){return(await e.get("/api/get_all_raw_materials")).data}async function n(a){return(await e.post("/api/create_raw_materials",{data:a})).data}async function o(a){return(await e.delete("/api/delete_raw_materials/"+a)).data}async function i(a){return(await e.post("/api/update_raw_materials",{data:a})).data}export{n as c,o as d,r as g,i as u};