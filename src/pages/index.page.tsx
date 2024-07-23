export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="text-4xl text-cyan-50 border border-red-700 w-full h-full flex flex-col gap-2 lg:grid lg:grid-cols-content">
        <div>SIM</div>
        <div className="text-black border border-red-700 gap-2 flex flex-col lg:grid lg:grid-rows-content">
          <div className="gap-2 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:text-center lg:gap-6 lg:p-2">
            <div className="bg-slate-50 items-center w-full h-20 flex text-center justify-center border-none rounded-3xl lg:h-full">
              1
            </div>
            <div className="bg-slate-50 items-center w-full h-20 flex text-center justify-center border-none rounded-3xl lg:h-full">
              2
            </div>
            <div className="bg-slate-50 items-center w-full h-20 flex text-center justify-center border-none rounded-3xl lg:h-full">
              3
            </div>
          </div>
          <div className="gap-2 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:text-center lg:gap-6 lg:p-2">
            <div className="bg-slate-50 items-center w-full h-20 flex text-center justify-center border-none rounded-3xl lg:h-full">
              1
            </div>
            <div className="bg-slate-50 items-center w-full h-20 flex text-center justify-center border-none rounded-3xl lg:h-full">
              2
            </div>
          </div>
          <div className="gap-2 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:text-center lg:gap-6 lg:p-2">
            <div className="bg-slate-50 items-center w-full h-20 flex text-center justify-center border-none rounded-3xl lg:h-full">
              1
            </div>
            <div className="bg-slate-50 items-center w-full h-20 flex text-center justify-center border-none rounded-3xl lg:h-full">
              2
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
