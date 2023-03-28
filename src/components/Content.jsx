import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Grid, Card } from "@mui/material";
import { CardMedia, CardContent } from "@mui/material";
function Content () {
  return (
    <Grid direction="column" marginTop={4} >
    <Box>
        <Typography variant="h4" mb={3}>
            Welcome to My Website
        </Typography>
        <Typography variant="body1" mb={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, ut excepturi ex doloribus sint ducimus nobis
            eius, illum dignissimos delectus eligendi voluptates
            incidunt consectetur a facere placeat omnis eum voluptas
            saepe itaque? Ab facere odit vero autem.
        </Typography>

        <Typography variant="body1" mb={3}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Assumenda fugit non eius iusto dicta possimus, quisquam
            nihil amet at adipisci, veniam tenetur repudiandae saepe
            laboriosam dolorum illo! Animi harum quibusdam consequuntur
            totam! Ipsum, soluta nemo?
        </Typography>
    </Box>

    <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
            <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://img.freepik.com/free-photo/closeup-female-yellow-legged-mining-bee-lichen-covered-piece-wood-andrena-flavipes_181624-54812.jpg?w=1380&t=st=1679931851~exp=1679932451~hmac=8487f6b6f876bc890572ab6fd2733a0ed4112e001b275c07a8db92dc96929da0"
                    title="bee1"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                        quidem nesciunt dolore inventore soluta aliquid architecto iste
                        quo provident rem error repudiandae quasi deleniti. Nisi quae odit
                        laborum voluptate temporibus, quia optio molestias.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item  xs={12} sm={6} md={6}>
        <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://img.freepik.com/premium-photo/honey-bee-front-white-background_191971-24400.jpg?w=1800"
                    title="bee2"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                        quidem nesciunt dolore inventore soluta aliquid architecto iste
                        quo provident rem error repudiandae quasi deleniti. Nisi quae odit
                        laborum voluptate temporibus, quia optio molestias.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
            
        <Grid item  xs={12} sm={6} md={6}>
            <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://img.freepik.com/free-photo/closeup-male-european-wool-carder-bee_181624-60221.jpg?w=1380&t=st=1679931867~exp=1679932467~hmac=e3236c5f941bcb54fe37b0f7943222dd7d31bec0a5a25786e9772151fef85611"
                    title="bee3"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                        quidem nesciunt dolore inventore soluta aliquid architecto iste
                        quo provident rem error repudiandae quasi deleniti. Nisi quae odit
                        laborum voluptate temporibus, quia optio molestias.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
</Grid>
  );
};

export default Content;