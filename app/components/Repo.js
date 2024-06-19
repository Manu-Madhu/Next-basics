import React from 'react'
const getData = async (name) => {
    await new Promise((resolve) => setTimeout(resolve,3000))
    const data = await fetch(`https://api.github.com/repos/Manu-Madhu/${name}`);

    const result = await data.json();
    return result
}

const Repo = async ({name}) => {
    const data = await getData(name);
    console.log(data)
    return (
        <>
            <div>
               <h1>{data?.name}</h1>
            </div>
        </>
    )
}

export default Repo