import { refs } from '../utils';
import { getNotesStatistics } from '../utils';
import SummaryList from '../components/SummaryList';
import NotFound from '../components/NotFound';

const renderSummaryList = () => {
  const summaryWrapper = refs.summaryContainer();
  const statistics = getNotesStatistics();
  summaryWrapper.textContent = '';
  summaryWrapper.insertAdjacentHTML(
    'beforeend',
    statistics.length >= 1 ? SummaryList(statistics) : NotFound()
  );
};

export default renderSummaryList;
