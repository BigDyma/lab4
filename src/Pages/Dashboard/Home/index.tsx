import React, { useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import DashboardLayout from '../../../Components/DashboardLayout';
import QuizList from '../../../Components/Quiz-List';


export default function Application(): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {enqueueSnackbar("Where is the exception ?", {variant: "default"})}, []);
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <QuizList/>
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
