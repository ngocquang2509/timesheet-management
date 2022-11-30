export const USDtoVND = (props: any) => {
    const convert = (usd: number) => {
        return usd * 23632
    }

    const handleChange = (e: any) => {
        const usd = e.target.value
        const vnd = convert(usd)
        props.onHandleChange({usd, vnd})
    }

    return (
        <>
        <span>USD</span>
        <input type="text" onChange={handleChange} value={props.value}/>
        </>
    )
}