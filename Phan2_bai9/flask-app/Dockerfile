# Chọn image Python chính thức
FROM python:3.9-slim

# Cài đặt các dependencies
WORKDIR /app

# Copy các file cần thiết vào container
COPY requirements.txt /app/

# Cài đặt các thư viện Python từ requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy toàn bộ mã nguồn vào container
COPY . /app/

# Mở cổng 5000 cho ứng dụng Flask
EXPOSE 5000

# Chạy ứng dụng Flask
CMD ["python", "app.py"]
