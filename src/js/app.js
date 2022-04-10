import {
  renderMainLayout,
  renderNotes,
  renderSummaryList
} from './renderFunctions/';

import { getActiveNotes } from './utils';

const App = {
  init() {
    renderMainLayout();
    renderNotes(getActiveNotes());
    renderSummaryList();
  }
};

export default App;
