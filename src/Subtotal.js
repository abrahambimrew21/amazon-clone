import React from "react";
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';

function Subtotal(){
    return(
        <div>
            <CurrencyFormat
                renderText={(value)=>(
                    <div>
                        <p>
                            Subtotal (0 items):<strong>0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="Checkbox"/> This is Contains a Gift
                            <button>Procedur to checkout</button>
                         </small>
                    </div>
                )

                }
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                perefix={'$'}
            />

        </div>
    );
}
export default Subtotal;