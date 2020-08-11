import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import Timer from "../components/Timer"

describe("Timer", () => {
	const container = shallow(<Timer />)

	it("should render a <div />", () => {
		expect(container.find("div").length).toBeGreaterThanOrEqual(1)
	})
})