import React from 'react'
import Banner from '../components/Banner'
import GeneralDetail from '../sections/GeneralDetailCreateJob'
import FullDetail from '../sections/FullDetailCreateJob'

const CreateJob = () => {
    return (
        <>
        <div className="Loader"></div>
		<div className="wrapper">
          <Banner
              cname = "inner-header-title blank"
              title = "Create Job"
          />
          <GeneralDetail/>
          <FullDetail/>
        </div>
        </>
    )
}

export default CreateJob