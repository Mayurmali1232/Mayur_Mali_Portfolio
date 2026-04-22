import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-900 text-white p-4">
          <div>
            <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
            <pre className="whitespace-pre-wrap text-sm">
              {this.state.error && this.state.error.toString()}
              {this.state.info && this.state.info.componentStack}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
