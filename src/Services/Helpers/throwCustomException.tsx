import IErrorResponse from '../../Models/errorModels';

const throwIfError = (handledResult: IErrorResponse): void => {
  if (handledResult?.error) {
    console.log(handledResult)  
  }
};

export default throwIfError;