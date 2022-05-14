import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Dashboard from './_dashboard';
import useStyles from './_styles';

export default function DashboardLayout(props: {
  children: React.ReactNode;
}): JSX.Element {
  const classes = useStyles();
  const { children } = props;

  return (
    <Dashboard key="dashboardLayout">
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} />
          {children}
        </Container>
      </main>
    </Dashboard>
  );
}