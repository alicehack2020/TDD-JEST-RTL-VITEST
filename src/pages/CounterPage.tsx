import StateLoginc from '../components/practice/StateLoginc'
import ReducerLogic from '../components/practice/ReducerLogic'

export const CounterPage = () => {
  return (
      <div className='grid place-content-center'>
          <h1 className='text-2xl'>using State</h1>
          <div>
             <StateLoginc/> 
          </div>
          <h1 className='text-2xl'>using Reducer</h1>
          <div>
             <ReducerLogic/> 
          </div>
    </div>
  )
}
