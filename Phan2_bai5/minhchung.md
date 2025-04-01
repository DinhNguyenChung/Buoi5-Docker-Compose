1. Tạo một file docker-compose.yml
   ![alt text](image.png)

2. Chạy Docker Compose

![alt text](image-1.png)

3. Kiểm tra Redis
   ![alt text](image-2.png)
4. Kết nối tới Redis

```
docker exec -it redis_container redis-cli
```

![alt text](image-3.png)

nhập PING để kiểm tra
![alt text](image-4.png)