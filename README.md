# Tìm Tuyến Xe Buýt - TP.HCM

Ứng dụng web giúp người dùng tìm kiếm lộ trình xe buýt tối ưu nhất tại Thành phố Hồ Chí Minh.

## Mô tả dự án

Dự án này cung cấp bản đồ tương tác và giao diện tìm kiếm để điều hướng mạng lưới xe buýt của TP.HCM. Hệ thống sử dụng thuật toán Dijkstra để tính toán quãng đường ngắn nhất giữa các trạm dừng, dựa trên các tuyến xe và sự kết nối có sẵn.

## Các tính năng chính

- Ô tìm kiếm gợi ý để chọn trạm đi và trạm đến.
- Bản đồ tương tác sử dụng thư viện Leaflet.js.
- Tính toán lộ trình ngắn nhất bằng thuật toán Dijkstra.
- Thanh bên hiển thị gợi ý lộ trình và kết quả chi tiết.
- Thiết kế tương thích với các thiết bị di động (Responsive).
- Nút ẩn/hiện thanh bên và chú giải để tối ưu không gian bản đồ.

## Công nghệ sử dụng

- HTML5 và CSS3 (Vanilla CSS).
- JavaScript (ES6+).
- Leaflet.js để hiển thị bản đồ.
- Feather Icons cho các biểu tượng giao diện.
- Thuật toán Dijkstra tùy chỉnh cho việc tìm đường.

## Cấu trúc dự án

- `index.html`: Tệp tin chính chạy ứng dụng.
- `css/`: Chứa các tệp tin định dạng giao diện.
- `js/`: Chứa logic xử lý của ứng dụng.
  - `config/`: Dữ liệu về trạm dừng và các tuyến đường.
  - `core/`: Thuật toán tìm đường và logic xử lý lộ trình.
  - `ui/`: Xử lý giao diện bản đồ và kết quả hiển thị.
  - `main.js`: Tệp tin điều phối chính của ứng dụng.
- `public/`: Chứa các tài nguyên tĩnh khác.

## Hướng dẫn cài đặt và sử dụng

1. Tải về hoặc nhân bản (clone) kho mã nguồn này.
2. Mở tệp `index.html` bằng bất kỳ trình duyệt web hiện đại nào.
3. Không cần cài đặt server hay công cụ biên dịch để sử dụng cơ bản tại địa phương.

## Bản quyền

Dự án này được phát hành dưới giấy phép MIT. Xem tệp `LICENSE` để biết thêm chi tiết.

Phát triển bởi Gongcha.
Phiên bản: 2025.12.23
