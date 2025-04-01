1. Tạo thư mục node-app
2. Tạo server.js
   ![alt text](image.png)
3. Tạo package.json và cài express

```
npm init -y
```

```
npm install express
```

4. Tạo file Dockerfile trong thư mục node-app với nội dung sau

![alt text](image-1.png)

5. Tạo file docker-compose.yml trong thư mục node-app với nội dung sau:
   ![alt text](image-2.png)
6. Chạy Ứng Dụng

```
docker-compose up -d --build
```

![alt text](image-3.png)

7. Kiểm Tra Ứng Dụng

Nếu chưa thành công hãy chạy lại:

```
docker-compose up -d
```

![alt text](image-4.png)

##### Kết quả

![alt text](image-5.png)
