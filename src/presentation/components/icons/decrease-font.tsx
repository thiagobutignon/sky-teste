import React from 'react'
import Dot from './dot'

const DecreaseFont: React.FC = () => {
  return (
    <Dot>
      <img
        data-testid="decrease-font"
        style={{ height: '32px', display: 'block' }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVQ4je3TzSqFURTG8R8dlEgxUAZGbkByBWZEIh8zMxdAuQTXYGCEImYmSsxlTEkMlZGkJJ/HwH5ZHe9xPhh6atVaa6/132u39+ZfSQ05uX7MhPgEG3+x2SGKwV7Q/VtoJ55LwEXM1wpqLIlHUMipm6wVXKptX1PuBf/Jx2nqUgvuAmwUFyGeqxc8HCCPaMNKyO3WC46Qw5SbCrkHtIf6aZzjMsc2s6IGXAXIUsp34TXkZwN41ffXk9lb9gIG0ROamtO0cB3WJrCV/LV0grxPdpI5yz/sHu0erTmgsjqtElzEeLXQvpLGBQwEG0yTZuvr1YIXQ9OL/I+wH2pufdzBj2rEWIiPcJNTdxD8DgxVAhdwjLMU75SpW0cvmlL8WAn8r0+9A8KZa5DDqBxVAAAAAElFTkSuQmCC"
      />
    </Dot>
  )
}

export default DecreaseFont
