const argv = require('minimist')(process.argv.slice(2));
const mkdirp = require('mkdirp');
const fs = require('fs');

const component = argv._[0];
const path = `src/components/${argv._[1] || ''}`;
mkdirp.sync(`${path}/${component}`);

// index.js
// fs.writeFile(`${path}/${component}/index.js`, `
// import ${component} from './${component}';

// export default ${component};
// `, (err) => { console.log(err); });


// [Component].js
fs.writeFile(`${path}/${component}/${component}.js`,
  `import React from 'react';
import {} from 'prop-types';

import './${component}.scss';

const ${component} = () => (
  <div className='${component}'>
    ${component}
  </div>
);

${component}.propTypes = {};
${component}.defaultProps = {};
export default ${component};
`, (err) => { console.log(err); });

// [Component].story.js
fs.writeFile(`${path}/${component}/${component}.story.js`,
  `import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { action } from '@storybook/addon-actions';
import ${component} from './${component}';

const props = {};
const events = {};

storiesOf('${component}',module)
  .add('Default',()=> <${component} {...props} {...events}/>);
`, (err) => { console.log(err); });

// [Component].test.js
fs.writeFile(`${path}/${component}/${component}.test.js`,
  `import React from 'react';
import { shallow } from 'enzyme';
import ${component} from './${component}';

describe('${component}',()=>{
  it('should render');
});
`, (err) => { console.log(err); });

// [Component].scss
fs.writeFile(`${path}/${component}/${component}.scss`, `.${component}{}`,
  (err) => { console.log(err); }
);