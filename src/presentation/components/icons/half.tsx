import React from 'react'
import Dot from './dot'

const Half: React.FC = () => {
  return (
    <Dot>
      <img
        data-testid="half"
        style={{ height: '32px', display: 'block' }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAABSUlEQVRIie3Vu0oDURDG8Z8KKhEbRRFLL42dbyEk4jNIxKcQsbP2ASy84AtoCp9AG7WzUayighcEhQgWxmJ3icTs2U229YMpltkz/xnOzBz+1YX6cvwzgkpsM5jAM+5wjBM0iiSwjkc08Y4z3MTfiT1grRfAMI7iIBdYxmDs22qDJHaAoW4qOIwP7qC/zZ8GSUC5tB4f2E7xhyBNVLMAI6I7uOhQQV7IPUq/D7QHqmAqDvSdlVGKplEOQcqiLjrtEZCoEoLM4xpfBSFzIcgY3goCYDwEeY1BRfUSgtxiQRdDlaLbEKSGUSwVhNRCzpJoF112SCBR1pzUZcxJA5tYlD7xWdqQcyvvau2ugTZfqJL9brIZEi27Jq6wotUMaZA9PTZMVbSLmvjAub/vSR2roSB5XsaSaN1UMItJPInatCZ6GT97qeBfHfUDbthv3PfoA6kAAAAASUVORK5CYII="
      />
    </Dot>
  )
}

export default Half
