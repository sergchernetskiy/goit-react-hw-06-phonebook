import { AiOutlineRest } from 'react-icons/ai';
import { Button, Text, Circle, ElementList } from './ElementList.styled';

export const ElementListContacts = ({ id, name, number, onDelete }) => {
  return (
    <ElementList>
      <Circle></Circle>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => onDelete(id)}>
        <AiOutlineRest />
      </Button>
    </ElementList>
  );
};
