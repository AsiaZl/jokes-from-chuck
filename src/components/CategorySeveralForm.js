import { Button } from "./styling/Button";
import { Input, Option } from "./styling/Input";
import { FontLabel } from "./styling/LayoutTheme";

const id = "numberOfJoke";

export function CategorySeveralForm({
  formSubmit,
  onChangeValue,
  selectedCategory,
  allCategories,
}) {
  return (
    <form onSubmit={(e) => formSubmit(e, e.target[id].value)}>
      <select
        onChange={onChangeValue}
        value={selectedCategory}
        className="form-select "
        size="16"
        aria-label="size 16 select example"
      >
        {allCategories.map((category) => (
          <Option key={category}>{category}</Option>
        ))}
      </select>
      <FontLabel htmlFor={id}>
        2. Determine the number of jokes in this category
      </FontLabel>
      <Input id={id} type="number" min="1" />
      <div>
        <Button type="submit">Click to get Jokes</Button>
      </div>
    </form>
  );
}
