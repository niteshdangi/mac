import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../global-state";
import { Container, Footer, Form } from "./style";

const AddUser = ({ close }: { close: () => void }) => {
  const onClose = (e?: MouseEvent) => {
    e?.stopPropagation?.();
    document.getElementById("add-user-form-bg")?.classList.add("hiding");
    setTimeout(() => {
      close?.();
    }, 200);
  };
  const dispatch = useDispatch();
  const onSubmit = () => {
    const name = (
      document.getElementById("add-user-form-user") as HTMLInputElement
    )?.value;
    const password = (
      document.getElementById("add-user-form-password") as HTMLInputElement
    )?.value;
    dispatch(addUser({ name, password }));
    onClose();
  };
  return (
    <Container id="add-user-form-bg" onClick={onClose}>
      <Form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span>Enter Details:</span>
        <div className="row">
          <label>Full Name:</label>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            id="add-user-form-user"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="row">
          <label>Password:</label>
          <input
            name="password"
            required
            minLength={6}
            maxLength={20}
            id="add-user-form-password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <Footer>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" onClick={onSubmit}>
            Create User
          </button>
        </Footer>
      </Form>
    </Container>
  );
};
export default AddUser;
