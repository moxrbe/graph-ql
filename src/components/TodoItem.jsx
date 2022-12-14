import { Checkbox, Text, CloseButton } from "@chakra-ui/react";
import "./style.scss";
const TodoItem = ({ id, title, completed, onToggle, onDelete }) => {
  return (
    <div className="item">
      <div>
        <Checkbox
          isChecked={completed}
          onChange={() =>
            onToggle({
              variables: {
                id,
                completed: !completed,
              },
            })
          }
        />
      </div>
      <Text>{title}</Text>
      <CloseButton
        onClick={() =>
          onDelete({
            variables: {
              id,
            },
          })
        }
      />
    </div>
  );
};

export default TodoItem;
