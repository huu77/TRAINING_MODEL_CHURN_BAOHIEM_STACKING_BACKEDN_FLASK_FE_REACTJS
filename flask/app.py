import joblib
import numpy as np
import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from Lable import converToValue

app = Flask(__name__)
load_dotenv()
app = Flask(__name__)
CORS(app)

# Tải mô hình từ file
model_path = 'super_learner_model.pkl'
if not os.path.isfile(model_path):
    raise FileNotFoundError(f"Mô hình không được tìm thấy tại {model_path}")
model = joblib.load(model_path)
print('Mô hình đã được tải từ file super_learner_model.pkl')
# Tải scaler từ file
scaler_path = 'scaler.pkl'
if not os.path.isfile(scaler_path):
    raise FileNotFoundError(f'Scaler không được tìm thấy tại {scaler_path}')
scaler = joblib.load(scaler_path)
print('Scaler đã được tải từ file scaler.pkl')

@app.route('/', methods=['POST'])
def home():
    try:
        # Nhận dữ liệu từ yêu cầu POST
        data = request.get_json()
        conver_data = [
            data.get('Claim_Reason', 'Travel'),  # 'Travel' là giá trị mặc định
            data.get('Data_confidentiality', 'Low'),  # 'Low' là giá trị mặc định
            data.get('Claim_Amount', 377),  # 377 là giá trị mặc định
            data.get('Category_Premium', 4794),  # 4794 là giá trị mặc định
            data.get('Premium_Amount_Ratio', 0),  # 0.0786399666249478 là giá trị mặc định
            data.get('Claim_Request_output', 'No'),  # 'No' là giá trị mặc định
            data.get('BMI', 21) 
        ]
        
        # Chuyển đổi dữ liệu đầu vào thành các giá trị one-hot và giá trị số
        claim_reason_one_hot, data_confidentiality_one_hot, claim_request_output_one_hot = converToValue(
            conver_data[0], conver_data[1], conver_data[5]
        )
        
        # Tạo mảng kết quả kết hợp các giá trị one-hot và các giá trị số khác
        result_array = np.concatenate((
            claim_reason_one_hot, 
            data_confidentiality_one_hot, 
            claim_request_output_one_hot,
            [conver_data[2], conver_data[3], conver_data[4], conver_data[6]]
        ))
        
        # Chuyển đổi dữ liệu thành dạng số và chuẩn hóa các cột cần thiết
        result_array = np.array(result_array).reshape(1, -1).astype(float)
        columns_to_scale = [10, 11, 13]
         # Đảm bảo rằng scaler chỉ áp dụng cho cột chính xác
        if len(columns_to_scale) > 0 and result_array.shape[1] > max(columns_to_scale):
            result_array[:, columns_to_scale] = scaler.transform(result_array[:, columns_to_scale])
        
        # Dự đoán bằng mô hình đã tải
        prediction = model.predict(result_array)
        
        # Chuyển đổi dự đoán thành một giá trị đơn lẻ nếu cần
        result_list = int(prediction[0])
        
        return jsonify({"predict": result_list})
    
    except ValueError as ve:
        return jsonify({'error': f'ValueError: {str(ve)}'}), 400
    except TypeError as te:
        return jsonify({'error': f'TypeError: {str(te)}'}), 400
    except Exception as e:
        return jsonify({'error': f'Error: {str(e)}'}), 500




if __name__ == '__main__':
    app.run(debug=True)
