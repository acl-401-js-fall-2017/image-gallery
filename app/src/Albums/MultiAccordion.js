import React, { PureComponent } from 'react';

export default class MultiAccordion extends PureComponent {
  constructor(props) {
    super();
    this.state = (Array.isArray(props.children) ? props.children : [props.children]).reduce((acc, child) => {
      acc[child.props.header + 'IsOpen'] = false;
      return acc;
    }, { isDroppedDown: false });
  }

  handleToggle = (headerName) => () => {
    const newState = { ...this.state, [headerName]: !this.state[headerName] };
    this.setState(newState);
  }

  render() {
    const { children, className, menuName } = this.props;
    const childrenArr = Array.isArray(children) ? children : [children];
    return (
      <div 
        className={className || 'MultiAccordion'}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '3em',
          float: 'right',
        }}
      >
        <h1
          onClick={this.handleToggle('isDroppedDown')}
          style={{
            margin: '0',
            fontSize: '36px',
            backgroundColor: 'black',
            color: 'white',
            
          }}
        >{menuName || '+'}</h1>
        {this.state.isDroppedDown &&
          <div 
            className="dropdownBox"
            style={{
              position: 'absolute',
              top: '4.22em',
              left: '-16em',
              width: '20em',
              backgroundColor: 'black',
              color: 'white',
              borderBottom: '4px solid white',
            }}
          >
            {childrenArr.map((child, i) => (
              <div key={i}>
                <h4
                  onClick={this.handleToggle(child.props.header + 'IsOpen')}
                  style={{
                    margin: '0',
                    textAlign: 'left',
                    padding: '0.5em 1em',
                    borderTop: '4px solid white',
                  }}
                >{child.props.header}</h4>
                {this.state[child.props.header + 'IsOpen'] &&
                  <section
                    style={{
                      padding: '0.5em',
                      paddingBottom: '2em',
                      backgroundColor: 'gray',
                    }}
                  >
                    {child}
                  </section>
                }
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}