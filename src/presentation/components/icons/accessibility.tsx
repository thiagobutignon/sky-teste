import React from 'react'
import Dot from './dot'

const Accessibility: React.FC = () => {
  return (
    <Dot>
      <img
        data-testid="accessibility"
        style={{ height: '32px', display: 'block' }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAAB0UlEQVRIie3VO08WQRQG4EdQ+QKYEG+FnVrpnyB2GiVqkBg7DcKvoDXGxMbOUiQaev2gtvBWAKHQaKJWqImXQghaUKzFnNXJZllWbHmTzdlzmfPOmTkzww7+AbtaxAzgXHzHcAhf8QGP8Bg//2cCk/iMAqt4jvmQq2H/hOvbIejgYSRZwAj2VmL6cB6LETcTttYVPIiBN9GT+cakJbqU2XpwKyNqhcmMIMceae2LkLsr/pJofCuCAWkPFioVlHgdiV7V+HqxhI/obyK5HElGQt+HKZzCIA7gYsjBsE9FHFyI8WNNJPfxw99NHo5BBTaktn0fciPzDUd8n9R1000kz/CiYjuCUdzJkhahj4Y/x0s8bSJ5i7lNfEMVkqFN4ubwJjdUN/c79jfNogUO4lsTyTucVH+oyiuoqOg5OjgReTYl6UqdcromwdGQTyp6jjNS13VrfH/QL91FizUTmJCquBJyouLvxTJWbHFOSJddIZ3gHHexLi3leug5bse4q1sRlJjJiMqKbmA2/mdDLysoCe61JRCzLYmWpNu22gwd6fQvR9x0TUwrjEt3UYE16aDOh1wL+wquNSVp8zL246z0Mh7HYXyR2rQrvYy/tlPBDmrxG1e9dd3834khAAAAAElFTkSuQmCC"
      />
    </Dot>
  )
}

export default Accessibility
