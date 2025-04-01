# Sử dụng Node.js phiên bản 18
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["node", "server.js"]
