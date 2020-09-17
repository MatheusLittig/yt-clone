import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100vh',
  },

  /* ---- HEADER BAR ----*/
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  logo: {
    height: 30,
  },

  spacer: {
    flexGrow: 1,
  },

  actionIcons: {
    marginRight: theme.spacing(2),
  },

  icons: {
    marginRight: theme.spacing(2),
  },

  /* ---- DRAWER ---- */
  drawer: {
    width: 260,
    flexShrink: 0,
  },

  drawerPaper: {
    width: 260,
    borderRight: 'none',
  },

  listItemText: {
    fontSize: 14,
  },

  listSubHeader: {
    fontSize: 12,
    textTransform: 'uppercase',
  },

  drawerContainer: {},

  listItem: {
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: theme.spacing(1),
  },

  /* ---- CONTENT BOX ---- */
  contentBox: {
    padding: 4,
  },
}));

export default useStyle;
