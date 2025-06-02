import React from 'react'

const DocsDetail = async( {params}:{
    params:Promise<{slug: string[]}>
}) => {
    const {slug} = await params;
     if (slug?.length === 1) {        
            return (
                <div>
                    <h1>Docs Category: {slug[0]}</h1>
                    <p>Explore the {slug[0]} category documentation.</p>
                </div>
            )
        }else if (slug?.length === 2) {  
            return (
                <div>
                    <h1>Docs Topic: {slug[0]} - {slug[1]}</h1>
                    <p>Learn about {slug[1]} in the {slug[0]} category.</p>
                </div>
            )
        }

  return (
    <div>
      <h1>Docs Page</h1>
    </div>
  )
}

export default DocsDetail
