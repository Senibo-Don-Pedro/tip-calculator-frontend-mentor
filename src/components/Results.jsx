export default function Results({
  setBill,
  setTip,
  setPeople,
  total,
  setTotal,
  tipAmount,
  setTipAmount,
}) {
  function reset() {
    setBill(0)
    setTip(0)
    setPeople(0)
    setTotal('')
    setTipAmount('')
  }

  return (
    <div className='flex flex-col gap-5 pt-8 mt-8 sm:mt-0 p-7 bg-QVeryDarkCyan rounded-2xl sm:w-[48%]'>
      <div className='flex items-center justify-between'>
        <p className='flex flex-col text-xl text-white'>
          Tip Amount
          <span className='text-base text-QDarkGrayishCyan'>/ person</span>
        </p>
        <p className='text-3xl text-QStrongCyan'>
          ${tipAmount > 0 ? tipAmount : 0}
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='flex flex-col text-xl text-white'>
          Total
          <span className='text-base text-QDarkGrayishCyan'>/ person</span>
        </p>
        <p className='text-3xl text-QStrongCyan'>${total > 0 ? total : 0}</p>
      </div>

      <button
        onClick={reset}
        className='py-3 text-2xl rounded-md bg-QStrongCyan text-QVeryDarkCyan sm:mt-auto'
      >
        RESET
      </button>
    </div>
  )
}
