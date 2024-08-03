import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  CardContent,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./style";

function App() {
  const classes = useStyles();

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icons} />
          <Typography variant="h6">
            {" "}
            Messi Album - The picture which ended the GOAT Debate! 🤷‍♂️{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Messi's Dearest Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textPrimary"
              paragraph
            >
              Lionel Messi started playing football as a boy and was noticed by
              clubs on both sides of the Atlantic. When he was 13, his family
              relocated to Barcelona. He played for FC Barcelona’s under-14
              team, quickly graduating through the higher-level teams until his
              informal debut at age 16 with FC Barcelona in a friendly match.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    WC Win - Dec'18 2022 🚀
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Copa America - 2024 Winner 😍
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                      The Iconic Kiss.
                    </Typography>
                    <Typography>
                      After so many failures, finally when all these years of
                      hardwork made sense. The man, The myth and the Legend of
                      football, Lionel Andres Messi kissing his most dearest
                      trophy at Qatar 2022 FIFA World Cup 🥰
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Messiiiiiii's Left footer!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          The magical foot which never got tired of giving love to this fans.
        </Typography>
      </footer>
    </>
  );
}

export default App;
