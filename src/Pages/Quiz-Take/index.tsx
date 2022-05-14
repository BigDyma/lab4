import React,{ useState, useEffect} from 'react';
import { Grid, Paper } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import DashboardLayout from '../../Components/DashboardLayout';
import { IQuizModel } from '../../Models/quizModels';
import Quiz from "../../Components/Quiz-Answer";
import showQuiz from '../../Services/Quiz/_quiz-show';

export default function QuizTakeApp(): JSX.Element {
    const { enqueueSnackbar } = useSnackbar();
    const [quiz, setQuiz] = useState<IQuizModel>({
        title: '',
        id: 0,
        questions: []
      });

      const id = parseInt(window.location.pathname.split('quiz/')[1], 10);
      useEffect(() => {
        try {
          showQuiz(id).then((v) => setQuiz(v as IQuizModel));
        } catch (e ) {
          enqueueSnackbar(e as string, { variant: 'error' });
        }
      }, []);
    
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <Quiz 
            quiz={quiz}/>
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
