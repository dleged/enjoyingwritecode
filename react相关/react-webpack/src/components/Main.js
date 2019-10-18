require('normalize.css/normalize.css');
require('styles/App.css');
import { StickyContainer, Sticky } from 'react-sticky';

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <StickyContainer>
          {/* Other elements can be in between `StickyContainer` and `Sticky`,
          but certain styles can break the positioning logic used. */}
          <Sticky>
            {({
              style,

              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => (
              <header style={style}>
                Generator Header
              </header>
            )}
          </Sticky>
          {/* ... */}
        </StickyContainer>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
