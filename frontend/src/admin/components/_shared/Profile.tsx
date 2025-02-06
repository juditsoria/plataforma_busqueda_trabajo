export function Profile () {
  return (
    <div className="bg-secondary w-full rounded-lg p-4">
        <div className="flex items-center gap-4">
          <button type="button" className="w-12 h-12 text-white bg-primary flex items-center justify-center rounded-full text-xl font-bold">
            T
          </button>
          <div>
            <p className="text-md font-semibold">Teodros Girmay</p>
            <p className="text-gray-500 text-sm">Engineering</p>
          </div>
        </div>
        <div className="border-t-2 border-primary my-4"></div>
        <div className="">
          <label className="text-md flex justify-center">Admin</label>
        </div>
    </div>
  )
}
