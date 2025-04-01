1. Tạo docker-compose
   ![alt text](image.png)
2. Chạy compose

```
docker-compose up -d
```

![alt text](image-1.png)

3. Kết nối vào MySQL trong container:

```
docker exec -it mysql_container mysql -u root -p
```

Password: rootpassword

![alt text](image-2.png)

4. Kiểm tra Docker Volumes
   ![alt text](image-3.png)

Xem chi tiết

```
docker volume inspect mysql_data
```
