import Link from 'next/link';
import React from 'react'


const getDat = async () => {
  const repo = await fetch('https://api.github.com/users/Manu-Madhu/repos');
  
  await new Promise((resolve) => setTimeout(resolve,5000))

  const result = await repo.json();

  return result
}

const user = async () => {

  const data = await getDat();

  console.log(data)
  return (
    <div>
      <h1>My Repository</h1>
      <div>
        {
          data?.map((items) => (
            <div key={items?.id} className='bg-white my-2 text-black p-3 rounded-lg'>
              <Link href={`/user/${items.name}`}>
                <h1>{items?.name}</h1>
                <p>{items?.description}</p>
                <p>{items?.stargazers_count}</p>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default user