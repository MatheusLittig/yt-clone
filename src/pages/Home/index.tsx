import React from 'react';

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AvatarIcon from '@material-ui/icons/AccountCircle';

/* ---- HEADER BAR ICONS ---- */
import AppsIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import { AccountCircleOutlined } from '@material-ui/icons';

/* ---- DRAWER ICONS ---- */
import HomeIcon from '@material-ui/icons/Home';
import Whatshot from '@material-ui/icons/Whatshot';
import Subscription from '@material-ui/icons/Subscriptions';

import Library from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

/* ----- CONTENT ----- */
import Thumb1 from '../../assets/images/thumb1.png';
import Thumb2 from '../../assets/images/thumb2.png';
import Thumb3 from '../../assets/images/thumb3.png';
import Thumb4 from '../../assets/images/thumb4.png';
import Thumb5 from '../../assets/images/thumb5.png';
import Thumb6 from '../../assets/images/thumb6.png';
import Thumb7 from '../../assets/images/thumb7.png';
import Thumb8 from '../../assets/images/thumb8.png';

import YTLogo from '../../assets/images/logo_dark.png';

import useStyle from './styles';

const Home: React.FC = () => {
  const classes = useStyle();

  const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '../../assets/images/avatar.jpeg',
      thumb: Thumb1,
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '../../assets/images/avatar.jpeg',
      thumb: Thumb2,
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '../../assets/images/avatar.jpeg',
      thumb: Thumb3,
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '../../assets/images/avatar.jpeg',
      thumb: Thumb4,
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '../.../../assets/images/avatar.jpeg',
      thumb: Thumb5,
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '../../assets/images/avatar.jpeg',
      thumb: Thumb6,
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '../../assets/images/avatar.jpeg',
      thumb: Thumb7,
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '../../assets/images/avatar.jpeg',
      thumb: Thumb8,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <img src={YTLogo} alt="YouTube" className={classes.logo} />

          <div className={classes.spacer} />

          <div className={classes.actionIcons}>
            <IconButton
              className={classes.icons}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <VideoCall />
            </IconButton>

            <IconButton
              className={classes.icons}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <AppsIcon />
            </IconButton>

            <IconButton
              className={classes.icons}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MoreVert />
            </IconButton>
          </div>

          <Button startIcon={<AvatarIcon />} variant="outlined" color="inherit">
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {/* <Toolbar /> */}
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Home"
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Whatshot />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Em Alta"
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Subscription />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Incrições"
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Library />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Biblioteca"
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Histórico"
                  />
                </ListItem>
              </List>

              <Divider />

              <Box p={3}>
                <Typography variant="body2">
                  Faça Login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircleOutlined />}
                  >
                    Fazer login
                  </Button>
                </Box>
              </Box>

              <Divider />

              <List>
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={classes.listSubHeader}
                >
                  Explore por categorias
                </ListSubheader>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Notícias"
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Filmes"
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Músicas"
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Animações"
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Tecnologia"
                  />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>

        <Box p={6}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 800 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={3} style={{ marginTop: 10 }}>
            {videos.map(item => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    src={item.thumb}
                    alt={item.title}
                    style={{ width: '100%' }}
                  />

                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} * ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
