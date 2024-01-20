import { useState, useEffect } from 'react'
import Bill from './components/Bill'
import Tip from './components/Tip'
import People from './components/People'
import Results from './components/Results'
import HeaderImg from './components/HeaderImg'

export default function App() {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState(null)
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (bill > 0 && tip > 0 && people > 0) {
      setTipAmount(parseFloat((bill * tip) / 100 / people).toFixed(2))
      setTotal(parseFloat((tipAmount * people + bill) / people).toFixed(2))
    }
  }, [bill, tip, people, tipAmount, total])

  console.log(tipAmount, total)

  return (
    <div className='min-h-screen bg-QLightGrayishCyan'>
      <HeaderImg />
      <div className='bg-white shadow-lg min-h-[80vh] sm:min-h-full rounded-t-3xl sm:rounded-3xl p-8 sm:flex justify-between  max-w-screen-lg mx-auto '>
        <div className='sm:w-[48%]'>
          <Bill bill={bill} setBill={setBill} />
          <div className='mt-8'>
            <Tip tip={tip} setTip={setTip} />
            <People people={people} setPeople={setPeople} />
          </div>
        </div>
        <Results
          setBill={setBill}
          setTip={setTip}
          setPeople={setPeople}
          total={total}
          setTotal={setTotal}
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
        />
      </div>
    </div>
  )
}
