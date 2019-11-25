import React from 'react'

function NameList() {
    const name =['Bruce', 'Clark', 'Diana']
    return (
        <div>
            {
                name.map(name=><h2>{name}</h2>)
            }
        </div>
    )
}

export default NameList
