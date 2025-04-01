### Minh Chung

1. Tạo tệp docker-compose.yml
   ![alt text](image.png)

2 Chạy container

```
docker-compose up -d
```

![alt text](image-1.png)

3 Xem

```
docker ps
```

![alt text](image-2.png)
4 Kết nối MySQL

```
docker exec -it mysql_container mysql -u user -p
```

![alt text](image-3.png)

5 Show Database Thành công
![alt text](image-4.png)
