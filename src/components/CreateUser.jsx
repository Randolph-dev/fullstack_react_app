import {useState} from "react"
import axios from "axios";

const CreateUser = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs((values) => ({...values, [name]: value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8005/api/', inputs)
            // console.log(inputs)
    };

  return (
    <div>
        <h2>CreateUser</h2>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" name="name" onChange={handleChange} />
            <br />
            <label>Email: </label>
            <input type="text" name="email" onChange={handleChange}/>
            <br />
            <label>Mobile: </label>
            <input type="text" name="mobile" onChange={handleChange}/>
            <br />
            <button>Save</button>
        </form>
    </div>
  )
};

export default CreateUser