export default function Home() {
  return (
    <main>
      <div className="text-4xl text-cyan-50 border-red-700 border grid grid-cols-content">
        <div>SIM</div>
        <div className="bg-slate-50 text-black grid grid-rows-content">

          <div className="flex border-red-700 border justify-between items-center text-center gap-6 p-2">
            <div className="bg-slate-50 w-full h-full items-center text-center flex justify-center border-none rounded-3xl">
              1
            </div>
            <div className="bg-slate-50 w-full h-full items-center text-center flex justify-center border-none rounded-3xl">
              2
            </div>
            <div className="bg-slate-50 w-full h-full items-center text-center flex justify-center border-none rounded-3xl">
              3
            </div>
          </div>

          <div className="flex border-red-700 border justify-between items-center text-center">
            <div>1</div>
            <div>2</div>
          </div>

          <div className="flex border-red-700 border justify-between items-center text-center">
            <div>1</div>
            <div>2</div>
          </div>

        </div>
      </div>
    </main>
  );
}
