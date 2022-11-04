import React from 'react'
import './SectionStyle.css'
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/counterSlice';

const Section = () => {
   const dispach = useDispatch();

   const incrementHandler = () => {
     dispach(increment());
   };
  return (
    <div>
     
     <div className="container1">
   
        <h1>Ser<span>vices</span></h1>
        <hr />
        <div className="content1">
            <div className="kuli">
              <div className="abaya">

    <div><img src="/src/images/abaya1.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/abaya2.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/abaya3.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/abaya4.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    </div>
    <div className="comp">

    <div><img src="/src/images/comp1.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/comp2.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/comp3.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/comp4.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    </div>
    <div className="shart">

    <div><img src="/src/images/img1.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/img2.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/img3.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/img4.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    </div>
      <div className="suit">

    <div><img src="/src/images/suit1.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/suit2.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/suit2.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/suit4.webp" alt="" /><p>Lorem ipsum dolor sit amet.</p><button onClick={incrementHandler}>Add to Cart</button></div>
      </div>


            </div>
        </div>
     </div>

    </div>
  )
}

export default Section;