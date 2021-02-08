import {useState} from 'react'

function NamePicker(props){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState(
        localStorage.getItem('username') || ''
    )

    
    function save(){
        props.saveName(username)
        setShowInput(false)
        localStorage.setItem('username',username)
    }
    
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
            <button className="ok-button" onClick={save}>
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
