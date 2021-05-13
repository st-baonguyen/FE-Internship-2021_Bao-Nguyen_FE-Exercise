#### Server-side rendering (SSR)
>Phần lớn logic được xử lý ở phía server 

- Khi người dùng vào một trang web, browser sẽ gửi GET request đến web server.
- Web server nhận request, đọc dữ liệu từ database.
- Web server render HTML, trả về cho browser để hiển thị cho người dùng.

**Tính chất**
- Xử lý logic (validation, phân quyền), logic để routing, logic để render đều ở phía server.

**Ưu điểm**
- SEO tốt.
- Initial nhanh, dễ otpimize vì toàn bộ dữ liệu được xử lý ở server.

**Nhược điểm**
- Mỗi lần chuyển trang, website sẽ bị load lại.
- Nặng server vì phải xử lý nhiều logic và dữ liệu.
- Tốn băng thông vì server phải gửi nhiều dữ liệu thừa và bị trùng (header, footer, ...)
- Tương tác không tốt vì refresh, render lại nhiều lần.

#### Client-side rendering (CSR)
>Ứng dụng nằm trong 1 page duy nhất.
Việc render HTML, CSS sẽ được thực hiện ở phía client.

**Tính chất**
- Xử lý logic đơn giản (validation, filter, sorting ...) được thực hiện ở phía client.
- Routing và render data 95% là ở phía client.
- Logic phức tạp(phân quyền, authenticate ...) vẫn nằm ở phía server.

**Ưu điểm** 
- Page chỉ load một lần duy nhất
- Giảm tải cho server khi chuyển logic sang phía client.
- Giảm băng thông khi chỉ lấy data cần thiết.
- Tăng trải nghiệm người dùng khi page không load lại nhiều.

**Nhược điểm** 
- SEO không tốt.

#### Single Page Application (SPA):
>- Là một ứng dụng web hay một website mà ở đó tất cả các thao tác của người dùng chỉ diễn ra trên 1 trang duy nhất, tất cả các cấu trúc của trang web (HTML) được load sẵn 1 lần và sẽ không load lại ngay cả khi chuyển trang.
>- Cách thức hoạt động dựa trên CSR
>- Tốc độ xử lý của SPA nhanh multi page website vì chỉ render lại những gì cần thay đổi chứ không tải lại hết 1 trang.

**Ưu điểm**
- Load 1 lần cho từng file HTML, CSS, JS.
- Hạn chế truy vấn đến server.
- Tăng trải nghiệm người dùng.
- Giảm thiểu thời gian phát triển và chi phí (tính kế thừa, sử dụng component).
- Trải nghiệm mobile tốt hơn.

**Nhược điểm**
- SEO không tốt.
- Content không có độ chi tiết cao.
- Trình duyệt phải xử lý nhiều.

#### Multi Page Applications (MPA):
>Hoạt động dựa trên SSR.

**Ưu điểm**
- SEO tốt, phù hợp với những trang tập trung vào văn bản như tin tức, blog ...
- Tải trang ban đầu nhanh.

**Nhược điểm**
- Tải trang chậm 
- Vì tất cả việc xử lý ở phía server nên cần đảm bảo server đủ mạnh
- Trải nghiệm người dùng không tốt
#### Progressive Web App (PWA):
>Là các Web App, ứng dụng các tính năng hiện đại của các trình duyệt, giúp cho thiết bị Mobile có thể nâng cấp chúng tương đương với những ứng dụng thuần, hay ta quen gọi là ứng dụng native.

**Ưu điểm**
- Responsive: Giao diện tương thích với kích thước của màn hình thiết bị.
- App-like feel: Trải nghiệm Web gần giống với trải nghiệm App.
- Offline support: sử dụng bộ nhớ của thiết bị để cung cấp trải nghiệm offline.
- Re-engaging: Đẩy thông báo (notification), giúp người dùng khám phá lại ứng dụng - một khi được cài đặt.
- Discoverable: Các công cụ tìm kiếm và việc tối ưu hoá SEO có thể mang nhiều người dùng đến với ứng dụng của bạn hơn.
- Fresh: Ứng dụng tự động cập nhật một khi online.
- Safe: Ứng dụng sử dụng HTTPS
- Progressive: Ứng dụng hoạt động trên mọi thiết bị, ngay cả các thiết bị cũ, mặc dù có thể chúng có ít tính năng hơn.
- Linkable: Dễ dàng để chia sẻ, kết nối đến tới ứng dụng chỉ với đường dẫn URL
- Khả năng offline
- Tốc độ và hiệu năng tốt hơn nhiều so với website
- Bảo mật tốt
- Thêm vào Home Screen
- Bounce rates tốt hơn
- Lắp đầy khoản cách giữa ứng dụng di động và website

**Nhược điểm**
- Hỗ trợ trình duyệt hạn chế
- Native API access hạn chế
- Không vào App Store được
- Không phải mọi PWA hiện nay đều dùng link cho cấu trúc page của họ, xây dựng PWA với tabs không link được, và như vậy không thể được search engine tìm ra
