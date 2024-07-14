import React from 'react'
import data from '@data'
const Table = ({setAllValue}) => {
  const handleGetItem =(item)=>{
    setAllValue({ Claim_Reason: item.Claim_Reason,
      Data_confidentiality: item.Data_confidentiality,
      Claim_Amount: item.Claim_Amount,
      Category_Premium: item.Category_Premium,
      Premium_Amount_Ratio: item.Premium_Amount_Ratio,
      Claim_Request_output: item.Claim_Request_output,
      BMI: item.BMI,});
 
  }
  return (
    <div className="overflow-x-auto">
        <h1 className='w-full text-center font-bold '>Tham khảo dữ liệu có sẵn</h1>
    <table className="table table-xs">
      <thead>
        <tr>
        <th>#</th>
          <th>Tên khách hàng</th>
          <th>Địa chỉ khách hàng</th>
          <th>Tên công ty</th>
          <th>Lý do yêu cầu</th>
          <th>Bảo mật dữ liệu</th>
          <th>Số tiền yêu cầu bồi thường</th>
          <th>Phí bảo hiểm</th>
          <th>Phí bảo hiểm/số tiền yêu cầu bồi thường</th>
          <th>Chỉ số khối cơ thể BMI</th>
          <th>Kết quả yêu cầu bồi thường</th>
          <th>Kết quả</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
          <tr key={index} onClick={()=>handleGetItem(item)} className='cursor-pointer hover:bg-gray-100'>
            <th>{index + 1}</th>
            <td>{item.Customer_Name}</td>
            <td>{item.Customer_Address}</td>
            <td>{item.Company_Name}</td>
            <td>{item.Claim_Reason}</td>
            <td>{item.Data_confidentiality}</td>
            <td>{item.Claim_Amount}</td>
            <td>{item.Category_Premium}</td>
            <td>{item.Premium_Amount_Ratio*100}</td>
            <td>{item.BMI}</td>
            <td>{item.Claim_Request_output}</td>
            <td>{item.Churn}</td>
          </tr>
        ))}
      </tbody>
      
    </table>
  </div>
  )
}

export default Table