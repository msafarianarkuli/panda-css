import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

const buttonStyle = cva({
  base: {
    textAlign: "center",
    px: "2.5",
    py: "1",
    borderRadius: "6px",
    cursor: "pointer",
  },
  variants: {
    variant: {
      solid: { color: "white", border: "2px solid" },
      outline: { bgColor: "transparent", border: "2px solid" },
    },
    color: {
      primary: { bg: "primary", color: "primary" },
      blue: { bg: "blue", color: "blue" },
      success: { bg: "secondary", color: "secondary" },
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      css: {
        color: "white",
      },
    },
    {
      variant: "solid",
      color: "blue",
      css: {
        color: "white",
      },
    },
    {
      variant: "solid",
      color: "success",
      css: {
        color: "white",
      },
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
  },
});

export const Button = styled("button", buttonStyle);
