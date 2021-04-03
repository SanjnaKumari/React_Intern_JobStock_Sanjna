import React from 'react'
import Banner from '../sections/Banner'
import GeneralDetail from '../sections/GeneralDetailBlog'
import FullDetail from '../sections/FullDetailBlog'

const CreateJob = () => {
    return (
        <>
        <div className="Loader"></div>
		<div className="wrapper">
          <Banner/>
          <GeneralDetail/>
          <FullDetail/>
        </div>
        </>
    )
}

export default CreateJob