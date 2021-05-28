#### Sync (đồng bộ): là quá trình thực hiện các công việc(lệnh) theo thứ tự nhất định, phải hoàn thành công việc(lệnh) đang thực hiện xong mới được thực hiện công việc mới.<br>

#### Async (bất đồng bộ): Là một quá trình xử lý các công việc(lệnh) nhưng có thể xử lý nhiều việc cùng một lúc thay vì chờ một công việc(lệnh) xử lý xong.<br>

##### Các cách xử lí bất đồng bộ

**CallBack**<br>
Callback là một hàm được truyền như một tham số của một hàm khác và chờ để được gọi vào thực thi. Với một callback có thể đảm bảo rằng function B chỉ được gọi sau khi function A kết thúc.<br>

```Javascript

function doSomething (options, callback) {
    callback (options);
}
doSomething(options, callback);
```

Callback thực sự rất hữu ích trong các trường hợp đơn giản, tuy nhiên mỗi callback đều thêm một mức lồng nhau và khi có nhiều callback, đoạn code sẽ bắt đầu trở nên phức tạp rất nhanh. Và gây ra callback hell.
Bắt đầu từ ES6, JavaScript đã giới thiệu một số tính năng giúp chúng ta sử dụng đoạn mã không đồng bộ không liên quan đến việc sử dụng các callback,Để giải quyết vấn đề Callback Hell<br>
**Promises**<br>
Để giải quyết vấn đề Callback Hell, ES6 đã cung cấp Promse. Về khái niệm, Promise chính là "lời hứa" đại diện cho giá trị chưa tồn tại và giá trị đó sẽ được trả về vào một thời gian trong tương lai.<br>
Tạo một Promise:

```Javascript
let promise = new Promise((resolve, reject) => {
  // Asynchronous Code.<br/>
});
```

Promise sẽ nhận vào một hàm callback gồm 2 tham số như sau:

- `resolve`: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise chạy thành công.
- `reject`: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise có lỗi xảy ra.
  Promise cũng cung cấp cho chúng ta 2 phương thức để xử lý sau khi được thực hiện:
- `then()`: Dùng để xử lý sau khi Promise được thực hiện thành công (khi `resolve` được gọi).
- `catch()`: Dùng để xử lý sau khi Promise có bất kỳ lỗi nào đó (khi `reject` được gọi).
  **async/await**<br>
  Hãy tưởng tượng chúng ta muốn sử dụng một hàm **asynchronous** trong ứng dụng của mình và dựa vào output, chúng ta sẽ làm điều gì đó. Vì JavaScript là ngôn ngữ đơn luồng, non-blocking nên nó sẽ bỏ qua các hành động asynchronous để thực thi trong **run time environment** và lấy lại nó khi call stack trống.
  Vì ứng dụng của chúng ta phụ thuộc vào đầu ra của hàm **asynchronous**. Đó là lí do tại sao **async/await** hoạt động<br>
  Từ khóa `async` đảm bảo rằng hàm trả về một `promise` từ khóa `await` tạm dừng việc thực thi cho đến khi `promise` được giải quyết hoặc giải quyết xong. Nó chỉ là một cách tốt hơn để viế `promise` so với `Promise.then()`.

#### `Timeout`:

setTimeout(function timeout() {
console.log("Hello world!");
}, 4000);

console.log("Welcome to loupe.");

![](/async_sync/assets/step0.PNG);
Step1: hàm SetTimeout được thực thi

![](/async_sync/assets/2.PNG);
Step2: callback timeout() đang được chờ để thực hiện

![](/async_sync/assets/3.PNG);
Step3: Trong khi callback timeout() đang chờ thì hàm console.log("Welcome to loupe.")

![](/async_sync/assets/5.PNG);
Step4: hàm console.log("Welcome to loupe.") thực thi xong và callback timeout() vẫn đang chờ.

![](/async_sync/assets/6.PNG);
Step5: callback timeout() thực thi xong và được đưa vào hàng đợi.

![](/async_sync/assets/7.PNG);
Step6: callback timeout() được đưa vào ngăn xếp

![](/async_sync/assets/8.PNG);
Step7: callback timeout() được thực hiện, console.log("Hello world!")
