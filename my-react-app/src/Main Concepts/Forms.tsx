import { useState } from "react"

export const Form = () => {
    const [inputs, setInputs] = useState<{username: string, age: number}>({username: '', age: 0})
    const [selected, setSelected] = useState('')

    const handleInputChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log('messs');
    }

    const handleSelectChange = (e: any) => {
        setSelected(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>User name</label>
            <input type="text" name="username" value={inputs.username || ''} onChange={handleInputChange} />
            <label>Age</label>
            <input type="text" name="age" value={inputs.age || ''} onChange={handleInputChange}/>
            <label>Favourite food</label>
            <select value={selected} onChange={handleSelectChange}>
                <option value="pizza">Pizza</option>
                <option value="hanburger">Hamburger</option>
                <option value="noodle">Noodle</option>
                <option value="beef">Beef</option>
            </select>
        </form>
    )
}