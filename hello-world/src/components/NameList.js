import React from 'react'

function NameList() {
    const name =['Bruce', 'Clark', 'Diana']
    const nameList= name.map(name =><h2>{name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
