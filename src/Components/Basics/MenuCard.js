import React from 'react'

const MenuCard = ({ PassedData }) => {
    console.log(PassedData )
    return (

        <>
            <section className="main-card--cointainer">
               
                {PassedData.map((curElem,index) => {
                    //below const is actully destructuring method in React
                    const {id,image,name,category,price,desrciption}=curElem
                    
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">
                                            {id}
                                        </span>
                                        <span className="card-author subtle">{category}
                                        </span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">
                                            {desrciption}
                                        </span>
                                        <div className="card-read">{price}</div>
                                    </div>
                                    <img src={image} alt="images" className="card-media" />
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })
                }





            </section>
        </>
    )
}

export default MenuCard;
