import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { getFilterValue } from '../../redux/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const valueFilter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Label htmlFor="filterId">
      Find contacts by name
      <Input
        id="filterId"
        type="text"
        name="filter"
        value={valueFilter}
        onChange={onChangeFilter}
        placeholder="Search contact"
      />
    </Label>
  );
};
