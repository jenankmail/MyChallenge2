import React, { useState } from 'react'

function Content() {
    const [isLarge, setIsLarge] = useState(false);

  return (
    <div>
        <label>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={(e) => {
          setIsLarge(e.target.checked);
        }}
      />
      Use large images
    </label>
    <hr />
    </div>
  )
}

export default Content