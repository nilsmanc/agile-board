import {
  AppBar,
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material'
import { observer } from 'mobx-react-lite'
import useStore from '../../hooks/useStore'
import User from '../common/User'

function Header() {
  const { boards, users } = useStore()

  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item>
            <Box display='flex' alignItems='center'>
              <Typography variant='h6'>Dashboard:</Typography>
              <FormControl variant='outlined'>
                <Select
                  style={{ backgroundColor: '#fff', marginLeft: 10 }}
                  native
                  value={boards?.active?.id || ''}
                  onChange={(event) => {
                    const { value } = event.target

                    boards.selectBoard(value)
                  }}>
                  <option value='' disabled>
                    -
                  </option>
                  {boards.list.map((b) => {
                    return (
                      <option key={b.id} value={b?.id}>
                        {b?.title}
                      </option>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item>
            <User user={users?.me} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default observer(Header)
