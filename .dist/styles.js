import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F2ED',
  },
  container: {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
    padding: theme.spacing(4, 0, 6),
    display: 'flex',
    flexDirection: 'row',
  },
  single: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '0 1rem 3rem',
  },
  singleImg: {
    height: '100vh',
    filter: 'drop-shadow(20px 10px 3px #aaaaaa)',
    '&:hover': {
      transform: 'rotate(7deg)',
    },
  },
  detail: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    fontSize: '.7rem',
  },
  button: {
    margin: '10px',
  },
  cardGrid: {
    padding: '20px 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '20px',
    position: 'relative',
    '&:hover': {
      background: '#F6F6F6',
    },
  },
  paper: {
    height: '30rem',
    width: 'auto',
    display: 'flex',
    textAlign: 'left',
  },
  cardMedia: {
    paddingTop: '10px',
    position: 'relative',
    height: '30rem',
    width: 'auto',
    objectFit: 'cover',
    '&:hover': {
      transform: 'rotate(7deg)',
      opacity: '0.5',
      filter: 'blur(2px)',
    },
  },
  cardContent: {
    flexGrow: 1,
    fontSize: '14px',
  },
}))

export default useStyles
