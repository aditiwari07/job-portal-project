import { setAllJobs, setSingleJob } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function useSingleJob(jobId) {
    const dispatch = useDispatch()
  
}

export default useSingleJob