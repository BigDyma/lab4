import IErrorResponse from '../../Models/errorModels';

const throwIfError = (handledResult: IErrorResponse): void => {
  if (handledResult?.error) {
    throw new Error(handledResult.error);
  }
};

export default throwIfError;