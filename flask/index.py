import joblib
import numpy as np

# Tải lại mô hình và scaler để kiểm tra
model = joblib.load('super_learner_model.pkl')
scaler = joblib.load('scaler.pkl')

# Tạo dữ liệu mẫu
sample_data = np.array([[0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, -1.15482459, -1.16118918, 0.10773333, -0.63352419]])

# Kiểm tra dự đoán
print(model.predict(sample_data))
 
