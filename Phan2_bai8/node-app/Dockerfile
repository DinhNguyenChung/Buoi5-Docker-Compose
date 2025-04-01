# Sử dụng image Node.js chính thức
FROM node:14

# Tạo thư mục ứng dụng trong container
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy tất cả mã nguồn vào container
COPY . .

# Mở cổng 3000 cho ứng dụng Node.js
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "app.js"]
