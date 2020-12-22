import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function InstaClick() {
  const [click, setClick] = useState(false)
  const [count, setCount] = useState(0)
  const counting = () => {
    setCount(count + 1)
  }

  const controlClick = () => {
    setClick(!click)
  }

  // console.log(click)
  return (
    <div>
      <section>
        <aside>

          {
            click ? <div onClick={controlClick}>
              <FavoriteBorderIcon style={{ backgroundColor: "red" }} />
              <h6>{count + 1} </h6>
            </div> : <div onClick={controlClick}>
                <FavoriteBorderIcon />
                <h6>{count - 0}</h6>
              </div>
          }
        </aside>
      </section>
    </div>
  )
}
export default InstaClick
