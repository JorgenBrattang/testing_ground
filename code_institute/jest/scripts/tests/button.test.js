/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest")
const buttonClick = require("../button")

beforeEach( () => {
    let fs = require("fs")
    let fileContents = fs.readFileSync("code_institute/jest/index.html", "utf-8")
    document.open()
    document.write(fileContents)
    document.close()
})

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick()
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked")
    })
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(2)
    })
})