import { Card } from "antd";
import { CardContent } from "../ui/card";
import icon1 from '../../assets/icons/dcf4135db2eb4b2bc6c6590c24308812.png'
import { ArrowUp } from 'lucide-react';
import Rechart from "../rechart/Rechart";
import AsideItems from "../Layouts/AsideItems";

const SummaryHeader = () => {
    return (
        
        <>
            <Card>
          <div className="flex gap-4 justify-evenly">
              {/* summary 1------ */}
                  <CardContent className="w-[252px] h-[142px] border p-4 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between">
                              <div>
                                  <p className="text-[16px] text-[#555555] font-semibold">Total Balance</p>
                                  <p className="text-[30px] font-bold text-black">Tk. 710</p>
                              </div>
                              <div className="bg-[#e5f4ff] p-5 rounded-full">
                                  <div className="relative size-6 ">
                                      <img className="" src={icon1}></img>
                                  </div>
                              </div>
                          </div>

                      <div className="flex items-center gap-1">
                          <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                              <ArrowUp className=" text-[#00E676] size-4"></ArrowUp> 
                          
                          </div> 
                              <div>
                                  <p><span className="text-[#00E676] text-sm">+3.10%</span> <span className="text-[#A2A5AE]">than last month</span></p>
                              </div>
                      </div>
                  </CardContent>
              {/* summary 2------ */}
                  <CardContent className="w-[252px] h-[142px] border p-4 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between">
                              <div>
                                  <p className="text-[16px] text-[#555555] font-semibold">Total Balance</p>
                                  <p className="text-[30px] font-bold text-black">Tk. 710</p>
                              </div>
                              <div className="bg-[#e5f4ff] p-5 rounded-full">
                                  <div className="relative size-6 ">
                                      <img className="" src={icon1}></img>
                                  </div>
                              </div>
                          </div>

                      <div className="flex items-center gap-1">
                          <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                              <ArrowUp className=" text-[#00E676] size-4"></ArrowUp> 
                          
                          </div> 
                              <div>
                                  <p><span className="text-[#00E676] text-sm">+3.10%</span> <span className="text-[#A2A5AE]">than last month</span></p>
                              </div>
                      </div>
                  </CardContent>
              {/* summary 3------ */}
                  <CardContent className="w-[252px] h-[142px] border p-4 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between">
                              <div>
                                  <p className="text-[16px] text-[#555555] font-semibold">Total Balance</p>
                                  <p className="text-[30px] font-bold text-black">Tk. 710</p>
                              </div>
                              <div className="bg-[#e5f4ff] p-5 rounded-full">
                                  <div className="relative size-6 ">
                                      <img className="" src={icon1}></img>
                                  </div>
                              </div>
                          </div>

                      <div className="flex items-center gap-1">
                          <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                              <ArrowUp className=" text-[#00E676] size-4"></ArrowUp> 
                          
                          </div> 
                              <div>
                                  <p><span className="text-[#00E676] text-sm">+3.10%</span> <span className="text-[#A2A5AE]">than last month</span></p>
                              </div>
                      </div>
                  </CardContent>
              {/* summary 4------ */}
                  <CardContent className="w-[252px] h-[142px] border p-4 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between">
                              <div>
                                  <p className="text-[16px] text-[#555555] font-semibold">Total Balance</p>
                                  <p className="text-[30px] font-bold text-black">Tk. 710</p>
                              </div>
                              <div className="bg-[#e5f4ff] p-5 rounded-full">
                                  <div className="relative size-6 ">
                                      <img className="" src={icon1}></img>
                                  </div>
                              </div>
                          </div>

                      <div className="flex items-center gap-1">
                          <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                              <ArrowUp className=" text-[#00E676] size-4"></ArrowUp> 
                          
                          </div> 
                              <div>
                                  <p><span className="text-[#00E676] text-sm">+3.10%</span> <span className="text-[#A2A5AE]">than last month</span></p>
                              </div>
                      </div>
                  </CardContent>
              
            </div>
                <div className="grid gap-4 mt-3">
                    <div className="grid-cols-4">
                        {/* TODO -Rechart here */}
                        <Rechart></Rechart>
                    </div>
                    <div className="grid-cols-2">
                        {/*TODO -Aside bar items */}
                        <AsideItems></AsideItems>
                    </div>
                </div>
        </Card>
        
     
        </>
  
);
};

export default SummaryHeader;