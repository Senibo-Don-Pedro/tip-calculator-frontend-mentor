export default function Tip({ tip, setTip }) {
  function handleClick(e) {
    const selectedTip = e.target.value

    // Clear the custom tip input if another tip button is clicked
    if (selectedTip !== 'custom') {
      setTip(selectedTip)
    } else {
      setTip('') // Clear the custom tip input
    }
  }

  return (
    <>
      <p className="'mb-2 text-QDarkGrayishCyan mb-4">Select Tip %</p>
      <div className='grid grid-cols-2 gap-3.5 sm:grid-cols-3'>
        {[5, 10, 15, 25, 50].map((value) => (
          <>
            <input
              type='radio'
              name={value}
              id={value}
              key={value}
              onClick={handleClick}
              value={value}
              className='hidden radiobtn'
            />
            <label
              className='py-2 text-2xl text-white rounded-lg radiobtn px-14 bg-QVeryDarkCyan active:bg-QStrongCyan '
              htmlFor={value}
            >
              {value}%
            </label>
          </>
        ))}
        <input
          className='px-3 py-2 text-2xl text-right rounded-lg text-QVeryDarkCyan bg-QVerylightGrayishCyan focus:outline-QStrongCyan placeholder:text-QDarkGrayishCyan'
          type='text'
          placeholder='Custom'
          onChange={handleClick}
        />
      </div>
    </>
  )
}
