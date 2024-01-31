import { useDispatch } from 'react-redux';
import { AiOutlineRest } from 'react-icons/ai';

import { deleteContacts } from '../../redux/contactsSlice';
import { Button, Text, Circle, ElementList } from './ElementList.styled';

export const ElementListContacts = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts({ id }));

  return (
    <ElementList>
      <Circle></Circle>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={handleDelete}>
        <AiOutlineRest />
      </Button>
    </ElementList>
  );
};
