"use client";

import { Send } from "@mui/icons-material";

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div>
        <h3 className="text-sm font-bold tracking-wider text-gray-900">Đăng ký nhận bản tin</h3>
        <p className="text-sm text-gray-600">Nhận thông báo về ưu đãi và kiến thức sức khoẻ mới nhất</p>
      </div>

      <form className="relative flex w-full md:max-w-lg lg:max-w-xl">
        <input type="email" placeholder="email của bạn..." 
        className="w-full flex-1 rounded-full border border-teal-200 p-4 text-sm" />
        <button className="absolute right-1.5 top-1/2 -translate-1/2">
          <Send />
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
