import React, { useState } from "react";
import Select from "./Select";
import Range from "./Range";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import predictApi from "../../api";
import Table from "./Table";
const option1 = [
  { name: "Medical", value: 14390 },
  { name: "Other", value: 399 },
  { name: "Phone", value: 1875 },
  { name: "Travel", value: 4794 },
];

const option2 = [
  { name: "High", value: "High" },
  { name: "Very low", value: "Very low" },
  { name: "Medium", value: "Medium" },
  { name: "Low", value: "Low" },
];

const option3 = [
  { name: "No", value: "No" },
  { name: "Yes", value: "Yes" },
];
const option4 = [
  {
    name: "Số tiền yêu cầu bồi thường của khách hàng",
    min: 218,
    max: 1440,
    type: "Claim_Amount",
  },
  {
    name: "Tỷ lệ giữa phí bảo hiểm và số tiền yêu cầu bồi thường",
    min: 0,
    max: 100,
    type: "Premium_Amount_Ratio",
  },
  { name: "Chỉ số khối cơ thể BMI", min: 18, max: 28, type: "BMI" },
];
const Types = [
  { name: "Lý do yêu cầu", option: option1, type: "Claim_Reason" },
  { name: "Bảo mật dữ liệu", option: option2, type: "Data_confidentiality" },
  {
    name: "Tỷ lệ giữa phí bảo hiểm và số tiền yêu cầu bồi thường",
    option: option3,
    type: "Claim_Request_output",
  },
];
const Web = () => {
  const [getAllValue, setAllValue] = useState({
    Claim_Reason: null,
    Data_confidentiality: null,
    Claim_Amount: null,
    Category_Premium: null,
    Premium_Amount_Ratio: null,
    Claim_Request_output: null,
    BMI: null,
  });
  const handleClick = async () => {
    let isCheck = false;

    // Dùng for...of để đồng bộ hóa việc kiểm tra giá trị
    for (const [key, value] of Object.entries(getAllValue)) {
      if (value === null) {
        isCheck = true;
      }
    }

    if (isCheck) {
      toast.error(`Bạn chưa chọn 1 số trường!`);
    } else {
      const rs = await predictApi(getAllValue);
      if (rs.predict === 1) {
        toast.error("Rời bỏ dịch vụ bảo hiểm");
      } else {
        toast.success("Tiếp tục sử dụng dịch vụ bảo hiểm");
      }
    }
  };

  return (
    <div className="w-[1360px] h-full flex   items-start justify-center gap-20">
      <ToastContainer />
      <div className="w-80 h-full flex flex-col   gap-4">
        {Types.map((i, index) => (
          <Select
            key={index}
            name={i.name}
            option={i.option}
            type={i.type}
            setAllValue={setAllValue}
            getAllValue={getAllValue}
          />
        ))}
        {option4.map((i, index) => (
          <Range
            key={index}
            name={i.name}
            min={i.min}
            max={i.max}
            type={i.type}
            setAllValue={setAllValue}
            getAllValue={getAllValue}
          />
        ))}

        <div className="w-80">
          <button className="btn btn-outline w-full" onClick={handleClick}>
            Predict
          </button>
        </div>
      </div>
      <div>
        <Table setAllValue={setAllValue} />
      </div>
    </div>
  );
};

export default Web;
