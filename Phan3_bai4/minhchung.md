## Bài tập 4: Prometheus + Grafana Monitoring với Docker Compose

1. Cấu trúc
   phan3_bai4/
   ├── docker-compose.yml
   ├── prometheus/
   │ └── prometheus.yml

2. prometheus/prometheus.yml
   ![alt text](image.png)

3. docker-compose.yml
   ![alt text](image-1.png)

4. Cài đặt Docker Metrics Exporter

```
docker run -d \
  -p 9323:9323 \
  --name cadvisor \
  --volume=/:/rootfs:ro \
  --volume=/var/run:/var/run:ro \
  --volume=/sys:/sys:ro \
  --volume=/var/lib/docker/:/var/lib/docker:ro \
  gcr.io/cadvisor/cadvisor:latest

```

![alt text](image-2.png)

5. Chạy

```
docker-compose up -d
```

![alt text](image-3.png)

6. Truy cập
   Prometheus: http://localhost:9090
   ![alt text](image-4.png)

Grafana: http://localhost:3000
→ Username: admin | Password: admin (mặc định lần đầu)
![alt text](image-5.png)

7. Cấu hình Grafana
   Đăng nhập vào Grafana.

   Add Data Source → Prometheus.

   URL: http://prometheus:9090.

   Save & Test.

   Import Dashboard (có thể dùng ID 1860 – Docker & system metrics).
