import { offers, offersYears } from "./data/offer";
import { useState } from "react";
const App = () => {
  const [monthlyYear, setMonthlyYear] = useState(true);

  function yearDebt() {
    setMonthlyYear(false);
  }
  function monthDebt() {
    setMonthlyYear(true);
  }

  return (
    <div className="m-auto max-w-[358px] lg:max-w-[1280px]">
      <div className="lg:flex lg:gap-[80px]">
        <div className="lg:max-w-[1010px]">
          <h2 className="font-bold text-[24px] text-[white] lg:text-[28px]">
            Choose the plan that's right for you
          </h2>
          <p className="mt-[10px] text-[#999999] text-[14px] lg:text-[16px]">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="flex justify-center items-center bg-[#0F0F0F] mt-[20px] border border-[#1F1F1F] rounded-[8px] w-[190px] h-[61px]">
          <button
            onClick={monthDebt}
            className="hover:bg-[#1F1F1F] rounded-[6px] w-[80px] min-h-[45px] text-[14px] text-[white] cursor-pointer"
          >
            Monthly
          </button>
          <button
            onClick={yearDebt}
            className="hover:bg-[#1F1F1F] rounded-[6px] w-[80px] min-h-[45px] text-[14px] text-[white] cursor-pointer"
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-[20px] mt-[40px]">
        {(monthlyYear ? offers : offersYears).map((eachElement) => (
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] lg:w-[100%] max-w-[358px] lg:max-w-[413px] min-h-[275px] lg:min-h-[345px]">
            <div className="mt-[24px] lg:mt-[30px] ml-[24px] lg:ml-[40px] max-w-[310px]">
              <h2 className="font-bold text-[18px] text-[white] lg:text-[20px]">
                {eachElement.title}
              </h2>
              <p className="mt-[10px] lg:mt-[12px] mb-[24px] lg:mb-[40px] text-[#999999] text-[14px] lg:text-[16px]">
                {eachElement.description}
              </p>
            </div>
            <div className="flex items-end ml-[24px] lg:ml-[40px]">
              <p className="font-bold text-[24px] text-[white] lg:text-[30px]">
                {eachElement.price}
              </p>
              <span className="text-[#999999]">{eachElement.time}</span>
            </div>
            <div className="flex justify-center gap-[12px] mt-[24px]">
              <button className="bg-[#141414] rounded-[6px] w-[100%] max-w-[149px] lg:max-w-[160px] min-h-[49px] text-[14px] text-[white] cursor-pointer">
                Start Free Trial
              </button>
              <button className="bg-[#E50000] rounded-[6px] w-[100%] max-w-[149px] lg:max-w-[160px] min-h-[49px] text-[14px] text-[white] cursor-pointer">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
