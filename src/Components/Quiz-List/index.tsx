import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams
} from '@material-ui/data-grid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSnackbar } from 'notistack';
import {  IQuizResponse } from '../../Models/quizModels';
import listQuizes from '../../Services/Quiz/_quiz-list-all';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch'
    }
  }
}));

export default function QuizList() {
  const classes = useStyles();
  const [quizzes, setQuizzes] = useState<IQuizResponse[]>([
    {
      id: 0,
      title: 'loading',
      questions_count: 0
    }
  ]);

  const history = useNavigate();

  useEffect(() => {
    listQuizes().then((v) => setQuizzes(v as IQuizResponse[]));
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Quiz Name', width: 150 },
    { field: 'questions_count', headerName: 'Number Of Questions', width: 180 },
    {
      field: 'GoTo',
      headerName: '',
      width: 180,
      // eslint-disable-next-line react/display-name
      renderCell: (params: GridValueGetterParams) => (
        <IconButton color="primary" aria-label="add an alarm">
          <ArrowForwardIcon />
        </IconButton>
      )
    }
  ];

  return (
    <Container>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Quizzes
        </Typography>
      </Container>
      <Container>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={quizzes}
            columns={columns}
            pageSize={5}
            onCellClick={async (e) => {
              if (e.field === 'GoTo') history(`/Quiz/${e.id}`);
            }}
          />
        </div>
      </Container>
    </Container>
  );
}