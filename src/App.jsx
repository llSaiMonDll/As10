import Nav from "./components/Nav";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
function App() {
  return (
    <>
      <Nav />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}  md={3}> 
            <Sidebar/>
          </Grid>
          <Grid item xs={12} md={6}> 
            <Content />
          </Grid>
          <Grid item xs={12} md={3}> 
            <RightBar />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;