/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function QuizDetails(props:{
    quizName: string, 
    quizId: number, 
    quizQuestionsCount: number
}) {

    const {quizName, quizId, quizQuestionsCount} = props;

  return (
    <Card sx={{ maxWidth: 345 }} key={quizId}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quizName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Number of questions: {quizQuestionsCount} 
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/quiz/take/">
        <button className="start-quiz">
              Take Quiz
        </button>
     </Link>
        <Button size="small">Take quiz</Button>
      </CardActions>
    </Card>
  );
}
