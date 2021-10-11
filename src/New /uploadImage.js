import React, { useState } from 'react'
import ProgressBar from './ProcessBar'
import './New.css'
const UploadForm = () => {
    
    const [file, setFile] = useState(null)
    const [error,setError] =  useState(null)

    const types = ['image/jpeg','image/png']
    const changeHandler = (e) => {
        let selected = e.target.files[0]

        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }else {
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }
    return(
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                {error && <div className="error" style={{color:"red",marginTop:"5px",marginLeft:"56px"}}>{error}</div>}
                {file && <div style={{color:"green",marginTop:"5px",marginLeft:"5px"}}>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
export default UploadForm