import React from "react";

const TopStudentCard = () => {
  return (
    <div className="flex flex-col w-[311px] h-[396px] bg-neutral-100 flex-shrink-0">
      <div className="w-full h-[305px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jt3E8Eb-6ek8HOlgBn4o48XeA5_3BgVYjS6o7EUKAkw-3vzdNDBpZDRlKvDFPDhDdoc&usqp=CAU"
          alt="image here"
          className="w-[311px] h-[305px] object-cover"
        />
      </div>
      <div className="w-full h-[91px] flex gap-2 flex-col bg-stone-200 py-2 px-3 flex-shrink-0">
        <h3 className="text-base font-medium">Amit Jha</h3>
        <p className="text-sm italic font-thin">"Some review submitted by the user about the Company"</p>
      </div>
    </div>
  );
};

export default TopStudentCard;
