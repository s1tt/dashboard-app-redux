import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, removeFilter } from 'store/filters/filter-actions';
import { selectFilters } from 'store/filters/filter-selectors';

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();
  if (currentFilters.length === 0) return null;
  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilters.map(item => (
            <Badge
              key={item}
              variant='clearable'
              onClear={() => dispatch(removeFilter(item))}
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
