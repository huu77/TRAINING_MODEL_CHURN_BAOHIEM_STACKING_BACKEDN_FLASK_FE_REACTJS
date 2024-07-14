from sklearn.preprocessing import LabelEncoder
import numpy as np

def index_to_one_hot(index, num_classes):
    one_hot = np.zeros(num_classes)  # Tạo mảng toàn số 0
    one_hot[index] = 1.0  # Đặt giá trị tại chỉ số tương ứng thành 1.0
    return one_hot  # Trả về toàn bộ mảng one-hot

def converToValue(claim_reason_value, data_confidentiality_value, claim_request_output_value):
    # Định nghĩa các nhãn
    claim_reason_labels = ["Travel", "Medical", "Other", "Phone"]
    data_confidentiality_labels = ["Very low", "Low", "Medium", "High"]
    claim_request_output_labels = ["No", "Yes"]

    # Khởi tạo LabelEncoder cho từng cột
    claim_reason_encoder = LabelEncoder().fit(claim_reason_labels)
    data_confidentiality_encoder = LabelEncoder().fit(data_confidentiality_labels)
    claim_request_output_encoder = LabelEncoder().fit(claim_request_output_labels)

    # Chuyển đổi các giá trị chữ thành số
    claim_reason_encoded = claim_reason_encoder.transform([claim_reason_value])[0]
    data_confidentiality_encoded = data_confidentiality_encoder.transform([data_confidentiality_value])[0]
    claim_request_output_encoded = claim_request_output_encoder.transform([claim_request_output_value])[0]

    # Chuyển đổi thành mã hóa one-hot
    claim_reason_one_hot = index_to_one_hot(claim_reason_encoded, len(claim_reason_labels))
    data_confidentiality_one_hot = index_to_one_hot(data_confidentiality_encoded, len(data_confidentiality_labels))
    claim_request_output_one_hot = index_to_one_hot(claim_request_output_encoded, len(claim_request_output_labels))

    return claim_reason_one_hot, data_confidentiality_one_hot, claim_request_output_one_hot

# # Ví dụ sử dụng
# arr = converToValue('Travel', 'Medium', 'Yes')
 