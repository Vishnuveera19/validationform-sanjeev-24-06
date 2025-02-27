import React from 'react'
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';

import AttendanceD1 from './AttendanceDetailsReports';

function ButtonEsi5() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < AttendanceD1/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'right'} sx={{paddingRight:'140px'}}>
          <Button variant='contained' onClick={ ()=> generatePDF(targetRef, {filename: 'AttendanceD1.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default ButtonEsi5