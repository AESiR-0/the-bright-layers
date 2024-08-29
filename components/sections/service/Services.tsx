import React from 'react';

const ServiceSection: React.FC = () => {
  return (
   <div className=" h-full overflow-hidden  flex flex-col">
        <div className="container flex overflow-hidden justify-center gap-32 h-screen items-center ">
            <div className="h-[600px] w-[500px] flex flex-col rounded-3xl bg-slate-700 ">
                <div className="h-20 flex items-center justify-center bg-slate-500 rounded-t-3xl   w-full">
                    <h1 className="text-white  text-2xl text-center">Service</h1>
                </div>
            </div>
            <div className="h-[600px] w-[500px] flex flex-col rounded-3xl bg-slate-700 ">
                <div className="h-20 flex items-center justify-center bg-slate-500 rounded-t-3xl   w-full">
                    <h1 className="text-white  text-2xl text-center">Service</h1>
                </div>
            </div>
        </div>
        <div className="container flex overflow-hidden justify-center gap-32 h-screen items-center ">
            <div className="h-[600px] w-[500px] flex flex-col rounded-3xl bg-slate-700 ">
                <div className="h-20 flex items-center justify-center bg-slate-500 rounded-t-3xl   w-full">
                    <h1 className="text-white  text-2xl text-center">Service</h1>
                </div>
                
            </div>
            <div className="h-[600px] w-[500px] flex flex-col rounded-3xl bg-slate-700 ">
                <div className="h-20 flex items-center justify-center bg-slate-500 rounded-t-3xl   w-full">
                    <h1 className="text-white  text-2xl text-center">Service</h1>
                </div>
            </div>
        </div>
   </div>
  );
};

export default ServiceSection;