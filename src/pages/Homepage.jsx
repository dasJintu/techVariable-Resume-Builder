import { Link } from "react-router-dom";
import { Typography, Container, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const headingColor = grey[900];
const bodyColor = grey[700];

export default function Homepage() {
  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          color={headingColor}
          fontWeight="bold"
          gutterBottom
        >
          BUILD YOUR RESUME THE SMART WAY
        </Typography>

        <Typography variant="body1" align="center" color={bodyColor} paragraph>
          Easily create an out of this world resume with expert content that can
          be customized just for you!
        </Typography>

        <Button component={Link} to="build" variant="contained" size="large">
          create my resume
        </Button>
      </Container>
    </div>
  );
}
