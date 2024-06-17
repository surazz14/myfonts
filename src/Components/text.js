"use client"

import Typography from '@mui/material/Typography';

export default function Text({ children }) {
    return (    
        <Typography variant="h2" align='center' gutterBottom>
            {children} 
        </Typography>
    );
}

