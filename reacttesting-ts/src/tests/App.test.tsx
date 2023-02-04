import { render, waitFor } from "@testing-library/react";
import { act, Simulate } from "react-dom/test-utils";
import Counter from "../components/counterApp/counterApp";


test('counter componet should render' ,async ()=>{
    const wrapper = render(<Counter/>)

    const headings = await wrapper.findAllByText('Counter App')
    const button = await wrapper.findByTestId('counter-button')

    expect(headings).toBeTruthy()

    act(()=>{
        Simulate.click(button)
    })

    await waitFor(async()=>{
        const button = await wrapper.findByTestId('counter-button')
        expect(button.innerHTML).toBe("count is 1")
    })

    act(()=>{
        Simulate.click(button)
    })

    await waitFor(async()=>{
        const button = await wrapper.findByTestId('counter-button')
        expect(button.innerHTML).toBe("count is 2")
    })

})




describe("Counter App" , ()=>{
    it("should render with 0 value" , async()=>{
        const wrapper = render(<Counter/>)
        const button = await wrapper.findAllByTestId('counter-button')
        expect(button).toMatchSnapshot('Count value 0')
    })
    it("should render with 1 value" , async()=>{
        const wrapper = render(<Counter/>)
        const button = (await wrapper.findAllByTestId('counter-button')).at(0)
        act(()=>{
            Simulate.click(button as HTMLElement)
        })

        waitFor(()=>{
            expect(button).toMatchSnapshot('count value 1')
        })

    })
})