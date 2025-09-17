npm create vite@latest my-react-app


cd my-react-app
npm install
npm run dev


npm create vite@latest my-react-app

Khi Vite hỏi Select a framework, đó là bạn đang chọn ecosystem để học & phát triển web.

So sánh nhanh các framework (cho người mới):

Vanilla → chỉ HTML, CSS, JS thuần. Dùng để học căn bản hoặc demo nhỏ.

Vue → dễ học, cú pháp gần HTML, cộng đồng lớn. Hợp với dự án nhỏ → vừa.

React → phổ biến nhất, tài liệu & tutorial nhiều nhất, nhiều việc làm. Dùng component JSX.

Preact → nhẹ hơn React, nhưng API tương tự. Chủ yếu cho dự án nhỏ/tối ưu performance.

Lit → gọn, tập trung vào Web Components.

Svelte → học dễ, viết ít code, build rất nhanh. Nhưng ecosystem nhỏ hơn React/Vue.

Solid → mới, nhanh, reactive mạnh.

Qwik → mới, tập trung vào tối ưu performance, chưa phổ biến.

Angular → mạnh, nhiều tính năng built-in, nhưng học khó hơn (nặng framework).

Marko → còn khá ít người dùng.

Others → để tự setup framework khác.

✅ Nếu mới bắt đầu học:

React → dễ tìm tutorial, có việc làm nhiều, ecosystem lớn nhất.

Vue → cú pháp trực quan, dễ hơn React với người mới HTML/CSS/JS.

👉 Nhưng nếu mục tiêu của bạn là làm blog, web cá nhân, và học cái phổ biến nhất để dễ chuyển sang nâng cao → chọn React.





Trong React + Vite, bạn không chạy trực tiếp index.html bằng cách double click như với file HTML thuần, vì:

React code nằm trong .jsx → cần Vite (hoặc Webpack) biên dịch.

index.html chỉ là “template gốc”, script chính là main.jsx (hoặc main.tsx) sẽ được Vite inject.

🔧 Cách chạy đúng

Trong thư mục project (nơi có package.json), mở terminal và chạy:

npm run dev


👉 Vite sẽ khởi động dev server (thường ở http://localhost:5173/).

Mở trình duyệt → nhập địa chỉ http://localhost:5173/
→ Lúc này index.html sẽ được Vite phục vụ, và main.jsx sẽ chạy để render React app.

⚠️ Nếu bạn “mở trực tiếp” index.html bằng trình duyệt

Ví dụ: file:///C:/Users/.../index.html

React sẽ không chạy, vì đường dẫn module type="module" (/src/main.jsx) không load được khi mở trực tiếp.

Kết quả là bạn chỉ thấy một trang trắng, hoặc lỗi trong console.

✅ Tóm lại

Không chạy trực tiếp index.html

Luôn dùng npm run dev → vào link localhost mà Vite cung cấp.