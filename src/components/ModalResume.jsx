import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, Container, Button, Box } from "@mui/material";
import GenericPdfDownloader from "./GenericPdfDownloader";
import { useSelector } from "react-redux";

export default function ModalResume({ onClick }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const values = useSelector((state) => state.resume.values);
  const {
    firstName,
    lastName,
    address,
    phoneNumber,
    education,
    skills,
    projects,
    image,
    socials,
  } = values;

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          padding: "80px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Your resume has been created
        </Typography>

        <Button onClick={handleClickOpen()} variant="contained" size="sm">
          Preview
        </Button>
      </Container>

      <Button onClick={onClick}>Create Another Resume</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">My Resume</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div id="resume">
              <Box sx={{ color: "black" }}>
                <Typography variant="h5" gutterBottom>
                  {firstName} {lastName}
                </Typography>

                <Typography gutterBottom>
                  {phoneNumber} <br />
                  {address} <br />
                  {socials.map((s) => (
                    <span key={s.social}>
                      {s.social}
                      <br />
                    </span>
                  ))}
                </Typography>

                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  sx={{ pt: 3 }}
                >
                  Education
                </Typography>
                {education.map((e) => (
                  <Box key={e.collegeName} sx={{ my: 3 }}>
                    <Typography>
                      <b>College Name :</b> {e.collegeName}
                    </Typography>
                    <Typography>
                      <b>Course :</b> {e.courseName}{" "}
                      <i>(Passed in {e.completionYear})</i> with {e.percent}%
                    </Typography>
                  </Box>
                ))}

                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  sx={{ pt: 3 }}
                >
                  Skills
                </Typography>
                <Box
                  sx={{
                    my: 3,
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  {skills.map((s) => (
                    <span key={s.skill}>{s.skill}</span>
                  ))}
                </Box>

                <Typography variant="h5" align="center" gutterBottom>
                  Projects
                </Typography>
                {projects.map((p) => (
                  <Box key={p.projectName} sx={{ my: 3 }}>
                    <Typography>
                      <b>Project Name :</b> {p.projectName}
                    </Typography>
                    <Typography>
                      <b>Tech Stack:</b> {p.techStack}
                    </Typography>
                    <Typography>
                      <b>Description:</b> <i>{p.description}</i>
                    </Typography>
                  </Box>
                ))}
              </Box>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <GenericPdfDownloader
            downloadFileName="resume"
            rootElementId="resume"
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
