import React, { useContext } from 'react'
import MainContext from '../MainContext'
import { GrLink, GrDownload, GrClose } from 'react-icons/gr'

const Download = () => {

    const {selectedBrands, setSelectedBrands} = useContext(MainContext)

    const getLink = () => {
        prompt('Here is the URL share', 'http://localhost:3004/collection')
    }

  return (
    <div className='download'>
        <div className='actions'>
            <a href=''>
                <GrDownload />
            </a>
            <button onClick={getLink}>
                <GrLink />
            </button>
        </div>
        <div className='selected' onClick={() => setSelectedBrands([])}>
        <GrClose />
        {selectedBrands.length} brands collected
        </div>
    </div>
  )
}

export default Download
