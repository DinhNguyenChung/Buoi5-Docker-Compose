## Bài tập 5: Multi-tier Voting App

1. Cấu trúc
   phan3_bai5/
   ├── docker-compose.yml
   ├── vote/
   │ └── app.py
   │ └── requirements.txt
   ├── result/
   │ └── server.js
   │ └── package.json
   ├── worker/
   │ └── Worker.java
   │ └── Dockerfile

2. docker-compose.yml
   ![alt text](image.png)
3. vote/app.py
   ![alt text](image-1.png)
4. vote/requirements.txt
   ![alt text](image-2.png)
5. DockerFile
   ![alt text](image-3.png)
6. result/server.js
   ![alt text](image-4.png)
7. result/package.json
   ![alt text](image-6.png)
8. DockerFile trong result
   ![alt text](image-5.png)
9. worker/Worker.java
   ![alt text](image-7.png)
10. worker/Dockerfile
    ![alt text](image-8.png)

11. Tạo bảng trong Postgres (khi container chạy lần đầu)

```
docker exec -it <db_container_id> psql -U postgres -d votes
```

    Tạo bảng:
    ```
      CREATE TABLE votes (
        id SERIAL PRIMARY KEY,
        vote TEXT NOT NULL
        );
    ```

12. Chạy toàn bộ hệ thống

```
docker-compose up --build -d
```

13. Truy cập ứng dụng
    Giao diện Vote (Flask): http://localhost:5000

        Kết quả (Node.js): http://localhost:5001
