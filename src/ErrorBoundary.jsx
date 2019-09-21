import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props)
    {
        super(props)
        this.state = { error: null }
    }

  componentDidCatch(error, errorInfo)
    {
        this.setState({ error })
    }
  

  render() {
    if(this.state.error)
        {
            return (
                <div className={`error`}>
                    <h2>Ha ocurrido un error</h2>
                </div> 
            )
        }
        else
        {
            return this.props.children
        }
      }
}

export default ErrorBoundary;