**Bài tập 2**:

##### - Git là gì ?

**Git** là phần mềm quản lý mã nguồn phân tán được phát triển bởi Linus Torvalds vào năm 2005, ban đầu dành cho việc phát triển nhân Linux. Hiện nay, Git trở thành một trong các phần mềm quản lý mã nguồn phổ biến nhất. Git là phần mềm mã nguồn mở được phân phối theo giấy phép công cộng GPL2

##### - Repository là gì? Có mấy loại repository?

**Repository** là một cấu trúc dữ liệu giúp lưu trữ metadata cho một tập hợp các file hoặc cấu trúc thư mục

**Có hai loại repository**

1. Local repository
2. Global repository

##### - Làm thế nào để add 1 file vào stage? Làm thế nào để add tất cả các file vào stage?

Add 1 file vào stage: **git add <filename>**
Add tất cả các file vào stage: **git add .**

##### - Sự khác nhau giữa lệnh `git commit -m "message"` và `git commit -am "message"`?

**git commit -m "message"**: Phải add trước mới có thể commit
**git commit -am "message"**: Vừa add vừa commit, không cần add trước khi commit
