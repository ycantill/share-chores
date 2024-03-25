import { html } from 'lit';
import '../src/share-chores.js';

export default {
  title: 'ShareChores',
  component: 'share-chores',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <share-chores
      style="--share-chores-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </share-chores>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
