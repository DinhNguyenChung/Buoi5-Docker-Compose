1. Tạo một file docker-compose.yml với nội dung sau:
   ![alt text](image.png)

2. Tạo ứng dụng Node.js
   ![alt text](image-1.png)
3. Chạy Docker Compose

```
docker-compose up -d
```

![alt text](image-2.png) 4. Truy cập Node js mở host:3001
![alt text](image-3.png) 5. Kiểm tra kết nối MySQL

```
docker exec -it mysql_container mysql -u root -p

```

Nhập mật khẩu rootpassword để kiếm tra testdb:

```
SHOW DATABASES;
USE testdb;

```

![alt text](image-4.png)

DỪng dịch khi không dùng

```
docker-compose down

```
