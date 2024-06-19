import Repo from '@/app/components/Repo'
import React, { Suspense } from 'react'

const RepoDetailed = ({ params: { name } }) => {
    console.log(name)
    return (
        <div>
            <h1>Repo Detailed</h1>
            <Suspense fallback={<div>Loading repo .....</div>}>
                <Repo name={name} />
            </Suspense>
        </div>
    )
}

export default RepoDetailed