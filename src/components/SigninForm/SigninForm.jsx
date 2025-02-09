import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import React from 'react';

import { ScreenMode } from '../Login/Login';

const SigninForm = ({ onSwitchMode }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        color: colors.orange[800]
      }}
    >
      <Stack spacing={5} sx={{
        width: "100%",
        maxWidth: "500px"
      }}>
        <Stack>
          <Typography variant='h4' fontWeight={600} color={colors.red[800]}>
            Welcome to Gym
          </Typography>
          <Typography color={colors.grey[600]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Typography>
        </Stack>

        <Stack spacing={4}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography color={colors.blue[800]}>Email</Typography>
              <TextField />
            </Stack>
            <Stack spacing={1}>
              <Typography color={colors.blue[800]}>Password</Typography>
              <TextField type='password' />
            </Stack>
          </Stack>
          <Button
            variant='contained'
            size='large'
            sx={{
              bgcolor: colors.blue[800],
              "&:hover": {
                bgcolor: colors.blue[600]
              }
            }}
          >
            Sign in
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography>Don't have an account?</Typography>
          <Typography
            onClick={() => onSwitchMode(ScreenMode.SIGN_UP)}
            fontWeight={600}
            sx={{
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            Sign up now
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SigninForm;