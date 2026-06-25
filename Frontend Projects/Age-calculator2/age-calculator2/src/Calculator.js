import React, { useState } from "react"
import { Input, Container, Button } from "@sainsburys-tech/fable"

export const Calculator = () => {
  const today = new Date()
  const [value, setValue] = useState()
  return (
    <Container size="md">
      <h1>Age Calculator</h1>
      <Input
        className="bg-red"
        label="Enter your birth date"
        type="date"
        onChange={setValue}
      />
      <Button variant="secondary" isFullWidth onClick={() => setValue(value)}>
        Calculate Now
      </Button>
      <p>Today's date: {today.toDateString()}</p>
      {value && (
        <p>
          You are
          {`  ${today.getFullYear() - new Date(value).getFullYear()} years old`}
        </p>
      )}
    </Container>
  )
}

export default Calculator
