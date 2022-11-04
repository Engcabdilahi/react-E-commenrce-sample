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
        <div className="line"></div>
        <div className="content1">
            <div className="kuli">
              <div className="abaya">

                                               {/* inata cabaayadaha ah */}
                                                    
    <div><img src="/src/images/abaya1.webp" alt="" /><p>Abaya-Umani  <br /><span>140.99$</span> </p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/abaya2.webp" alt="" /><p>Abaya-American  <br /><span>160.99$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/abaya3.webp" alt="" /><p>Abaya-Arab  <br /><span>180.99$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/abaya4.webp" alt="" /><p>Abaya-Dubai  <br /><span>190.99$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    </div><div className="comp">
                                                {/* inata compuertska ah */}

    <div><img src="/src/images/comp1.webp" alt="" /><p>Comp-Dell  <br /><span>9000.99$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/comp2.webp" alt="" /><p>Comp-Hp  <br /><span>900.99$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/comp3.webp" alt="" /><p>Comp-Mac  <br /><span>1919.99$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/comp4.webp" alt="" /><p>Comp-Mac  <br /><span>111.99$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    </div>
    <div className="shart">
                                               {/* inata shaadhadhka ah */}

    <div><img src="/src/images/img1.webp" alt="" /><p>Shart <br /><span>9.99$</span> </p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/img2.webp" alt="" /><p>Garan <br /><span>10.99$</span> </p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/img3.webp" alt="" /><p>shart <br /><span>9.99$</span> </p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/img4.webp" alt="" /><p>Garan <br /><span>2.99$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    </div>
      <div className="suit">
                                               {/* inata suudhadhka ah */}

    <div><img src="/src/images/suit1.webp" alt="" /><p>Suit-red <br /><span>10.90$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/suit2.webp" alt="" /><p>Suit-black <br /><span>200.90$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/suit2.webp" alt="" /><p>Suit-balck <br /><span>12.90$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
    <div><img src="/src/images/suit4.webp" alt="" /><p>Suit-blue <br /><span>13.90$</span></p><button onClick={incrementHandler}>Add to Cart</button></div>
      </div>


            </div>
        </div>
     </div>

    </div>
  )
}

export default Section;