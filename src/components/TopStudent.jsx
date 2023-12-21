import React from "react";
import TopStudentCard from "./TopStudentCard";

const TopStudent = () => {

    const items = [];
    for(let i = 0; i< 6; i++){
        items.push(<TopStudentCard identity={i}/>)
    }

  return (
    <div className="flex flex-col gap-6 px-8 md:px-0 ">
      <h2 className="text-base font-thin text-center">Top Student</h2>
      <div className="flex gap-10 md:gap-20 overflow-y-scroll">
        {
            items.map((card, index) => (
                <div key={index}>{card}</div>
            ))
        }
      </div>
    </div>
  );
};

export default TopStudent;
