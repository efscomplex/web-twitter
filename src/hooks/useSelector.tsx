import { useState } from 'react'

const useSelector = () => {
   const [selected, setSelected] = useState(false)
   const toggleSelect = () => setSelected((state) => !state)

   return { selected, toggleSelect }
}
export default useSelector
