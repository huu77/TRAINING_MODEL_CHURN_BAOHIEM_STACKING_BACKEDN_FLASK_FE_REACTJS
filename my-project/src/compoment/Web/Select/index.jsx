
const Select = ({name,option,type,getAllValue, setAllValue}) => {
 

    const handleChange = (event) => {
        const value = option.filter((i)=>i.name===event.target.value )
      
        switch (type) {
            case 'Claim_Reason':
              return setAllValue({...getAllValue,Claim_Reason:value[0]?.name,Category_Premium:value[0]?.value}) ;
            case 'Data_confidentiality':
              return setAllValue({...getAllValue,Data_confidentiality:value[0]?.value});
            case 'Claim_Request_output':
              return  setAllValue({...getAllValue,Claim_Request_output: value[0]?.value});
            default:
              return setAllValue({...getAllValue})
          }
      };
  return (
    <select className="select select-bordered w-full max-w-xs" onChange={handleChange}
>
    <option disabled selected>{name}</option>
    {option.map((i,index)=>(

    <option key={index}>{i.name}</option>
    ))}
     
  </select>
  )
}

export default Select