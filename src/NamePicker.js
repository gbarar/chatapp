import {useState} from 'react'

function NamePicker(){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState('')

    function keyPressed(e){
        if(e.key==="Enter"){
            setShowInput(false)
        }
    }

    if (showInput) {
        return <div className="name-picker">
            <input className="picker-input" value={username}
                onChange={e=> setUsername(e.target.value)}
                onKeyPress={keyPressed}
            />
            <button className="ok-button" onClick={()=>setShowInput(false)}>
                OK
            </button>
        </div>
    }

    return <div className="name-picker">
        <div className="username">{username}</div>
        <button className="edit-button"  onClick={()=>setShowInput(true)}>
            EDIT
        </button>
    </div>
}

export default NamePicker
