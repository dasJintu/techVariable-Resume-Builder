import * as React from "react";
import { useDispatch } from "react-redux";
import { addData } from "../features/resume/resumeSlice";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import ProfileSection from "../components/ProfileSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import MiniProject from "../components/MiniProject";
import SocialMention from "../components/SocialMention";
import ModalResume from "../components/ModalResume";

const steps = [
  "Profile Section",
  "Education Section",
  "Skills Section",
  "Mini Project",
  "Social Mention",
];

export default function Builder() {
  const methods = useForm();
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (data) => {
    if (activeStep === steps.length - 1) {
      dispatch(addData(data));
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepsContent(stepValue) {
    switch (stepValue) {
      case 0:
        return <ProfileSection />;
      case 1:
        return <EducationSection />;
      case 2:
        return <SkillsSection />;
      case 3:
        return <MiniProject />;
      case 4:
        return <SocialMention />;
      default:
        return "not found";
    }
  }

  return (
    <Box sx={{ width: "80%", margin: "auto", padding: "40px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <ModalResume onClick={handleReset} />
      ) : (
        <React.Fragment>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepsContent(activeStep)}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pt: 2,
                }}
              >
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button type="submit">
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </form>
          </FormProvider>
        </React.Fragment>
      )}
    </Box>
  );
}
