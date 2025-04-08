## Bài tập 3: Load Balancing với Nginx + Flask

1. Cấu trúc
   Phan3_bai3/
   ├── docker-compose.yml
   ├── flask_app/
   │ ├── app.py
   │ └── Dockerfile
   └── nginx/
   └── nginx.conf

2. flask_app/app.py
   ![alt text](image.png)
3. flask_app/Dockerfile

![alt text](image-1.png)

4. nginx/nginx.conf
   ![alt text](image-2.png)

5. docker-compose.yml
   ![alt text](image-3.png)

6. Chạy

```
docker-compose up --build
```

![alt text](image-5.png)

8. localhost:8080
   ![alt text](image-4.png)
