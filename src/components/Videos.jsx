import React from 'react'
import {Stack, Box} from '@mui/material'

import {ChannelCard, VideoCard, Loader} from './index.js'

const Videos = ({videos, direction}) => {
  if(!videos.length) return <Loader/>
  return (
    <Stack direction={direction || 'row'}
            flexWrap='wrap'
            justifyContent='start'
            gap={2}>
   {videos.map((item, idx) => (
        <Box key={idx}>
            {item.id.videoId && <VideoCard key={item.id.videoId} video={item}/>}
            {item.id.channelId && <ChannelCard key={item.id.channelId}  channelDetail={item}/>}

        </Box>
   ))}
    </Stack>
  )
}

export default Videos