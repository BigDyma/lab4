import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import DashboardLayout from '../../../Components/DashboardLayout';
import QuizList from '../../../Components/Quiz-List';

export default function Application(): JSX.Element {
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
