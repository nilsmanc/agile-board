import { Avatar, Box } from '@mui/material'
import React from 'react'

type UserProps = {
  user: {
    name: string
    avatar?: string
  }
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <Box display='flex' alignItems='center'>
      <Avatar alt={user?.name} src={user?.avatar} />
      <span style={{ padding: 5 }}>{user?.name}</span>
    </Box>
  )
}

export default User
