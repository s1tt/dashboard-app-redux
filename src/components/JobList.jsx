import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'store/filters/filter-actions';
import { selectFilters } from 'store/filters/filter-selectors';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector(state =>
    selectVisiblePositions(state, currentFilters)
  );
  const dispatch = useDispatch();

  const handleAddFilter = filter => {
    dispatch(addFilter(filter));
  };
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };
