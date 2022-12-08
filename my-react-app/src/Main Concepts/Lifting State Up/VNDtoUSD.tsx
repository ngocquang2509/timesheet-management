export const VNDtoUSD = (props: any) => {
    const convert = (vnd: number) => {
        return vnd/23632
    }

    const handleChange = (e: any) => {
        const vnd = e.target.value
        const usd = convert(vnd)
        props.onHandleChange({usd, vnd})
    }

    return (
        <>
        <span>VND</span>
        <input type="text" onChange={handleChange} value={props.value}/>
        </>
    )
}