import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong";
  console.log(error);

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Page not found";
    message = "The requested page could not be found.";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <h1>Error {error.status}</h1>
        <p>{message}</p>
        <a href="/">Go back to the home page</a>
      </PageContent>
    </>
  );
};

export default ErrorPage;
