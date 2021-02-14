import React from 'react'
import Dot from './dot'

const IncreaseFont: React.FC = () => {
  return (
    <Dot>
      <img
        data-testid="increase-font"
        style={{ height: '32px', display: 'block' }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAABX0lEQVQ4je3TPUuWYRQH8J/2lPFUCBUEgk7uIeEncHAIHYzURdxc3BT8CH6GhiYVjPoAQSit4igOKgYtgYshQr7r43Bftx7v7udR0dE/HDgv/+t/zvXGAxKaSnJdGArxKubuo9kiasFO8Oauoi9xXBCuYey2Qs2F+D0qJbwPtxUu4qvLKb8H/0i2m3rowQielxVbsBvE+rAZ4tE6oi9k91DDeJ6MR9GTSNKEP7EQ6vWOowWPkv+sjPApTLeYch9Dbj80hkFs4HfgbOMX5nNSE/4EwlTKv8JpyA8H4c/+fz25neUvoBttYdGTNC1shdoAviR/Ju3gKfpTbgXrsk8Fpht0j/YPVVfxumSnF5fX72aooreQ28NB8rdjobMw1QTeBetOk+b12ZKG7Xir8OEmw6IT5R/hR+DsyO6gIZpdPYYl/C3hxffcKnvzDVHBMtZS/K0ObxYdeJziw+uEH3CBc+/daNeUBUzeAAAAAElFTkSuQmCC"
      />
    </Dot>
  )
}

export default IncreaseFont
