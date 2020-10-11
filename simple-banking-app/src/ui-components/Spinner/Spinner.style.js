import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#000',
    opacity: '0.5',
    zIndex: 9999,

    '& .MuiCircularProgress-root': {
      position: 'fixed',
      top: '50%',
      left: '50%',
    },
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0
  },
  circle: {
    strokeLinecap: "round",
  }
}));