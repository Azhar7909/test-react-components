import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import App from "../components/App"
import Timer from "../components/Timer"

describe("App", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => (container = shallow(<App />)))
// test case#1
  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
// test case#2
  it("should render the <Timer />", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })
})