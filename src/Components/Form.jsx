import { useState } from 'react'
import './Form.css'
const Form = () => {
    const [user, setUser] = useState({
        name: "Bala",
        age: 22,
        gender: "Male",
        isMarried: false,
        country: "India",
        bio: "Write something about yourself"
    });
    function changeHandler(e){
        const name=e.target.name;
        const value  =e.target.type==="checkbox"?e.target.checked:e.target.value;
        setUser({...user,[name]:value})
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Marital Status</td>
                        <td>{user.isMarried ? "Married" : "Not Married"}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{user.country}</td>
                    </tr>
                    <tr>
                        <td>BIO</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>
            <form className='form-data'>
                <input type="text" name="name" placeholder='Enter your Full name' value={user.name} onChange={changeHandler}/>
                <input type="text" name="age" placeholder='Enter your Age' value={user.age} onChange={changeHandler}/>
                <div className="gender">
                    <label htmlFor="male">
                        <input type="radio" onChange={changeHandler} name="gender" id="male"checked={user.gender=="Male"} value="Male" />Male</label>
                    <label htmlFor="female">
                        <input type="radio" onChange={changeHandler} name="gender" id="female"checked={user.gender=="Female"} value="Female" />Female</label>
                </div>
                <label htmlFor="isMarried">
                    <input type="checkbox" onChange={changeHandler} name="isMarried" id="isMarried" checked={user.isMarried}/>isMarried
                </label>
                <div>
                    <label htmlFor="country">Select Country: 
                        <select name="country" id="country" value={user.country} onChange={changeHandler}>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </label>
                </div>
                <textarea name="bio" id="bio" cols="30" rows="5" value={user.bio} onChange={changeHandler}/>

            </form>
        </>
    )
}

export default Form