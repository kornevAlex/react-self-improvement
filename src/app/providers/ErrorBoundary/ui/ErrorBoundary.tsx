import { PageError } from 'pages/PageError';
import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState>{
  constructor (props: ErrorBoundaryProps){
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError (error: Error){
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }
  componentDidCatch (error: Error, errorInfo: ErrorInfo){    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render (){
    const { hasError,error } = this.state;
    const { children } = this.props;

    if (hasError){      // You can render any custom fallback UI
      return <Suspense fallback=""><PageError error={error}/></Suspense>;
    }
    return children;
  }
}
