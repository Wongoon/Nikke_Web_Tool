const fetch = require("node-fetch");

async function test(){
    const res = await fetch("API URL",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                intl_open_id:"YOUR_ID",
                nikke_area_id:83
            })
        }
    );

    console.log(await res.text());
}

test();