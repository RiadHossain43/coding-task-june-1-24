import { render, screen } from "@testing-library/react";
import Comment from "../Comment";

const mockCommests = {
  id: 2,
  name: "Post 2",
  email: "reyad@amil.com",
  body: "Content 2",
  postId: 2,
};

describe("Posts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("shoudld render comment email and body", () => {
    render(<Comment {...mockCommests} />);
    let email = screen.getByTestId("comment-email");
    let body = screen.getByTestId("comment-body");
    expect(email).toHaveTextContent(mockCommests.email);
    expect(body).toHaveTextContent(mockCommests.body);
  });
});
