import { cn } from "./classnames";

describe("cn", () => {
  test("with no parameters", () => {
    expect(cn("")).toBe("");
  });

  test("with first parameter only", () => {
    expect(cn("class")).toBe("class");
  });

  test("with additional class", () => {
    const expected = "class class1 class2";
    expect(cn("class", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "class class1 class2 checked disabled";
    expect(
      cn("class", { checked: true, disabled: true }, ["class1", "class2"]),
    ).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "class class1 class2 checked";
    expect(
      cn("class", { checked: true, disabled: false }, ["class1", "class2"]),
    ).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "class class1 class2 checked";
    expect(
      cn("class", { checked: true, disabled: undefined }, ["class1", "class2"]),
    ).toBe(expected);
  });
});
