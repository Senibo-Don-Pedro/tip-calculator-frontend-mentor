export default function People({ people, setPeople }) {
  return (
    <div className='mt-8'>
      <div className='relative flex flex-col'>
        <div className='flex justify-between'>
          <label
            htmlFor='people'
            className='mb-2 text-sm text-QDarkGrayishCyan'
          >
            Number of People
          </label>
          {people > 0 || people === null ? null : (
            <p className='text-sm text-red-500'>Must be Whole Number</p>
          )}
        </div>
        <div className='absolute w-4 top-11 left-4'>
          <img className='w-full' src='/public/images/icon-person.svg' />
        </div>
        <input
          className={`px-3 py-2 text-2xl text-right rounded-lg text-QVeryDarkCyan bg-QVerylightGrayishCyan border  
          ${
            people > 0 || people === null
              ? 'focus:outline-QStrongCyan'
              : 'border-red-500 focus:outline-red-500'
          }
          `}
          id='people'
          name='people'
          type='number'
          value={people}
          placeholder='0'
          onChange={(e) => setPeople(parseInt(e.target.value))}
        />
      </div>
    </div>
  )
}
