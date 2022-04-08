import SummaryItem from '../SummaryItem';

const SummaryLIst = statistics => {
  return statistics.map(data => SummaryItem(data)).join('');
};

export default SummaryLIst;
