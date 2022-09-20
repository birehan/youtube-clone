import React from 'react'
import {useState, useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import {Videos} from './index.js'

import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) =>
      setVideos(data.items))

    
  }, [searchTerm]);

  return (
    <Box p={2} minHeight='95vh'>
      <Typography variant = 'h4'
      fontWeight={900} mb={3} color='white' ml={{sm: '100px'}}>
        Search Results for <span style={{color: '#FC1503'}}>{searchTerm}</span> Videos
      </Typography>
      <Box display='flex'>
        <Box sx={{mr: {sm: '100px'}}}/>
        {<Videos videos={videos}/>}
      </Box>

      <Videos videos = {videos}/>
    </Box>
  )
}

export default SearchFeed