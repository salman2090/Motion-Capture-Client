import React, { useState } from 'react';
import './Lenses.css';
import { useEffect } from 'react';
import lensBanner from '../../../Images/Lens/lensBanner.jpg';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Container } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Lenses = () => {
    const [lenses, setLenses] = useState([]);
    
    // Load data
    useEffect(() =>{
        fetch('./lenses.json')
        .then(res => res.json())
        .then(data => setLenses(data))
    }, []);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = lenses.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    return (
        <div id="lenses">
             <h2>Lens</h2>
                <Box sx={{ maxWidth: 500, flexGrow: 1, m:'0 auto'}} >
                <Paper
                    square
                    elevation={0}
                    sx={{
                    alignItems: 'center',
                    height: 20,
                    pl:2,
                    bgcolor: 'background.default',
                    }}
                >
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {lenses.map((lens, index) => (
                    <div key={lens._id}>
                        
                 
                        
                        {Math.abs(activeStep - index) <= 2 ? ( 
                        <Box  
                            component="img"
                            sx={{
                             
                            height: 500,
                            display: 'block',
                            maxWidth: 500,
                            overflow: 'hidden',
                            width: '100%',
                            }}
                            src={lens.img}
                            alt={lens.name}
                        />
                        ) : null}
                        <Paper>
                        <Paper sx={{px:2}}>
                    <Typography sx={{fontWeight:'bold', fontSize:25, mb:1, pt:5}}>{lenses[activeStep].name}</Typography>
                    <Typography sx={{ mb:1}}>{lenses[activeStep].description}</Typography>
                    <Typography sx={{fontWeight:'medium', fontSize:20, pb:2}}>Price: {lenses[activeStep].price} Taka</Typography>
                    </Paper>
                        </Paper>
                    </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                        ) : (
                        <KeyboardArrowRight />
                        )}
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                        ) : (
                        <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                    }
                />
            </Box>
            
        </div>
    );
};

export default Lenses;