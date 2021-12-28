import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'


export const Layout = ({ children, props}:{children:any,props:any}) => {
    return (
        <div className='root'>
        {/* <Box sx={{ flexGrow: 1 }}> */}
         <AppBar color='transparent' elevation={1} position='static' sx={{alignItems: 'center'}}>
         </AppBar>
         {/* </Box> */}

           <div className='page'>
               {children}
           </div>
           <footer style={{textAlign: 'center'}}> ©FIU 2022</footer>
        </div>
    )
}
