export default function Bill({ bill, setBill }) {
  return (
    <div>
      <div className='relative flex flex-col'>
        <label htmlFor='Bill' className='mb-2 text-QDarkGrayishCyan'>
          Bill
        </label>
        <div className='absolute w-4 top-11 left-4'>
          <img className='w-full' src='/images/icon-dollar.svg' />
        </div>
        <input
          className='px-3 py-2 text-2xl text-right rounded-lg text-QVeryDarkCyan bg-QVerylightGrayishCyan focus:outline-QStrongCyan'
          id='Bill'
          required
          min={0}
          value={bill}
          onChange={(event) => {
            setBill(parseFloat(event.target.value))
          }}
          name='Bill'
          type='number'
          placeholder='0.00'
        />
      </div>
    </div>
  )
}
