let states = {};

const useState = (key: string, defaultValue?: any) => {
  const setVariable = (variableValue: any) => {
    states[key] = variableValue;
  };
  states[key].action = setVariable;
  states[key].value = defaultValue;

  return [...states[key]];
};

const [id, setId] = useState("id");
const [action, setAction] = useState("action");

const handleSetIdAction = (
  IdAndAction:
    | { action: string | undefined; id: string | undefined }
    | { action: string | undefined }
) => {
  if ("id" in IdAndAction) {
    setAction(IdAndAction.id);
  }
  setId(IdAndAction.action);
};

console.log("--------------------");
handleSetIdAction({ action: "a" });
console.log("### ID AND ACTION NOW", id, action);
console.log("--------------------");
handleSetIdAction({ action: "a", id: undefined });
console.log("### ID AND ACTION NOW", id, action);
console.log("--------------------");
