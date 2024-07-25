export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex h-full w-full flex-col gap-2 border border-red-700 text-4xl text-cyan-50 lg:grid lg:grid-cols-content">
        <div>SIM</div>
        <div className="flex flex-col gap-2 border border-red-700 text-black lg:grid lg:grid-rows-content">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:p-2 lg:text-center">
            <div className="flex h-20 w-full items-center justify-center rounded-3xl border-none bg-slate-50 text-center lg:h-full">
              1
            </div>
            <div className="flex h-20 w-full items-center justify-center rounded-3xl border-none bg-slate-50 text-center lg:h-full">
              2
            </div>
            <div className="flex h-20 w-full items-center justify-center rounded-3xl border-none bg-slate-50 text-center lg:h-full">
              3
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:p-2 lg:text-center">
            <div className="flex h-20 w-full items-center justify-center rounded-3xl border-none bg-slate-50 text-center lg:h-full">
              1
            </div>
            <div className="flex h-20 w-full items-center justify-center rounded-3xl border-none bg-slate-50 text-center lg:h-full">
              2
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:p-2 lg:text-center">
            <div className="flex h-20 w-full items-center justify-center rounded-3xl border-none bg-slate-50 text-center lg:h-full">
              1
            </div>
            <div className="flex h-20 w-full items-center justify-center rounded-3xl border-none bg-slate-50 text-center lg:h-full">
              2
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
