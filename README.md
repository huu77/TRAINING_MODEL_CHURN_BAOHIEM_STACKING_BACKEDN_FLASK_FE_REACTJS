# Model training với mô hình stacking của ensemble learning.
I. Code training model.
- Link: https://colab.research.google.com/drive/14rf0JXXz_DRY8OyZKhrJVRX1wdK5gwrG

II. Các bước cài đặt backend.
- Tham khảo trong flask/doc.txt
### Bước 1: Tạo môi trường ảo
python -m venv venv

### Bước 2: Kích hoạt môi trường ảo
### Trên Windows
venv\Scripts\activate
### Trên macOS và Linux
source venv/bin/activate
### Bước 3: Chạy cài các thư viện 
pip install -r requirements.txt
### Bước 4: Chạy backend flask:
flask run -> chạy trên port 5000

III. Các bước chạy FE.

### Bước 1: Cài đặt môi trường npm, yarn.
### Bước 2: cd my-project
### Bước 3: Cài đặt các thư viện:
yarn  
### Bước 4: Khởi động FE:
yarn dev -> chạy trên port 5371
