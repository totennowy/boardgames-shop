
import { ModelLayoutContent } from '@layout/types/layout'
import { Box } from '@mui/material'
import React from 'react'

const LayoutContent: React.FC<ModelLayoutContent> = ({children}) => {
  return (
    <Box sx={{flex: 1}} >{children}</Box>
  )
}

export default LayoutContent
