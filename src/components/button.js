import React from 'react'
import MUIButton from '@mui/material/Button';

export default function Button({children, variant, ...props})
{
    return (
        <>
            <MUIButton variant="text">Text</MUIButton>
            <MUIButton variant="contained">Contained</MUIButton>
            <MUIButton variant="outlined">Outlined</MUIButton>
        </>
    )
}
